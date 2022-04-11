
import { Icons } from '../../components/Icons'
import { Header } from '../../components/Header'

import Image from 'next/image'
import img from '../../../public/img1.jpg'

import Head from 'next/head'

import styles from './styles.module.scss'

export default function About(){
    return(
        <>
            <Head>
                <title>Technology Institute - About</title>
            </Head>

            <Header />
            <Icons />

        <main className={styles.container}>

            <div className={styles.content}>
                <h1>Want to know a little more about us?</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. 
                    Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. 
                    Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className={styles.image}>

                <Image src={img} alt='image of people programming'/>

            </div>
            

            
        </main>
        </>
    )
}