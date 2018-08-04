<template>
  <div class="nav">
    <ol class="nav__list">
      <li class="nav__list-item" v-for="link in links" :key="link.id.$t">
        <a class="nav__link" :href="link.gsx$linkurl.$t"> {{ link.gsx$linkname.$t }} </a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
$pink: #ff69b4;
$green: #99d4b8;

/* Breakpoints */
$mid: 650px;

/* Visual Pacing */
$spacing-unit: 16px;

/* Site Defaults */
$site-background: $black;

/* Font */
$font-color: $pink;
$font-family: 'Courier New';
$font-size: 1em;

/* Links */
$link-hover-color: $green;

/* Animations */
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Helpers */
@mixin respond-to($breakpoint) {
    @media screen and (min-width: $breakpoint), print {
        @content;
    }
}

.nav {}

  .nav__list {
    padding: 0;
    margin: $spacing-unit 0 0 $spacing-unit * 2;
    text-decoration: none;

    @include respond-to($mid) {
      margin: $spacing-unit 0 0 $spacing-unit * 3;
    }
  }
    .nav__list-item {
      padding-top: $spacing-unit / 2;
      padding-bottom: $spacing-unit / 2;

      &:first-child {
        padding-top: 0;
      }

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
            height: 1px;
            background-color: $link-hover-color;
          }
        }
      }


</style>
