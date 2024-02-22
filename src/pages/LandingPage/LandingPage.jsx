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
           <h1>Hello</h1>
           <h3>I just wanted to inform you that this is no longer my portfolio, take a look at my newer one!</h3>
           <a href="https://new-portfolio-plum-one.vercel.app/">Click here for my updated portfolio</a>
        </div>
    )
}