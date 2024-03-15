import Link from "next/link";
import styles from './styles.module.scss';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useNavContext } from "@/contexts/navContext";

const HamburguerMenu = () => {

    const { setActivateMenu }: any = useNavContext();
    return (
        <main className={styles.backdrop}>                
            <nav className={styles.container}>
                <CloseRoundedIcon
                    fontSize={'large'}
                    cursor={'pointer'}
                    onClick={ () => setActivateMenu(false)}
                />
                <Link href={'#home'}
                onClick={ () => setActivateMenu(false)}
                >
                    HOME
                </Link>
                <Link href={'#quemsomos'}
                    onClick={ () => setActivateMenu(false)}
                >
                    QUEM SOMOS
                </Link>
                <Link href={'#servicos'}
                    onClick={ () => setActivateMenu(false)}
                >
                    SERVIÇOS
                </Link>
                <Link href={'#clientes'}
                    onClick={ () => setActivateMenu(false)}
                >
                    CLIENTES
                </Link>
                <Link href={'#contato'}
                    onClick={ () => setActivateMenu(false)}
                >
                    CONTATO
                </Link>
            </nav>            
        </main>
    )
};

export default HamburguerMenu;