import axios from 'axios'
const baseURL = 'https://jsonplaceholder.typicode.com'
const headers = { 'Content-Type': 'application/json' }
export const httpClient = axios.create({ baseURL, headers })
