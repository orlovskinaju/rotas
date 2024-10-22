import {Link} from 'react-router-dom';
import '../../assets/estilo.css';

function Home(){
    return(
        <div>
            <h1>Bem vindo à página HOME</h1>
            <Link to='/sobre'>Sobre</Link>
            <p></p>
            <Link to='/contato'>Contato</Link>
            <p></p>
            <Link to='/produto'>Produto</Link>
        </div>
    );
}

export default Home;