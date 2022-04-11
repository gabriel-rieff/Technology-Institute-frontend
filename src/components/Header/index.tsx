
import { useContext, useState } from 'react'
import { AuthContext }  from '../../contexts/AuthContext'

import { parseCookies } from 'nookies'

import styles from './styles.module.scss';
import  Link  from 'next/link'

import { FiLogOut, FiLogIn } from 'react-icons/fi'

export function Header(){

    const { '@nextauth.token': token } = parseCookies();

    const { signOut } = useContext(AuthContext)
    const { signIn } = useContext(AuthContext)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>Technology <br/>Institute</h1>
                </div>
                
                <nav className={styles.containerLiks}>
                    <Link href={'/'} >
                        <a>Home</a>
                    </Link>

                    <Link href={'/dashboard'} >
                        <a>Benefits</a>
                    </Link>

                    <Link href={'/about'} >
                        <a>About</a>
                    </Link>
                </nav>

                {token ? (
                <div className={styles.logout}>
                    <button onClick={signOut}>
                        <FiLogOut color='#FFF' size={30}/>
                    </button>
                </div>
                ):
                (<div className={styles.logout}>
                    <button>
                        <Link href={'/login'} >
                            <a>
                                <FiLogIn color='#FFF' size={30}/>
                            </a>                           
                        </Link>
                    </button>
                </div>)}

            </div>
            <div className={styles.line}>
                <div></div>
            </div>
        </div>
    )
}

