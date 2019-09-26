<template>
  <div id="app">
    <header class="container">
      <div class="container__column">
        <video class="video" controls src="./assets/videos/dw_scrapbook.mp4"> </video>
      </div>
      <div class="container__column">
        <LinkList/>
      </div>
    </header>
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

.container {
  display: flex;
}

  .container__column {
    flex-grow: 1;
  }

.video {
  height: 100vh;
  width: 100%;
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

