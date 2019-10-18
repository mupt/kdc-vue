<template>
   <div id="app">
    <header>
      <h1 stye="visibility: hidden;"> KidClampDown.Com </h1>
    </header>
    <main class="container">>
      <div class="container__column">
        <Video/>
      </div>
      <div class="container__column">
        <LinkList/>
      </div>
    </main>
  </div>
</template>
<script>

import LinkList from './components/LinkList.vue'
import Video from './components/Video.vue'

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
    LinkList,
    Video
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
  justify-content: center;
  align-items: center;
}

  .container__column {
    flex-grow: 1;
  }

</style>

