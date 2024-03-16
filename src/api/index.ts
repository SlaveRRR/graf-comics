import axios from 'axios';

const config = {
    baseURL:`${process.env.NEXT_PUBLIC_AXIOS_URL}/api`
}

export const api = axios.create(config);
