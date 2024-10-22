import {Link} from 'react-router-dom';
import '../../assets/estilo.css';

function Sobre(){
    return(
        <div>
            <h1>Bem vindo à página Sobre</h1>
            <Link to='/'>Home</Link>
            <p></p>
            <Link to='/contato'>Contato</Link>
            <p></p>
            <Link to='/produto'>Produto</Link>
        </div>
    );
}

export default Sobre;