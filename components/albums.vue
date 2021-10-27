<template>
  <div>
    <ul v-if="albums.length">
      <li v-for="(album, index) in albums" :key="index">
        {{ album.title }}
      </li>
    </ul>
    <button @click="getAlbums">Get albums</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Albums',
  data() {
    return {}
  },
  computed: {
    ...mapState('albums', ['albums'])
  },
  methods: {
    ...mapActions({
      getAlbums: 'albums/getAlbums'
    })
  }
}
</script>
