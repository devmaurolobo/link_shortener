import './links.css';
import { useState, useEffect } from 'react';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getSaveLink, deleteLink } from '../../services/saveLink.js';
import LinkItem from '../../components/Modal';

export default function Links() {
    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [ShowModal, setShowModal] = useState(false);
    const [emptyList,setEmptyList] = useState(false);

    useEffect(() => {
        async function getLink() {
            const result = await getSaveLink('@encurtaLink');
            if (result.length === 0) {
                setEmptyList(true);
            }

            setMyLinks(result);
        }
        getLink();
    }, []);

    async function handrleDelete(id) {
        const result = await deleteLink(myLinks, id);
        if (result.length === 0) {
            console.log("Você não tem links");
        }
        setMyLinks(result);
    }

    function handrleOpenLink(Link) {
        setData(Link);
        setShowModal(true);
    }

    return (
        <div className="links-container">
            <div className="links-header">
                <Link to="/">
                    <FiArrowLeft size={38} color="#FFF" />
                </Link>
                <h1>Meus Links</h1>
            </div>

            {emptyList && (
            <div className='links-item'>
                <h2 className='empty-text'>Sua lista esta vazia....</h2>
            </div>
            )}


            {myLinks.map(Link => (
                <div key={Link.id} className="links-item">
                    <button className="link" onClick={() => handrleOpenLink(Link)}>
                        <FiLink size={18} color="white" />
                        {Link.long_url}
                    </button>
                    <button className="trash" onClick={() => handrleDelete(Link.id)}>
                        <FiTrash size={24} color="red" />
                    </button>
                </div>
            ))}
            {ShowModal && (
                <LinkItem closeModal={() => setShowModal(false)} content={data} />
            )}
        </div>
    );
}
