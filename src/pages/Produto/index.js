import {Link} from 'react-router-dom';
import imagemihc from '../../assets/imagemihc.png';
import '../../assets/estilo.css';

function Produto(){
    return(
        <div>
            <img src={imagemihc}/>
            <p></p>
            <Link to='/'>Home</Link>
            <p></p>
            <Link to='/sobre'>Sobre</Link>
            <p></p>
            <Link to='/contato'>Contato</Link>
        </div>
    );
}

export default Produto;