import {Link} from 'react-router-dom';
import '../../assets/estilo.css';

function Contato(){
    return(
        <div>
            <h1>Bem vindo à página Contato</h1>
            <Link to='/sobre'>Sobre</Link>
            <p></p>
            <Link to='/'>Home</Link>
            <p></p>
            <Link to='/produto'>Produto</Link>
        </div>
    );
}

export default Contato;