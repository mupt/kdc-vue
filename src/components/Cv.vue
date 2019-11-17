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
            <p> Master of Fine Arts, 2012 <span itemprop="name"> The Center for Cartoon Studies </span> 2012 </p>
          </div>
        </li>
        <li>
          <div itemscope itemtype="https://schema.org/EducationalOrganization">
            <p> Bachelor of Arts, English Literature <span itemprop="name"> Temple University </span> 2005 </p>
          </div>
        </li>
      </ol>
    </section>

    <section class="cv__section">
      <h2 class="cv__header"> Print </h2>
      <ol class="cv__list">
        <li>
          Now #5, 2018, Fantagraphics Books. Contributor to comics anthology magazine.
        </li>
        <li>
          Taglianuccis Number One, 2018. Collection of comics and drawings made in collaboration with Jai Granofsky.
        </li>
        <li>
          The Lifted Brown #39, 2018, TLB Society Inc. Contributor to quarterly literary and arts journal.
        </li>
        <li>
          Mountebank: A Psychedoolic Sketchbook, 2017, Fantagraphics Books. Creator of 112-page comics and psychedoolia sketchbook facsimile.
        </li>
        <li>
          Best American Comics 2017, Houghton Mifflin Harcourt. Excerpt from Mountebank listed as a Notable Comic.
        </li>
        <li>
          The Lifted Brown #33, 2017, TLB Society Inc. Contributor to quarterly literary and arts journal.
        </li>
        <li>
          Best American Comics 2016, Houghton Mifflin Harcourt. Excerpt from Mountebank listed as a Notable Comic.
        </li>
        <li>
          Flashed: Sudden Stories In Comics and Prose, Pressgang, 2016. Contributor to anthology of linked flash fiction in comics and prose.
        </li>
        <li>
          Samandal 13, Samandal, 2012. Contributor to the premier comics anthology of the Mideast.
        </li>
        <li>
          Irene, edited and published by Dakota McFadzean, Andy Warner and d.w, 2012 to 2015. Founding co-editor, publisher and contributor to international comics and art anthology.
        </li>
        <li>
          KJC, 2013 to present. Co-creator (with Kevin Uehlein) of self-published minicomics.
        </li>
        <li>
          Stuff to Look At, 2012 to present. Co-creator (with Mark Connery) of self-published minicomics.
        </li>
        <li>
          Kid Clampdown, 2011 to present. Creator of self-published minicomics.
        </li>
      </ol>
    </section>

    <section class="cv__section">
      <h2 class="cv__header"> Gallery </h2>
      <ol class="cv__list">
        <li>
          Crank, Southern Exposure, San Francisco, 2015. 18x24” drawing They Got to Catch Me If They Want Me to Hang was included in this juried exhibition.
        </li>
        <li>
          Irene Anthology Exhibit, The Center for Cartoon Studies, White River Junction, Vermont, 2017. Curated and contributed to this gallery show commemorating the Irene anthology.
        </li>
      </ol>
    </section>

    <section class="cv__section">
      <h2 class="cv__header"> Design </h2>
      <ol class="cv__list">
        <li>
          Bidet Dreaming by Sea Moss, Crash Symbols and Feeding Tube Records, 2019. Cover and label design for 12” vinyl record.
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
          Iceland by Yuichi Yokoyama, The 2018, tcj.com/reviews/iceland. Critical analysis of graphic novella.
        </li>
        <li>
          The Best Comics of 2018, 2019, tcj.com/the-best-comics-of-2018/. Contributor to critical roundup of best comics of 2018.
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

.cv {
  color: #FFFFFF;
  font-family: Sans-Serif;
}
  .cv__title {
    margin-left: 16px;
  }

  .cv__section {
    display: flex;
    padding: 16px;
  }

    .cv__header {
      padding: 0 16px 16px 16px;
      margin-top: 0;
      min-width: 10%;
    }

    .cv__list {
      margin: 0;
      padding-top: 0;
      border-left: 1px solid #FFFFFF;
      list-style: none;
    }

    .cv__list > li:not(:first-child) {
      padding: 8px 0;
    }


p {
  margin: 0;
  padding: 0;
}
</style>
