
import { canSSRAuth } from '../../utils/canSSRAuth'

import { Icons } from '../../components/Icons'
import { Header } from '../../components/Header'

import Head from 'next/head'

import styles from './styles.module.scss'

export default function Dashboard(){
    return(
        <>
            <Head>
                <title>Technology Institute - Dash Board</title>
            </Head>

            <Header />
            <Icons />

            <main className={styles.container}>
                <h1>Want to know more about programming?</h1>
                <h2>Below are some useful links 🚀🚀</h2>

                <section className={styles.containerBox}>

                    <div className={styles.boxMain}>
                        <div className={styles.contentBox}>

                            <div className={styles.contentFront}>
                                <h2>01</h2>
                                <h3>Front-end</h3>
                                <span>The Front-end is closely related to the graphical interface of the project. 
                                    That is, it is where the application with which the user will interact is developed.
                                    directly, whether in software, websites, applications, etc. Therefore, it is essential
                                    that the developer has a concern for the user experience.</span>

                                    <a className={styles.a}>More information</a>
                            </div>
                            
                        </div>
                        
                        <div className={styles.contentBox}>
                            <div className={styles.contentBack}>
                                <h2>02</h2>
                                <h3>Back-end</h3>
                                <span>The function of a backend is related to servers, databases, security, structure,
                                    content management and updates. This type of application serves to process the data and also
                                    it is the place where the insertions, archiving and readings of data occur, behind an application.</span>
                                    <a className={styles.a}>More information</a>
                            </div>
                        </div>
                        
                        <div className={styles.contentBox}>
                            <div className={styles.contentMobile}>
                                <h2>03</h2>
                                <h3>Mobile</h3>
                                <span>Mobile programming is doing any kind of development for any kind of mobile device. 
                                    In short, mobile development encompasses the development of applications for smartphones, tablets, smartwatches 
                                    and all other types of wearable devices that run some sort of mobile operating system.</span>
                                    <a className={styles.a}>More information</a>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </main>
        </>
    )
}
export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
      props: {}
    }
  })