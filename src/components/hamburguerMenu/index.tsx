import Link from "next/link";

const HamburguerMenu = () => {
    return (
        <div className="backdrop">
            <button>X</button>

            <nav>
                <Link href={'#home'}
                >HOME
                </Link>
                <Link href={'#sobre'}
                >SOBRE
                </Link>
                <Link href={'#servicos'}
                >SERVIÇOS
                </Link>
                <Link href={'#contato'}
                >CONTATO
                </Link>
            </nav>
        </div>
    )
};

export default HamburguerMenu;