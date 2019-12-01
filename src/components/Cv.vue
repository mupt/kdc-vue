<template>
  <div class="cv">
    <section class="cv__header" itemscope itemtype="http://schema.org/Person">
      <h1 class="cv__title" itemprop="name"> dw </h1>
    </section>

    <section class="cv__section">
      <h2 class="cv__header"> Education </h2>
      <ol class="cv__list">
        <li>
          <div itemscope itemtype="https://schema.org/EducationalOrganization">
            <p> Master of Fine Arts / <span itemprop="name"> The Center for Cartoon Studies </span> 2012 </p>
          </div>
        </li>
        <li>
          <div itemscope itemtype="https://schema.org/EducationalOrganization">
            <p> Bachelor of Arts, English Literature / <span itemprop="name"> Temple University </span> 2005 </p>
          </div>
        </li>
      </ol>
    </section>

    <section class="cv__section">
      <h2 class="cv__header"> Print </h2>
      <ol class="cv__list">
        <li>
          <i>Now #5, 2018</i>, Fantagraphics Books. Contributor to comics anthology magazine.
        </li>
        <li>
          <i>Taglianuccis Number One</i>, 2018. Collection of comics and drawings made in collaboration with Jai Granofsky.
        </li>
        <li>
          <i>The Lifted Brown</i> #39, 2018, TLB Society Inc. Contributor to quarterly literary and arts journal.
        </li>
        <li>
          <i>Mountebank: A Psychedoolic Sketchbook</i>, 2017, Fantagraphics Books. Creator of 112-page comics and psychedoolia sketchbook facsimile.
        </li>
        <li>
          <i>Best American Comics 2017</i>, Houghton Mifflin Harcourt. Excerpt from Mountebank listed as a Notable Comic.
        </li>
        <li>
          <i>The Lifted Brown #33</i>, 2017, TLB Society Inc. Contributor to quarterly literary and arts journal.
        </li>
        <li>
          <i>Best American Comics 2016</i>, Houghton Mifflin Harcourt Excerpt from Mountebank listed as a Notable Comic.
        </li>
        <li>
          <i>Flashed: Sudden Stories In Comics and Prose</i>, Pressgang, 2016. Contributor to anthology of linked flash fiction in comics and prose.
        </li>
        <li>
          <i>Samandal 13</i>, Samandal, 2012. Contributor to the premier comics anthology of the Mideast.
        </li>
        <li>
          <i>Irene</i>, edited and published by Dakota McFadzean, Andy Warner and d.w, 2012 to 2015. Founding co-editor, publisher and contributor to international comics and art anthology.
        </li>
        <li>
          <i>KJC</i>, 2013 to present. Co-creator (with Kevin Uehlein) of self-published minicomics.
        </li>
        <li>
          <i>Stuff to Look At</i>, 2012 to present. Co-creator (with Mark Connery) of self-published minicomics.
        </li>
        <li>
          <i>Kid Clampdown</i>, 2011 to present. Creator of self-published minicomics.
        </li>
      </ol>
    </section>

    <section class="cv__section">
      <h2 class="cv__header"> Gallery </h2>
      <ol class="cv__list">
        <li>
          <i>Crank</i>, Southern Exposure, San Francisco, 2015. 18x24” drawing <i>They Got to Catch Me If They Want Me to Hang</i> was included in this juried exhibition.
        </li>
        <li>
          <i>Irene Anthology Exhibit</i>, The Center for Cartoon Studies, White River Junction, Vermont, 2017. Curated and contributed to this gallery show commemorating the <i>Irene</i> anthology.
        </li>
      </ol>
    </section>

    <section class="cv__section">
      <h2 class="cv__header"> Design </h2>
      <ol class="cv__list">
        <li>
          <i>Bidet Dreaming</i> by Sea Moss, Crash Symbols and Feeding Tube Records, 2019. Cover and label design for 12” vinyl record.
        </li>
        <li>
          Sea Moss t-shirts, 2018 and 2019.
        </li>
      </ol>
    </section>

    <section class="cv__section">
      <h2 class="cv__header"> Criticism </h2>
      <ol class="cv__list">
        <li>
          <i>Iceland</i> by Yuichi Yokoyama, The 2018, tcj.com/reviews/iceland. Critical analysis of graphic novella.
        </li>
        <li>
          <i>The Best Comics of 2018</i>, 2019, tcj.com/the-best-comics-of-2018/. Contributor to critical roundup of best comics of 2018.
        </li>
      </ol>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Cv'
}
</script>


<style scoped lang="scss">

/* Helpers */
@mixin respond-to($breakpoint) {
    @media screen and (min-width: $breakpoint), print {
        @content;
    }
}

/* Breakpoints */
$lg: 1027px;

/* Variables */
$spacing-unit: 8px;

/* Resets */
p {
  margin: 0;
  padding: 0;
}

/* CV */
.cv {
  color: #FFFFFF;
  font-family: Sans-Serif;
}
  .cv__title {
    margin-left: $spacing-unit;
  }

  .cv__section {
    display: flex;
    padding: $spacing-unit;
  }

    .cv__header {
      font-size: 0.9em;
      padding: 0 $spacing-unit $spacing-unit $spacing-unit;
      margin-top: 0;
      min-width: 80px;
    }

    .cv__list {
      font-size: 0.8em;
      margin: 0;
      padding-top: 0;
      padding-left: $spacing-unit;
      border-left: 1px solid #FFFFFF;
      list-style: none;
    }

    .cv__list > li {
      margin: $spacing-unit / 2 0;
    }

    .cv__list > li:first-child {
      margin-top: 0;
    }

    @include respond-to($lg) {
      .cv__header {
        min-width: 140px;
      }

      .cv__list {
        padding-left: ($spacing-unit * 2);
      }

      .cv__list > li {
        margin: ($spacing-unit * 1.5) 0;
      }
    }
</style>
