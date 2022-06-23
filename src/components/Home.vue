<template>
  <div class="layout">
    <div class="hero-container">
      <a href="https://contrado.com/stores/dwshop">
        <img class="hero-container__img" src="../assets/jarod.jpg">
      </a>
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
  width: auto;
  height: auto;
  display: block;
  max-height: 450px;
  max-width: 250px;
}

.nav-container {
  display: flex;
  justify-content: center;
}

</style>
