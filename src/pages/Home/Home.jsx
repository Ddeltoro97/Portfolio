import { useNavigate } from 'react-router-dom';

import styles from './Home.module.css'

export default function Home(){

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
            Welcome to my portfolio
        </h1>
        <hr className={styles.line} />
        <div className={styles.body}>
        <h2>
            Hi my name is David, I am a {ageValue} year old full stack programmer, from Barranquilla, Colombia. I am currently able to design, edit, manage and create websites that anyone can benefit from. Feel free to take a look at my latest proyects.
        </h2>
        <button className={styles.boton} onClick={seeProjects}>My Projects</button>
        </div>

        </div>
    )
}