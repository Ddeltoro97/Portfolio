import OneProject from '../../components/OneProject/OneProject';

import styles from './Projects.module.css'

export default function Home(){

    const projectsInfo = [
        {
            name: 'The Ultimate Drivers API',
            description: 'This app allows you to find every existing F1 driver. You can search for them using their names, or filter them by teams. On top of that this app also allows you to create your own F1 drivers while also giving you the option to edit or delete your own created drivers. It has a responsive design, meaning you can also use this app on your tablet or phone.',
            website: 'https://pi-drivers-phi.vercel.app/',
            image: 'https://i.postimg.cc/prgyDDn2/Captura-de-pantalla-2024-01-04-163650.png'

        },
        {
            name: 'Cer0',
            description: 'This app was created by me and my peers from Henry. This is a sales application that is looking to simplify work for small business and big ones too. In this app you can keep track of all sales and product inventory. There are two types of user: business and sales agent. Business users can create sales, locations, ect while sales accounts have the posibility of altering the inventory and registering sales. There are multiple packages for this app, being the most basic one the free one.',
            website: 'https://cer03.vercel.app/',
            image: 'https://i.postimg.cc/NMkW8Y9L/Captura-de-pantalla-2024-01-04-164632.png'
        }
    ]

    return(
        <div>
            <h1>My Projects</h1>
            <hr />
            {projectsInfo.map((project) =>(
                <OneProject name={project.name} description={project.description} website={project.website} image={project.image}/>
            ))}
        </div>
    )
}