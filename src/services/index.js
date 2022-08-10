import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    client_id:
      'a2f508640cb62f314e0e0763594d40aab1c858a7ef796184067c537a88b276aa',
  },
});

export default api;
