import { createContext, ReactNode, useState, useEffect } from 'react';

import { api } from '../services/apiCliente'

import { destroyCookie, setCookie, parseCookies } from 'nookies'

import Router from 'next/router'

import { toast } from 'react-toastify'

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpProps) => Promise<void>;
}

type UserProps = {
  id: string;
  name: string;
  email: string;
}

type SignInProps = {
  email: string;
  password: string;
}

type SignUpProps = {
  name: string;
  phone: string;
  email: string;
  city: string;
  password: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)



export function signOut(){
  try{
    destroyCookie(undefined, '@nextauth.token')
    Router.push('/login')
  }catch{
    console.log('error when logging out')
  }
}



export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user;

  useEffect(() => {

    const { '@nextauth.token': token } = parseCookies();

    if(token){
      api.get('/detail').then(response => {
        const { id, name, email }  = response.data;

        setUser({
          id,
          name,
          email
        })

      })
      .catch(() => {
        signOut();
      })
    }

  }, [])


  async function signIn({ email, password}: SignInProps ){
    try{
      const response = await api.post('/session', {
        email,
        password
      })

      const { id, name, token } = response.data

      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/"
      })

      setUser({
        id,
        name,
        email,
      })

      api.defaults.headers['Authorizations'] = `Bearer ${token}`

      toast.success('Successfully logged in', {
        icon: "🚀"
      });

      Router.push('/dashboard')


    }catch(err){
      toast.error('Error trying to log in', {
        icon: '🤯'
      })
      console.log("Erro ao acessar ", err)

    }
  }


  async function signUp({ name, phone, email, city, password }: SignUpProps ){

    try{

      const response = await api.post('/users',{
        name,
        phone,
        email,
        city,
        password
      })

      toast.success('Registered successfully', {
        icon: "🚀"
      });

      Router.push('/login')

    }catch(err){

      toast.error('Error in registration', {
        icon: '🤯'
      })
      
      console.log('Erro ao cadastrar')
    }

  }


  return(
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}