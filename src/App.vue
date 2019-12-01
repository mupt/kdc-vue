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

    <!--
      <router-link to="/"> Home </router-link>
      <router-link to="/cv"> CV </router-link>
    -->

    <router-view></router-view>
  </div>
</template>
<script>

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

</style>
