import styles from './header.module.css'
import logo from '../../assets/img/logo adl 1.png'
import { Button } from '../../ui/button/btn-header/btn-header'
import { useState } from 'react'

export const Header = () => {
    const [ menuOpen, setMenuOpen ] = useState(false)
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.top_nav}>
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.line}></div>

                    <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
                       <span>☰</span>
                    </div>
                <div className={styles.navigation}>
                    <a href="#" className={styles.home}>HOME</a>
                    <a href='#'>ABOUT</a>
                    <a href='#'>PRICING</a>
                    <a href='#'>PROJECTS</a>
                    <a href='#'>BLOG</a>
                    <a href='#'>CONTACT US</a>
                </div>                    
                </div>
                <div className={styles.btn}>
                    <Button text="DOWLOAD OUR CV" />
                </div>
                {menuOpen && (
                    <div className={styles.mobile_menu}>
                        <a href="#">HOME</a>
                        <a href="#">ABOUT</a>
                        <a href="#">PRICING</a>
                        <a href="#">PROJECTS</a>
                        <a href="#">BLOG</a>
                        <a href="#">CONTACT US</a>
                    </div>
                )}
            </nav>
        </header>
    )
}