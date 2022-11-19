import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/Header/Header.module.css'
import Image from 'next/image'

const Header = () => {
    const [modal, setModal] = useState(false)

    function ChangeModal() {
        setModal(!modal)
    }

    return (
        <div className={styles.Header}>
            <div className={styles.inicio}>
                <div>
                    <h3><Link href="/" className={styles.link}> <p>Never-Over</p> </Link></h3>
                </div>

                <button className={styles.links}>
                    <Link href="/" className={styles.link}><Image src="/ico/homeWhite.ico" alt='Notificaciones' width={20} height={20} /> <p>Home</p> </Link>
                    <Link href="/home/contact" className={styles.link}><Image src="/ico/contactUsWhite.ico" alt='Notificaciones' width={20} height={20} /> <p>Contact</p></Link>
                    <Link href="/profile" className={styles.link}><Image src="/ico/userWhite.ico" alt='Notificaciones' width={20} height={20} /> <p>User</p></Link>
                    <div className={styles.notificaciones}>
                        <Image  src="/ico/notificacionWhite.ico" alt='Notificaciones' width={20} height={20} />
                    </div>                    
                    <div className={styles.hamburguesa} onClick={ChangeModal} >
                        <Image src="/ico/menuWhite.png" alt='Menu' width={20} height={20} />
                    </div>

                </button>


            </div>
            {
                modal ?
                    <div className={styles.modalOpen}>
                        <button onClick={() => setModal(false)} className={styles.closeModal}></button>
                        <div className={styles.hamburguesa2} onClick={ChangeModal} >
                            <Image src="/ico/menuWhite.png" alt='Menu' width={20} height={20} />
                        </div>
                        <div className={styles.triangulito}></div>
                        <ul className={styles.menu}>
                            <Link href="/" className={styles.linkMenu}> <li><Image src="/ico/homeWhite.ico" alt='Notificaciones' width={20} height={20} /> Home</li></Link>
                            <Link href="/home/contact" className={styles.linkMenu}><li><Image src="/ico/contactUsWhite.ico" alt='Notificaciones' width={20} height={20} /> Contact </li></Link>
                            <Link href="/profile" className={styles.linkMenu}><li><Image src="/ico/userWhite.ico" alt='Notificaciones' width={20} height={20} /> User</li></Link>
                            <hr />
                            <Link href="/home/about"><li>About Me</li></Link>
                            <hr />
                            <Link href="/proyects"><li>Proyects</li></Link>
                            {/* <Link href="/profile/dashboard"><li>Dashboard</li></Link> */}
                        </ul>

                    </div>
                    : ""
            }
        </div >
    )
}

export default Header