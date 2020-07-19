<template>
  <nav>
    <ol class="nav__list">
      <li class="nav__list-item" v-for="link in links" :key="link.id.$t">
        <a v-if="link.gsx$newtab.$t === 'false'" class="nav__link" target="_blank" :href="link.gsx$linkurl.$t"> {{ link.gsx$linkname.$t }} </a>
        <a v-else class="nav__link" :href="link.gsx$linkurl.$t"> {{ link.gsx$linkname.$t }} </a>
      </li>
    </ol>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LinkList',
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

<style scoped lang="scss">
/* Colors */
$black: #000000;

/* Breakpoints */
$mid: 650px;

/* Visual Pacing */
$spacing-unit: 16px;

/* Site Defaults */
$site-background: $black;

/* Font */
$font-color: $black;
$font-family: 'Roboto Condensed', sans-serif;
$font-size: 1.2rem;

/* Links */
$link-hover-color: $black;

/* Helpers */
@mixin respond-to($breakpoint) {
    @media screen and (min-width: $breakpoint), print {
        @content;
    }
}

.nav {}

  .nav__list {
    display: flex;
    justify-content: center;
    list-style: none;
    text-decoration: none;
    padding: 0;
    height: 40px;
  }
    .nav__list-item {
      margin: 0 $spacing-unit;
      padding-top: $spacing-unit / 2;
      padding-bottom: $spacing-unit / 2;

    }

      .nav__link {
        position: relative;
        text-decoration: none;
        color: $font-color;
        font-family: $font-family;
        font-size: $font-size;

        &:after {
          content: '';
        }

        &:hover {
          &:after {
            content: '';
            position: absolute;
            right: 0;
            bottom: -3px;
            left: 0;
            height: 2px;
            background-color: $link-hover-color;
          }
        }
      }
</style>
