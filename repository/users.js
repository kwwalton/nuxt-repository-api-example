import { httpClient } from './httpClient'

export default {
  getUsers: () => httpClient.get('/users')
}
