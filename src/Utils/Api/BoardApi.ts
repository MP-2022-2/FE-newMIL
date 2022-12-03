import axios from 'axios';

export const boardFreeFunc = () => {
  const res = axios.get(`${process.env.REACT_APP_API_URL}/board/free`, {}).catch((err) => {
    throw new Error(err);
  });

  return res;
};
