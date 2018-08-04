<template>
  <div class="hello">
    <ul>
      <li v-for="link in links" :key="link.id.$t">
        <a :href="link.gsx$linkurl.$t"> {{ link.gsx$linkname.$t }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      links: null
    }
  },
  computed: {},
  mounted() {
    axios.get('https://spreadsheets.google.com/feeds/list/1l0xQp2f0yU4aDImPz7d9rw1jgHsy2qnhFXc-3MOtAZQ/od6/public/values?alt=json')
      .then(response => (this.links = response.data.feed.entry))
  }
}
</script>

<style scoped>

</style>
