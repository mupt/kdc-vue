<template>
  <div>
    <video class="video" controls :src="video_link"> </video>
  </div>
</template>

<script>
  export default {
    name: 'Video',
    data () {
      return {
        video_link: null
      }
    },
    mounted() {
      axios.get('https://spreadsheets.google.com/feeds/list/1l0xQp2f0yU4aDImPz7d9rw1jgHsy2qnhFXc-3MOtAZQ/od6/public/values?alt=json')
        .then(response => (this.video_link = response.data.feed.entry[0].gsx$videourl.$t))
    }
  }

</script>

<style scoped lang="scss">

.video {
  height: 95vh;

  width: 90%;
}

</style>
