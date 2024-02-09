import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse, faBars, faBriefcase, faUser, faPhone, faMedal} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { useTranslation } from "react-i18next";

import styles from "./Navbar.module.css"

export default function Navbar({children}){

    const [t, i18n] = useTranslation("navBar");

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    const location = useLocation()
    const currentRoute = location.pathname;


    // console.log(currentRoute)

    return(
        <div className = {styles.container}>
            <div style={{width: isOpen ? "280px" : "50px", display: currentRoute == '/' ? "none" : "block"} } className={styles.sidebar}>
                <div className={styles.topSection}>
                    <h2 style={{display: isOpen ? "block" : "none"}}>{t("header.message")}</h2>
                    <FontAwesomeIcon onClick={toggle} className={styles.icon} icon={faBars}/>
                </div>
                <NavLink to = '/home'>
                    <div style={{background: currentRoute == '/home' && "#2859D2"}} className={styles.section}>
                        <FontAwesomeIcon icon={faHouse}/>
                        <h2 style={{display: isOpen ? "block" : "none"}}>{t("home.message")}</h2>
                    </div>
                </NavLink>
                <NavLink to = '/about'>
                    <div style={{background: currentRoute == '/about' && "#2859D2"}} className={styles.section}>
                        <FontAwesomeIcon icon={faUser}/>
                        <h2 style={{display: isOpen ? "block" : "none"}}> {t("about.message")}</h2>
                    </div>
                </NavLink>
             
                <NavLink to = '/projects'>
                    <div style={{background: currentRoute == '/projects' && "#2859D2"}} className={styles.section}>
                        <FontAwesomeIcon icon={faBriefcase}/>
                        <h2 style={{display: isOpen ? "block" : "none"}}> {t("proyects.message")}</h2>
                    </div>
                </NavLink>
                <NavLink to = '/certificates'>
                    <div style={{background: currentRoute == '/certificates' && "#2859D2"}} className={styles.section}>
                        <FontAwesomeIcon icon={faMedal}/>
                        <h2 style={{display: isOpen ? "block" : "none"}}> {t("certificates.message")}</h2>
                    </div>
                </NavLink>
                <NavLink to = '/contact'>
                    <div style={{background: currentRoute == '/contact' && "#2859D2"}} className={styles.section}>
                        <FontAwesomeIcon icon={faPhone}/>
                        <h2 style={{display: isOpen ? "block" : "none"}}> {t("contact.message")}</h2>
                    </div>
                </NavLink>
            </div>
            <div className={styles.component}>
            <main>{children}</main>
            </div>
            <div onClick={toggle} style={{display: isOpen ? "block" : "none"}}className={styles.close}>

            </div>
        </div>
    )
}