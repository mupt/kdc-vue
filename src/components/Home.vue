<template>
  <div class="layout">
    <div class="hero-container">
      <img class="hero-container__img" src="../assets/jarod.jpg">
    </div>
    <LinkList/>
  </div>
</template>

<script>
import LinkList from './LinkList.vue'


export default {
  name: 'Home',
  components: {
    LinkList
  }
}

</script>

<style scoped lang="scss">
.hero-container {
  display: flex;
  justify-content: center;
}

.hero-container__img {
  width: 80%;
  max-height: 400px;
  position: relative;
}

.nav-container {
  display: flex;
  justify-content: center;
}

</style>
