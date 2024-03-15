import Link from "next/link";
import styles from './styles.module.scss';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const NavButtons = () => {

    return (
        <>        
        <nav className={styles.menu}>
            <Link href={'#home'}
            >HOME
            </Link>
            <Link href={'#home'}
            >SOBRE
            </Link>
            <Link href={'#home'}
            >SERVIÇOS
            </Link>
            <Link href={'#home'}
            >CONTATO
            </Link>
        </nav>
        <MenuRoundedIcon 
            className={styles.menu__btn__open}
            fontSize={'large'}
            cursor={'pointer'}
        />
        </>
    )
};

export default NavButtons;