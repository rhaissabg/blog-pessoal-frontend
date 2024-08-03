import './Home.css'
import MyImage from '../../assets/mulheres-rindo.jpg'

function Home() {
    return (
        <>
        <nav>
            <h2>Blog Pessoal</h2>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Nova Publicação</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>
        <section className='grid'>
            <div className='grid-texto'>
                <h1>Blog Pessoal</h1>
                <h2>Seja bem-vinde ao blog, libere sua imaginação!</h2>
                <p>Este é um espaço onde você pode compartilhar suas ideias, ler artigos interessantes e gerenciar suas postagens. Sinta-se à vontade para criar novas publicações, explorar o conteúdo dos outros usuários e excluir aquelas que não deseja mais manter. Aproveite a experiência e participe ativamente da nossa comunidade!</p>
            </div>
            <div className='grid-imagem'>
                <img src={MyImage} alt="Duas mulheres rindo" />
            </div>
        </section>
            
        </>
    )
}

export default Home;