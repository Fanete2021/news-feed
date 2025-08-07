import axios from 'axios';

export const configureApi = () => {
  const api = axios.create();

  return api;
};
