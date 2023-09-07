import { useState } from 'react';
import './home.css';
import {FiLink} from 'react-icons/fi';
import Menu from '../../components/Menu';
import LinkItem from '../../components/Modal';
import api from '../../services/api';
import {saveLink} from '../../services/saveLink';

export default function Home(){
    const [Link, setLink] = useState("");
    const [data, setData] = useState({});
    const [ShowModal, setShowModal] = useState(false);

    async function clickLink(){
        try{
            const response = await api.post('/shorten', {
                long_url: Link
            } )

            setData(response.data);
            setShowModal(true);
            saveLink('@encurtaLink', response.data);

            setLink("")
    }catch{
        alert("Algo deu errado")
        setLink("");
    }
    }

    return(
    <div className="container-home" >
        <div className="logo">
            <img src="/logo.png" alt="logo" />
            <h1>Mauro Link</h1>
            <span> Cole seu link aqui 🤪</span>
        </div>
        <div className="input-area">
            <div>
            <FiLink/>
            <input 
            placeholder="Cole seu link aqui"
            value={Link}
            onChange={(e) => setLink(e.target.value)}
            />
            </div>
            <button type="button" className="btn" onClick={clickLink}>Gerar Link</button>
        </div>
        <Menu/>
        {ShowModal && (
            <LinkItem closeModal={() => setShowModal(false)}
            content={data}
            />

        )}
    </div>   
    ) 
}
