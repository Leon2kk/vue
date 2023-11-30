<template>
    <main class="articles-intro center">
      <div class="articles-intro__content">
        <h1 class="articles-intro__title">Articles & News</h1>
        <p class="articles-intro__pointer">Home / Blog</p>
      </div>
    </main>
    <section class="latest-article center">
      <h2 class="latest-article__title">Latest Post</h2>
      <div class="latest-article__card-border">
        <div class="latest-article__card">
          <img
            :src="require('@/assets/img/article1.png')"
            alt="article photo"
            class="latest-article__card-img"
          />
          <div class="latest-article__card-content">
            <h3 class="articles__card-title">
              Let’s Get Solution For Building Construction Work
            </h3>
            <div class="articles__card-text-container">
              <p class="articles__card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                fuga alias fugiat nemo molestias esse!
              </p>

              <p class="articles__card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat, distinctio nulla quia eius quidem facilis?
              </p>
            </div>
            <div class="articles__card-footer">
              <p class="articles__card-date">26 December,2022</p>
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
    </section>
    <section class="articles center">
      <div class="articles__main-info">
        <h2 class="articles__title">Articles & News</h2>
        <p class="articles__text">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </div>
      <div id="articles__block">
        <div class="articles__cards" >
            <div class="articles__card-border" v-for="(article, index) in articles" :key="index">
              <div class="articles__card">
                <figure class="articles__card-figure">
                  <img
                    :src="article.imgSrc"
                    alt="article image"
                    class="articles__card-image"
                  />
                  <figcaption class="articles__card-figcapture">
                    {{ article.capture }}
                  </figcaption>
                </figure>
                <div class="articles__card-description">
                  <h3 class="articles__card-title">
                        {{ article.title }} 
                        <span class="articles__card-title_span">
                            {{ article.span }}
                        </span>
                  </h3>
                  <div class="articles__card-footer">
                    <p class="articles__card-date">{{article.date}}</p>
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
        <div class="articles__pagination">
            <button class="articles__pagination-link articles__pagination-link_active" active>01</button>
            <button class="articles__pagination-link">02</button>
            <button class="articles__pagination-link">03</button>
            <button class="articles__pagination-link">
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
    </section>
</template>

<script>
    export default {
        data() {
            return {
                articles: [
                        {
                            id: 0,
                            imgSrc: require('@/assets/img/article1.png'),
                            capture: 'Kitchan Design',
                            title: 'Let’s Get Solution For Building Construction',
                            span: 'Work',
                            date: '26 December,2022',
                        },
                        {
                            id: 1,
                            imgSrc: require('@/assets/img/article2.png'),
                            capture: 'Living Design',
                            title: 'Low Cost Latest Invented Interior Designing', 
                            span: 'Ideas.',
                            date: '22 December,2022 ',
                        },
                        {
                            id: 2,
                            imgSrc: require('@/assets/img/article1.png'),
                            capture: 'Interior Design',
                            title: 'Best For Any Office & Business Interior', 
                            span: 'Solution',
                            date: '22 December,2022 ',
                        },
                        {
                            id: 3,
                            imgSrc: require('@/assets/img/article2.png'),
                            capture: 'Kitchan Design',
                            title: 'Let’s Get Solution For Building Construction',
                            span: 'Work',
                            date: '26 December,2022',
                        },
                        {
                            id: 4,
                            imgSrc: require('@/assets/img/article1.png'),
                            capture: 'Living Design',
                            title: 'Low Cost Latest Invented Interior Designing', 
                            span: 'Ideas.',
                            date: '22 December,2022 ',
                        },
                        {
                            id: 5,
                            imgSrc: require('@/assets/img/article2.png'),
                            capture: 'Interior Design',
                            title: 'Best For Any Office & Business Interior', 
                            span: 'Solution',
                            date: '22 December,2022',
                        }
                    ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>