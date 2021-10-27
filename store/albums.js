import Repository from '../repository'

export const state = () => ({
  albums: []
})

export const mutations = {
  setAlbums(state, payload) {
    state.albums = payload
  }
}

export const actions = {
  getAlbums({ commit }) {
    console.log('called')
    Repository.albums
      .getAlbums()
      .then((response) => {
        commit('setAlbums', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
