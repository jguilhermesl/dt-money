import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://dtmoney-jg.netlify.app/api'
})