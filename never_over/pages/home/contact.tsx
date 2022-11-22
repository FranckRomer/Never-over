import React from 'react'
import Header from '../../components/home/Header'
import styles from "../../styles/home/contact.module.css"
import Link from 'next/link'

const Contact = () => {
    return (
        <>
            <Header></Header>
            <body className={styles.body}>
                {/* <h1>Contact</h1> */}
                {/* ---------------------------- */}
                <section className={styles.contact}>
                    <div className={styles.formulario}>
                        <h1>Enviar mensaje directo</h1>
                        <form action="">
                            <label htmlFor=""></label>
                            <input type="text" />
                        </form>
                    </div>
                    <div></div>
                    <div className={styles.descripcion}>
                        <div>
                            <h1>Contacta me ...</h1>
                            <p>Rellenando el formulario se mandara un correo instantario o tambien puedes contactarme por medio de mis redes</p>
                        </div>
                        <div className={styles.redes}>
                            <h1>Redes</h1>
                        </div>
                        
                    </div>
                </section>

                {/* ---------------------------- */}
                <section className={styles.about}>
                    <h1>More Info</h1>
                    <p>Conoce mas sobre mi</p>
                    <Link href="/home/contact" className={styles.linkAboutMe}>
                        <button>About Me</button>
                    </Link>
                </section>
            </body>
        </>
    )
}

export default Contact