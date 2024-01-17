import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Home.module.css'

export default function Home(){
  
    const [t, i18n] = useTranslation("home")

    const navigate = useNavigate();

    const seeProjects = () =>{
        navigate("/projects");
    }

    const birthdate = new Date(1997, 11, 21);

    const age = (birthdate) =>{
        const today = new Date();
        const age = today.getFullYear() - birthdate.getFullYear() - 
             (today.getMonth() < birthdate.getMonth() || 
             (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
            //  console.log('today', today)
        return age;
    }
    const ageValue = age(birthdate);
    // console.log('age', ageValue)
    // console.log('birthday', birthdate)
    
    

    return(
        <div className={styles.container}>

        <h1>
            {t("header.message")}
        </h1>
        <hr className={styles.line} />
        <div className={styles.body}>
        <h2>
        {t("body1.message")}{ageValue}{t("body2.message")}
        </h2>
        <button className={styles.boton} onClick={seeProjects}>{t("button.message")}</button>
        </div>

        </div>
    )
}