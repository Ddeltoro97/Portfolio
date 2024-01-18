import OneProject from '../../components/OneProject/OneProject';
import { useTranslation } from 'react-i18next';

import styles from './Projects.module.css'

export default function Home(){

    const [t, i18n] = useTranslation("projects")

    const projectsInfo = [
        {
            name: 'The Ultimate Drivers API',
            description: t("drivers.message"),
            website: 'https://pi-drivers-phi.vercel.app/',
            image: 'https://i.postimg.cc/prgyDDn2/Captura-de-pantalla-2024-01-04-163650.png'

        },
        {
            name: 'Cer0',
            description: t("cer0.message"),
            website: 'https://cer03.vercel.app/',
            image: 'https://i.postimg.cc/NMkW8Y9L/Captura-de-pantalla-2024-01-04-164632.png'
        }
    ]

    return(
        <div>
            <h1>{t("header.message")}</h1>
            <hr />
            <div className={styles.projectHolder}>

            
                {projectsInfo.map((project) =>(
                <OneProject name={project.name} description={project.description} website={project.website} image={project.image}/>
                ))}
            </div>
        </div>
    )
}