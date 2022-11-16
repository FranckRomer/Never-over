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
                <button>
                    <Image src="/ico/menuWhite.ico" alt='Menu' width={30} height={30} onClick={ChangeModal} />
                </button>

                <button className={styles.links}>
                    <Link href="/" className={styles.link}><Image src="/ico/homeWhite.ico" alt='Notificaciones' width={20} height={20} /> <p>Home</p> </Link>
                    <Link href="/about" className={styles.link}><Image src="/ico/contactUsWhite.ico" alt='Notificaciones' width={20} height={20} /> <p>About Us</p></Link>
                    <Link href="/profile" className={styles.link}><Image src="/ico/userWhite.ico" alt='Notificaciones' width={20} height={20} /> <p>User</p></Link>
                    {/* <Image src="/ico/notificacionWhite.ico" alt='Notificaciones' width={20} height={20} /> */}
                </button>
            </div>
            {
                modal ?
                    <div className={styles.modalOpen}>
                        <button onClick={() => setModal(false)} className={styles.closeModal}></button>
                        <div className={styles.triangulito}></div>
                        <ul className={styles.menu}>
                            <Link href="/" className={styles.linkMenu}> <li><Image src="/ico/homeWhite.ico" alt='Notificaciones' width={20} height={20} /> Home</li></Link>                            
                            <Link href="/about" className={styles.linkMenu}><li><Image src="/ico/contactUsWhite.ico" alt='Notificaciones' width={20} height={20} /> About Us</li></Link>
                            <Link href="/profile" className={styles.linkMenu}><li><Image src="/ico/userWhite.ico" alt='Notificaciones' width={20} height={20} /> User</li></Link>
                            <div></div>
                            <Link href="/proyects"><li>Proyects</li></Link>                                                        
                            {/* <Link href="/profile/dashboard"><li>Dashboard</li></Link> */}
                        </ul>

                    </div>
                    : ""
            }







            {/* <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/proyects">Proyects</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/profile">Profile</Link>
                </li>
                <li>
                    <Link href="/profile/dashboard">Dashboard</Link>
                </li>
            </ul> */}

        </div >
    )
}

export default Header