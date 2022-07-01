
import axios from 'axios';
axios.defaults.baseURL = 'https://todoappfirst.onrender.com/api';

export const axiosFetch = async( url, method='get', body) => {

    const resp = await axios[method](url, {
                'Content-type': 'application/json',
        },
        JSON.stringify(body)
        );
    
    return await resp;
    
} 