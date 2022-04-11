
import { Header } from '../components/Header'
import Image from 'next/image'
import Img1 from '../../public/img2.jpg'
import { Icons } from '../components/Icons'

import Head from 'next/head'


import styles from '../../styles/home.module.scss'


export default function Home() {
  return (
    <>
    <Head>
      <title>Technology Institute - Login</title>
    </Head>

    <Header />

    <Icons />

    <main className={styles.conteiner}>

      <div className={styles.teste}>
        <div className={styles.text}>
            <p className={styles.typingAnimation} >A 100% free platform, come and sign up and get access to several free apps.</p> 
        </div>

        <div className={styles.containerHeader}>
            <section className={styles.ctaText}>
              <span>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. 
                Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </section>

            <Image src={Img1} alt='person programming' />
        </div>
      </div>

    </main>
    </>
  )
}