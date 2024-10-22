import {Link} from 'react-router-dom';
import '../../assets/estilo.css';

function Header(){
    return(
        <header>
            <h2>Naju</h2>   
            <div>
                <Link to='/'>Home    </Link>
                <Link to='/contato'>Contato    </Link>
                <Link to='/sobre'>Sobre    </Link>
                <Link to='/produto'>Produto</Link>
            </div>
        </header>
    );
}

export default Header;