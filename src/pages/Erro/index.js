import {Link} from 'react-router-dom';
import '../../assets/estilo.css';

function Erro(){
    return(
        <div>
            <h1>PÁGINA NÃO ENCONTRADA!!</h1>
            <Link to='/'>Home</Link>
        </div>
    );
}

export default Erro;