import styles from './OneProject.module.css'

export default function OneProject({name, description, website, image}){


    return(
        <div className={styles.container}>
            <div className={styles.nameImage}>
                <h3>{name}</h3>
                <img className={styles.image} src={image} alt={name} />
            </div>
            <div className={styles.descriptionHolder}>
                <p>{description}</p>
            </div >
            <div className={styles.finalHolder}>
                <a href={website}>Click here to test it</a>
            </div>
        </div>
    )
}