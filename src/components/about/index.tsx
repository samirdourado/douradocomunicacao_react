import Image from 'next/image';
import styles from './styles.module.scss';

const AboutUs = () => {
    return (
        <main className={styles.container} id="quemsomos">
            <article>
                <h2>SOBRE</h2>
                <p>
                    Olá, bem vindo a Dourado Comunicação. Somos prestadores de serviço proficientes em web designer, marketing local e designer gráfico, ou seja desenvolvemos sites, cuidamos da sua presença na internet e desenvolvemos material gráfico impresso.
                </p>
            </article>
            <figure className={styles.aboutImg__container}>
                {/* <Image
                    src="/aboutWall.png"
                    alt="Sobre wallpaper"
                    // width={320}
                    // height={186}
                    fill={true}
                    className={styles.aboutImg}                    
                /> */}
                <img src="aboutWall.png" alt='sobre nós' className={styles.aboutImg}></img>
            </figure>
        </main>
    )
};

export default AboutUs;