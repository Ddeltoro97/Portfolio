import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from "react-router-dom";
import image from '../../utils/IMG_3532.jpeg';

import { useTranslation } from 'react-i18next';

import styles from './About.module.css'

export default function About(){

    const [t, i18n] = useTranslation("about")

    return(
        <div className={styles.about}>
            <h1>{t("header.message")}</h1>
            <hr className={styles.line} />
            <div>
            <div className={styles.flex}>
                <img className={styles.image} src={image} alt="" />
                <div className={styles.container}>
                    <h3>{t("body.message")}</h3>
                    <div className={styles.contactInfo}>
                        <h3>{t("body.small")} </h3>
                        <a href="https://github.com/Ddeltoro97"> <FontAwesomeIcon className={styles.icon} icon={faGithub}/></a>
                        <a href="https://www.linkedin.com/in/david-del-toro-8aa143102/"><FontAwesomeIcon className={styles.icon} icon={faLinkedin}/></a>
                        <h2>{t("contact.message")} <NavLink to = "/contact">{t("contact.message2")}</NavLink> {t("contact.message3")}</h2>
                    </div>
                </div>         
            </div>

            <h2 className={styles.technologies}>{t("body.title")}</h2>
                    <div className={styles.techHolder}>
                        <div className={styles.tech}>
                            <h3>HTML</h3>
                            <img className={styles.techimg} src="https://mariohernandez.vercel.app/assets/html.d20c9482.png" alt="HTML" />
                        </div>
                        <div className={styles.tech}>
                            <h3>CSS</h3>
                            <img className={styles.techimg} src="https://mariohernandez.vercel.app/assets/css.4040bdba.png" alt="CSS" />
                        </div>
                        <div className={styles.tech}>
                            <h3>Javascript</h3>
                            <img className={styles.techimg} src="https://mariohernandez.vercel.app/assets/javascript.d04a05c4.png" alt="Javascript" />
                        </div>
                        <div className={styles.tech}>
                            <h3>Typescript</h3>
                            <img className={styles.techimg} src="data:image/png;base64,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" alt="Javascript" />
                        </div>
                        <div className={styles.tech}>
                            <h3>React</h3>
                            <img className={styles.techimg} src="https://mariohernandez.vercel.app/assets/react.e00184ba.png" alt="React" />
                        </div>
                        <div className={styles.tech}>
                            <h3>Redux</h3>
                            <img className={styles.techimg} src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="Redux" />
                        </div>
                        <div className={styles.tech}>
                            <h3>Node.js</h3>
                            <img className={styles.techimg} src="https://mariohernandez.vercel.app/assets/node.f467a70a.png" alt="Node.js" />
                        </div>
                        <div className={styles.tech}>
                            <h3>Sequelize</h3>
                            <img className={styles.techimg} src="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png" alt="Sequelize" />
                        </div>
                        <div className={styles.tech}>
                            <h3>postgreSQL</h3>
                            <img className={styles.techimg} src="https://mariohernandez.vercel.app/assets/postgres.8e58ad2c.png" alt="postgreSQL" />
                        </div>
                        <div className={styles.tech}>
                            <h3>Tailwind</h3>
                            <img className={styles.techimg} src="data:image/png;base64,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" alt="Tailwind" />
                        </div>
                </div>
                
            
            <div>
            </div>
            </div>
        </div>
    )
}