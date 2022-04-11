

import { FormEvent, useState, useContext } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'

import Image from 'next/image'
import SVG from '../../../public/globalization-animate.svg'

import { AuthContext } from '../../contexts/AuthContext'
import { canSSRGuest } from '../../utils/canSSRGuest'

import { toast } from 'react-toastify'
import styles from './styles.module.scss'

export default function SignUp(){
    const { signUp } =useContext(AuthContext)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')    
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)


    async function handleSignUp(event: FormEvent){

        event.preventDefault();
        if(name === '' || phone === '' || email === '' || city === '' || password === ''){

            toast.error('Fill in all fields', {
                icon: '🤯'
              })
            return;
        }

        setLoading(true)

        let data = {
            name,
            phone,
            email,
            city,
            password
        }

        await signUp(data)

        setLoading(false)
    }


    return (
        <>
            <Head>
                <title>Technology Institute - Sigup</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <Image src={SVG} alt='illustrative images' />
                    <h3>come for the best countrys technology platform. <span>Make your registration.</span></h3>
                </div>

            <div className={styles.line}></div>
                <div className={styles.containerRight}>
                    <div className={styles.containerForm}>
                        <form onSubmit={handleSignUp}>

                            <h1>Register</h1>

                            <div className={styles.name}>
                                <h3>Name:</h3>

                                <Input
                                placeholder='Ex: Gabriel rieff motta'
                                type='text'
                                value={name}
                                onChange={ (e) => setName(e.target.value)}
                                />
                            </div>
                            
                            <div className={styles.phone}>
                                <h3>Phone:</h3>

                                <Input
                                placeholder='Ex: 51900000000'
                                type='text'
                                value={phone}
                                onChange={ (e) => setPhone(e.target.value)}
                                />
                            </div>

                            <div className={styles.email}>
                                <h3>E-mail:</h3>

                                <Input
                                placeholder='Ex: gabrielrieff@gmail.com'
                                type='email'
                                value={email}
                                onChange={ (e) => setEmail(e.target.value)}
                            />
                            </div>

                            <div className={styles.city}>
                                <h3>City:</h3>

                                <Input
                                placeholder='Ex: Rio Grande do Sul'
                                type='text'
                                value={city}
                                onChange={ (e) => setCity(e.target.value)}
                                />
                            </div>

                            <div className={styles.password}>
                                <h3>Password:</h3>

                                <Input
                                placeholder='@123789g'
                                type='password'
                                value={password}
                                onChange={ (e) => setPassword(e.target.value)}
                                />
                            </div>

                            <Button
                            type='submit'
                            loading={loading}
                            >
                                Confirm

                            </Button>

                            <Link href="/login">
                                <a className={styles.text} >I already have a registration</a>
                            </Link>
                        </form>

                    </div>   
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