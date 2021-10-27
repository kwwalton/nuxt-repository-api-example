import { httpClient } from './httpClient'

export default {
  getTodos: () => httpClient.get('/todos')
}
