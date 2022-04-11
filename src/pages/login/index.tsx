
import Link from 'next/link'
import { AuthContext } from '../../contexts/AuthContext'

import { useContext, useState , FormEvent } from 'react'

import Head from 'next/head'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'

import { toast } from 'react-toastify'
import styles from './styles.module.scss'

import { canSSRGuest } from '../../utils/canSSRGuest'

export default function Sigup() {

  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent){
    event.preventDefault();

    if(email  === '' || password === ''){
      toast.success("You can provide any string", {
        icon: "🚀"
      });


      return;
    }

    setLoading(true);

    let data = {
      email,
      password
    }

    await signIn(data)

    setLoading(false);
  }

  return (
    <>
    <Head>
      <title>Technology Institute - Login</title>
    </Head>
    <div className={styles.conteiner}>
      <div className={styles.title}>
        <h1>Login</h1>
      </div>

      <div className={styles.containerForm}>
        <form onSubmit={handleLogin} >
          
            <h3>E-mail</h3>
            <Input
            placeholder='Type your e-mail'
            type='text'
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
            />
          
            <h3>Password</h3>
            <Input
            placeholder='Type your password'
            type='password'
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
            />

          <Button
          type='submit'
          loading={loading}
          >
            Access
          </Button >
        </form>


          <Link href={'/signup'} >
            <a className={styles.text} > Dont have an account? Register </a>
          </Link>
          

      </div>
      
    </div>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return{
  props:{

  }
  }
})
