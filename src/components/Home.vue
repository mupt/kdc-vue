<template>
  <div class="container" style="color:white;">
    <div class="container__col">
      <img class="container__img" src="../assets/jarod.jpg">
    </div>
      <div class="container__col">
      <LinkList/>
    </div>
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
.container {
  display: flex;
}

  .container__col {
    max-width: 50%;
  }

  .container__img {
    width: 100%;
  }
</style>
