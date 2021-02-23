import axios from 'axios';

const backendUrl = process.env.REACT_APP_BE_URL || `http://localhost:5000`;

export default axios.create({
  baseURL: backendUrl 
});