import { useTranslation } from 'react-i18next';

import styles from './OneProject.module.css'

export default function OneProject({name, description, website, image}){
    const [t, i18n] = useTranslation("projects")

    return(
        <div className={styles.container}>
            <div >
                <div className={styles.nameImage}>
                    <h3>{name}</h3>
                    <img className={styles.image} src={image} alt={name} />
                </div>
                <div className={styles.descriptionHolder}>
                    <p>{description}</p>
                </div >
            </div>
        

            <div className={styles.finalHolder}>
                <a href={website}>{t("click.message")}</a>
            </div>
        </div>
    )
}