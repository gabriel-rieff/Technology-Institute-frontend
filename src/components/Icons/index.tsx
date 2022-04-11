
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import styles from './styles.module.scss';

export function Icons(){

    return (
        <div className={styles.container}>

            <div className={styles.Main}>
                <a target='_blank' href={'https://www.linkedin.com/in/gabriel-rieff/'} rel="noreferrer">
                    <AiFillLinkedin size={30} />
                </a>

                <a target='_blank' href={'https://github.com/gabriel-rieff'} rel="noreferrer">
                    <AiFillGithub size={30} />
                </a>

                <a target='_blank' href={'https://www.instagram.com/gabriel.rieff/'} rel="noreferrer">
                    <AiFillInstagram size={30} />
                </a>
            </div>

        </div>
    )
}