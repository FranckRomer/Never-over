import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Header from '../../components/home/Header'
import Image from 'next/image'
import styles from '../../styles/home/Login.module.css'
import Head from 'next/head'
import { Login_component } from '../../components/login/login_component'
import { Register_component } from '../../components/login/register_component'

const LoginPage = () => {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div className={styles.body}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&display=swap" rel="stylesheet" />
            </Head>

            <Header></Header>

            <div className={styles.main}>

                

                <div className={styles.contain}>
                    <Image src="/logoWhite.png" alt="Vercel Logo" width={220} height={220} />
                    <div className={styles.login_register}>
                        {showLogin ?
                            <div className={styles.login_register}>
                                <h1 className={styles.titulo1} onClick={() => { setShowLogin(true) }}>Login</h1>
                                <h2 className={styles.titulo2} onClick={() => { setShowLogin(false) }}>Register</h2>
                            </div>
                            :
                            <div className={styles.login_register}>
                                <h2 className={styles.titulo2} onClick={() => { setShowLogin(true) }}>Login</h2>
                                <h1 className={styles.titulo1} onClick={() => { setShowLogin(false) }}>Register</h1>
                            </div>
                        }
                    </div>
                    {showLogin
                        ?
                        <Login_component />
                        :
                        <Register_component />
                    }

                </div>

            </div>

        </div>
    )
}

export default LoginPage