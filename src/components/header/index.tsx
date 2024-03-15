import Image from "next/image";
import NavButtons from "../navButtons";
import styles from './styles.module.scss';

const Header = () => {
    return (
        <header className={styles.container}>
        <Image
          src={'/logoA.png'}
          alt="logo Dourado Comunicação"
          width={165}
          height={50}
        />
        <NavButtons/>
      </header>
    )
};

export default Header;