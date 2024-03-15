import Link from "next/link";
import styles from './styles.module.scss';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useNavContext } from "@/contexts/navContext";

const NavButtons = () => {

    const { setActivateMenu }: any = useNavContext();

    return (
        <>        
        <nav className={styles.menu}>
            <Link href={'#home'}
            >
                HOME
            </Link>
            <Link href={'#quemsomos'}
            >
                QUEM SOMOS
            </Link>
            <Link href={'#servicos'}
            >
                SERVIÇOS
            </Link>
            <Link href={'#clientes'}
            >
                CLIENTES
            </Link>
            <Link href={'#contato'}
            >
                CONTATO
            </Link>
        </nav>
        <MenuRoundedIcon 
            className={styles.menu__btn__open}
            fontSize={'large'}
            cursor={'pointer'}
            onClick={ () => setActivateMenu(true)}
        />
        </>
    )
};

export default NavButtons;