import './error.css';
import { Link } from 'react-router-dom'

export default function Error(){
    return(
        <div className='container-erro'>
            <img src="./erro.png" alt="Pagina não encontrada" />
            <h1>Página não encontrada</h1>
            <Link to="/">
            <button>Voltar para home</button>
            </Link>
        </div> 

)
}