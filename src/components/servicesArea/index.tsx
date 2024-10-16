import styles from './styles.module.scss'
import LanguageIcon from '@mui/icons-material/Language';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SignpostIcon from '@mui/icons-material/Signpost';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import PrintIcon from '@mui/icons-material/Print';

const ServicesArea = () => {

    return (
        <main className={styles.container}>
            <h2 id="servicos">Serviços</h2>
            <ul>
                <li>
                    <LanguageIcon/>
                    <h2>SITE INSTITUCIONAL</h2>
                    <p>
                        Um site institucional é uma página web que
                        representa uma organização, empresa ou 
                        instituição, fornecendo informações sobre
                        sua identidade, missão, produtos/serviços
                        e equipe. É uma plataforma oficial para
                        comunicação online.
                    </p>
                </li>

                <li>
                    <ArticleOutlinedIcon/>
                    <h2>LANDING PAGE</h2>
                    <p>
                        Uma landing page, ou página de destino, é uma página 
                        da web criada com um objetivo específico em mente, 
                        geralmente relacionado a ações de marketing, como 
                        promover um produto, serviço, evento ou campanha. 
                        Essas páginas são cuidadosamente projetadas para 
                        atrair visitantes e incentivá-los a tomar uma ação 
                        desejada, como preencher um formulário, fazer uma 
                        compra ou se inscrever em uma newsletter. 
                    </p>
                </li>

                <li>
                    <RssFeedIcon/>
                    <h2>BLOG</h2>
                    <p>
                        Um blog é um site onde os autores compartilham 
                        conteúdo regularmente, como artigos, postagens 
                        ou histórias, sobre interesses específicos, 
                        notícias ou experiências pessoais.
                    </p>
                </li>

                <li>
                    <SignpostIcon/>
                    <h2>Trafego Local</h2>
                    <p>
                        Fazemos sua empresa aparecer com ótimas colocações 
                        nas pesquisas dos seus clientes que estão interessados 
                        no seu trabalho.
                    </p>
                </li>

                <li>
                    <BackupTableIcon/>
                    <h2>UX/UI</h2>
                    <p>
                        O layout UX/UI se refere ao design de uma interface de 
                        usuário, focando na experiência do usuário (UX) e na 
                        interface do usuário (UI), abordando a organização 
                        visual e a usabilidade de um produto ou site.
                    </p>
                </li>

                <li>
                    <PrintIcon/>
                    <h2>UX/UI</h2>
                    <p>
                        Material impresso refere-se a qualquer tipo de material,
                        como folhetos, cartazes, panfletos, catálogos, livros, 
                        revistas ou documentos, que são criados e produzidos 
                        fisicamente em papel ou outro suporte impresso. 
                        Geralmente usado para comunicação, marketing ou 
                        informação.
                    </p>
                </li>
            </ul>
            <button>Entrar em contato</button>
        </main>
    )

}

export default ServicesArea;