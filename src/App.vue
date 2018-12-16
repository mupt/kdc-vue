<template>
  <div id="app">
    <header class="container">
      <a href="#" v-on:click.stop="revealEgg">
        <picture class="hero">
          <source srcset="./assets/juan_small.jpg" media="(max-width: 30em)">
          <source srcset="./assets/juan_medium.jpg" media="(max-width: 60em)">
          <img class="hero__image" src="./assets/juan_big.jpg" alt="juan_2017">
        </picture>
      </a>
      <div v-if="showEgg" v-on:click.stop="hideEgg" class="egg"> </div>
    </header>
    <LinkList/>
  </div>
</template>
<script>
import LinkList from './components/LinkList.vue'

export default {
  name: 'app',
  data: function () {
    return {
      showEgg: false
    }
  },
  methods: {
    revealEgg: function () {
      this.showEgg = true
    },
    hideEgg: function () {
      this.showEgg = false
    }
  },
  components: {
    LinkList
  }
}
</script>

<style lang="scss">
/* Colors */
$black: #000000;
$pink: #ff69b4;
$green: #99d4b8;

/* Site Defaults */
$site-background: $black;


/* Animations */
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

body {
  background-color: $site-background;
  margin: 0;
  animation: fadein 300ms;
}

/* Hero - Component */

.hero {}

  .hero__image {
    width: 100%;
  }

.container { 
  position: relative; 
}

.hide { display: none; }

.egg { 
  background-image: url('./assets/jarod.jpg');
  background-size: cover; 
  position: absolute;
  top: 0%;
  left: 30%;
  height: 500px;
  width: 500px; 
}
</style>

