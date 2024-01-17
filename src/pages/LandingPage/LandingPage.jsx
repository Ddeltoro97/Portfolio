import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


import styles from './LandingPage.module.css'

export default function LandingPage(){


    const [t, i18n] = useTranslation("navBar")
    const changeLanguage = (lang) =>{
        i18n.changeLanguage(lang);
    };

    const navigate = useNavigate()

   const english = () =>{
    changeLanguage('en')
    navigate('/home');
   }
   const spanish = () =>{
    changeLanguage('es')
    navigate('/home');
   }

    return(
        <div className={styles.container}>
            <h1>Select Language</h1>
            <div>
            <button onClick={english} className={styles.button}>English</button>
            <button onClick={spanish} className={styles.button}>Español</button>
            </div>
        </div>
    )
}