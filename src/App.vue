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
}
</script>

<style lang="scss">
/* Colors */
$black: #FFFFFF;
$pink: #ff69b4;
$green: #99d4b8;

/* Site Defaults */
$site-background: $black;

body {
  background-color: $site-background;
  margin: 0;
}
</style>
