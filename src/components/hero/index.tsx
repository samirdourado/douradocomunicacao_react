import Image from "next/image";
import styles from './styles.module.scss';

const Hero = () => {

    return (
        <figure className={styles.container}>
            <Image
                src="/hero.jpg"
                alt="Imagem de fundo"
                // width={1000}
                // height={700}
                fill={true}
                className={styles.heroImg}
            />
        </figure>
    )

};

export default Hero;