<template>
  <div id="app">
    <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "website",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "http://kidclampdown.com"
      },
      "name": "Kid Clampdown"
    }
    </script>

    <header class="container">
    </header>
    <router-link to="/"> Home </router-link>
    <router-link to="/cv"> CV </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
//import LinkList from './components/LinkList.vue'

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
    //LinkList
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
  animation:spin 4s linear infinite;
}

@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>
