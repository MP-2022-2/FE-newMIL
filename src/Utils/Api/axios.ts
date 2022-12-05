import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const accessToken = cookies.get('accessToken');

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: { Authorization: `Bearer ${accessToken}` },
  timeout: 2000,
});

export default instance;
