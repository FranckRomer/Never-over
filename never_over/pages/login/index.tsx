import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Header from '../../components/home/Header'
import Image from 'next/image'
import styles from '../../styles/home/Login.module.css'

const LoginPage = () => {
    const [Credencials, setCredencials] = React.useState({
        email: '',
        password: ''
    })
    const [ojo, setOjo] = useState(false)
    const [typePass, setTypePass] = useState("password")

    const router = useRouter()

    const handleChange = (e: any) => {
        setCredencials({
            ...Credencials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(Credencials)
        const response = await axios.post('../api/auth/login', Credencials)
        console.log(response)

        if (response.status === 200) {
            router.push('../profile/dashboard')
        }
    }

    const CambiarTypePass = () => {
        setOjo(!ojo)
        if (ojo) {
            console.log(typePass);
            setTypePass("password")
        } else {
            console.log(typePass);
            setTypePass("text")
        }
    }

    return (
        <div className={styles.body}>
            <Header></Header>

            <div className={styles.main}>            
                <h1 className={styles.titulo}>Login</h1>
                <form onSubmit={handleSubmit} className={styles.forms}>
                    <div className={styles.user_contain}>
                        <label ><Image src="/ico/userWhite.ico" alt='Menu' width={15} height={15} /> </label>
                        <input
                            name='username'
                            type="text"
                            placeholder='UserName'
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.pass_contain}>
                        <label><Image src="/ico/bloquearW.ico" alt='Menu' width={15} height={15} /></label>
                        <div className={styles.pass}>
                            <input
                                name='password'
                                type={typePass}
                                placeholder='password'
                                onChange={handleChange}
                            />
                            <div onClick={CambiarTypePass}>
                                {ojo ? <Image src="/ico/ojoOnW.ico" alt='Menu' width={15} height={15} /> : <Image src="/ico/ojoOffW.ico" alt='Menu' width={15} height={15} />}
                            </div>
                        </div>
                    </div>
                    <br />
                    <button >Login</button>
                </form>
            </div>

        </div>
    )
}

export default LoginPage