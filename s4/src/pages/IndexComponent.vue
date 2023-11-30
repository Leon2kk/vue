<template>
    <main class="intro center">
      <div class="intro__box-content">
        <div class="intro__content">
          <h1 class="intro__title">Let Your Home Be&nbsp;Unique</h1>
          <p class="intro__text">
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </p>
          <button class="intro__button">
            <p class="intro__button-text">Get&nbsp;Started</p>
            <img
              :src="require('@/assets/img/arrow.svg')"
              class="intro__button-image"
            >
          </button>
        </div>
      </div>
    </main>
    <section class="projects center">
      <div class="projects__main-info">
        <h2 class="projects__title">Follow Our Projects</h2>
        <p class="projects__text">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div class="projects__cards">
        <div class="projects__card" v-for="(projectCard, index) in projectCards" :key="index">
          <img
            :src="projectCard.imgSrc"
            alt="project image"
            class="projects__card-image"
            :class="projectCard.extraClass"
          />
          <div class="projects__card-content">
            <div class="projects__card-description">
              <h3 class="projects__card-title">{{ projectCard.title }}</h3>
              <p class="projects__card-category">{{ projectCard.category }}</p>
            </div>
            <button class="projects__card-button">
              <svg
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 19L9 10L1 1"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    <div class="achivements center">
      <div class="achivements__block">
        <div class="achivements__item" v-for="(achivement, index) in achivements" :key="index">
          <div class="achivements__content">
            <h2 class="achivements__title">{{ achivement.title }}</h2>
            <p class="achivements__text">{{ achivement.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <section class="articles center">
      <div class="articles__main-info">
        <h2 class="articles__title">Articles & News</h2>
        <p class="articles__text">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </div>
      <div class="articles__cards">
        <div class="articles__card-border" v-for="(article, index) in articles" :key="index">
          <div class="articles__card">
            <figure class="articles__card-figure">
              <img
                :src="article.imgSrc"
                alt="article image"
                class="articles__card-image"
              />
              <figcaption class="articles__card-figcapture">
                {{ article.figCaption }}
              </figcaption>
            </figure>
            <div class="articles__card-description">
              <h3 class="articles__card-title">
                {{ article.title }} 
                <span class="articles__card-title-span">{{ article.titleSpan }}</span>
              </h3>
              <div class="articles__card-footer">
                <p class="articles__card-date">{{ article.date }}</p>
                <button class="articles__card-button">
                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.77199 14.9527L7.71484 8.26698L1.77199 1.58127"
                      stroke="#292F36"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
      name: 'HomePage',
      
        data() {
            return {
                achivements: [
                    {
                        title: '3',
                        text: 'Years Of Experiance',
                    },
                    {
                        title: '33',
                        text: 'Success Project',
                    },                    
                    {
                        title: '22',
                        text: 'Active Project',
                    },
                    {
                        title: '23',
                        text: 'Happy CUstomers',
                    },
                ],
                projectCards: [
                    {
                        imgSrc: require('@/assets/img/project1.png'),
                        title: 'Modern Kitchan',
                        category: 'Decor / Artchitecture',
                        extraClass: 'projects__card-image_right-top-border',
                    },
                    {
                        imgSrc: require('@/assets/img/project2.png'),
                        title: 'Modern Kitchan',
                        category: 'Decor / Artchitecture',
                        extraClass: 'projects__card-image_left-top-border',
                    },
                    {
                        imgSrc: require('@/assets/img/project1.png'),
                        title: 'Modern Kitchan',
                        category: 'Decor / Artchitecture',
                        extraClass: 'projects__card-image_right-bottom-border',
                    },
                    {
                        imgSrc: require('@/assets/img/project2.png'),
                        title: 'Modern Kitchan',
                        category: 'Decor / Artchitecture',
                        extraClass: 'projects__card-image_left-bottom-border',
                    },
                ],
                articles: [
                    {
                        imgSrc: require('@/assets/img/article1.png'),
                        figCaption: 'Kitchan Design',
                        title: 'Let’s Get Solution For Building Construction ',
                        titleSpan: 'Work',
                        date: '26 December,2022',
                    },
                    {
                        imgSrc: require('@/assets/img/article2.png'),
                        figCaption: 'Living Design',
                        title: 'Low Cost Latest Invented Interior Designing',
                        titleSpan: 'Ideas.',
                        date: '22 December,2022',
                    },
                    {
                        imgSrc: require('@/assets/img/article1.png'),
                        figCaption: 'Interior Design',
                        title: 'Best For Any Office & Business Interior',
                        titleSpan: 'Solution',
                        date: '25 December,2022',
                    },
                ]

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>