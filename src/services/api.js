import axios from 'axios';

export const key = "718f6986d746d15b5377e758d756324f9e55fea8";

const api =axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`

    }
})

export default api;
