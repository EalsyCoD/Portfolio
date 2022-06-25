import React from "react";
import styles from './Header.module.scss'
import img from '../../assets/logo.svg'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img src={img} className={styles.img} alt="Logo"></img>
                <div className={styles.nav}>
                    <p className={styles.text}>About</p>
                    <p className={styles.text}>Services</p>
                    <p className={styles.text}>Pricing</p>
                    <p className={styles.text}>Blog</p>
                    <button className={styles.button}>CONTACT</button>
                </div>
            </div>
            <div className={styles.main}>
                <h1 className={styles.portfolio}>Portfolio</h1>
            </div>
            <div className={styles.maintext}>
                <p>Agency provides a full service range including technical skills, design, business understanding.</p>
            </div>
        </div>
    )
}


export default Header;