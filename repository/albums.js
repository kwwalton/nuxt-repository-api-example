import { httpClient } from './httpClient'

export default {
  getAlbums: () => httpClient.get('/albums')
}
