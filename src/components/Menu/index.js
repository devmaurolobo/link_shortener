import './menu.css';
import {BsYoutube, BsInstagram} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Menu(){
    return(
        <div className='menu'>
            <a  className= 'Social' href='https://portfolio-mauro.vercel.app/'>
            <BsYoutube color='white' size={20}/>
            </a>

            <a  className= 'Social' href='https://portfolio-mauro.vercel.app/'>
            <BsInstagram color='white' size={20}/>
            </a>

            <Link to="/Links" className='menu-item'>
            Meus Links
            </Link>
        </div>
    )
}