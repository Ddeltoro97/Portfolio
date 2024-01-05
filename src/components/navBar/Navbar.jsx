import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse, faBars, faBriefcase, faUser, faPhone} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import styles from "./Navbar.module.css"

export default function Navbar({children}){

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    }


    return(
        <div className = {styles.container}>
            <div style={{width: isOpen ? "250px" : "50px"}} className={styles.sidebar}>
                <div className={styles.topSection}>
                    <h2 style={{display: isOpen ? "block" : "none"}}>David's Portfolio</h2>
                    <FontAwesomeIcon onClick={toggle} className={styles.icon} icon={faBars}/>
                </div>
                <NavLink to = '/'>
                    <div className={styles.section}>
                        <FontAwesomeIcon icon={faHouse}/>
                        <h2 style={{display: isOpen ? "block" : "none"}}> Home</h2>
                    </div>
                </NavLink>
                <NavLink to = '/about'>
                    <div className={styles.section}>
                        <FontAwesomeIcon icon={faUser}/>
                        <h2 style={{display: isOpen ? "block" : "none"}}> About me</h2>
                    </div>
                </NavLink>
                <NavLink to = '/projects'>
                    <div className={styles.section}>
                        <FontAwesomeIcon icon={faBriefcase}/>
                        <h2 style={{display: isOpen ? "block" : "none"}}> My Projects</h2>
                    </div>
                </NavLink>
                <NavLink to = '/contact'>
                    <div className={styles.section}>
                        <FontAwesomeIcon icon={faPhone}/>
                        <h2 style={{display: isOpen ? "block" : "none"}}> Contact</h2>
                    </div>
                </NavLink>
            </div>
            <div className={styles.component}>
            <main>{children}</main>
            </div>
        </div>
    )
}