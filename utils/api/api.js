import axios from 'axios';
import { API_URL } from './urls';

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(`${API_URL}${endpoint}`, options);
  const data = await response.data;

  return data;
};
