<template>
  <main class="blog-intro center"></main>
  <div class="blog-articles center">
    <div class="blog-articles__articles">
      <BlogArticleComponent
        v-for="article in filterBlogs"
        :key="article.id"
        :article="article"
      ></BlogArticleComponent>
    </div>
    <div class="blog-articles__tabs-block">
      <h3 class="blog-articles__tabs-title">Tags</h3>
      <div class="blog-articles__tabs" @click="activeTag">
        <BlogTagComponent
          v-for="(tag, index) in tags"
          :key="index"
          :tag="tag"
        ></BlogTagComponent>
      </div>
    </div>
  </div>
</template>

<script>
import BlogArticleComponent from "./BlogArticleComponent.vue";
import BlogTagComponent from "./BlogTagComponent.vue";

export default {
  data() {
    return {
      tags: ["Kitchen", "Bedroom", "Building", "Architecture", "Kitchen Planning"],
			selectTag: "",
      blogs: [{
						id: 0,
						tag: "Kitchen",
						title: "Let’s Get Solution for Building Construction Work (Kitchen)",
						img: require('@/assets/img/blog1.png'),
						date: "26 December, 2022",
						category: "Interior / Home / Decore",
						textMany: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
							turpmaximus.posuere in.Contrary to popular belief.There are many
							variations of passages of Lorem Ipsum available, but the majority
							have suffered alteration in some form, by injecthumour, or
							randomised words which don't look even slightly believable.
							Embarrassing hidden in the middle of text. All the Lorem Ipsum
							generators on the Internet tend to repeat predefined chunks as
							necessary.`,
						quoteText: "The details are not the details. They make the design.",
						subTitle: "Design sprints are great",
						subText: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
						turpmaximus.posuere in.Contrary to popular belief.There are many
						variations of passages of Lorem Ipsum available, but the majority
						have suffered.`
					},
					{
						id: 1,
						tag: "Bedroom",
						title: "Let’s Get Solution for Building Construction Work (Bedroom)",
						img: require('@/assets/img/blog2.png'),
						date: "27 December, 2022",
						category: "Interior / Home / Decore",
						textMany: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
							turpmaximus.posuere in.Contrary to popular belief.There are many
							variations of passages of Lorem Ipsum available, but the majority
							have suffered alteration in some form, by injecthumour, or
							randomised words which don't look even slightly believable.
							Embarrassing hidden in the middle of text. All the Lorem Ipsum
							generators on the Internet tend to repeat predefined chunks as
							necessary.`,
						quoteText: "The details are not the details. They make the design.",
						subTitle: "Design sprints are great",
						subText: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
						turpmaximus.posuere in.Contrary to popular belief.There are many
						variations of passages of Lorem Ipsum available, but the majority
						have suffered.`
					},
					{
						id: 2,
						tag: "Building",
						title: "Let’s Get Solution for Building Construction Work (Building)",
						img: require('@/assets/img/blog1.png'),
						date: "28 December, 2022",
						category: "Interior / Home / Decore",
						textMany: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
							turpmaximus.posuere in.Contrary to popular belief.There are many
							variations of passages of Lorem Ipsum available, but the majority
							have suffered alteration in some form, by injecthumour, or
							randomised words which don't look even slightly believable.
							Embarrassing hidden in the middle of text. All the Lorem Ipsum
							generators on the Internet tend to repeat predefined chunks as
							necessary.`,
						quoteText: "The details are not the details. They make the design.",
						subTitle: "Design sprints are great",
						subText: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
						turpmaximus.posuere in.Contrary to popular belief.There are many
						variations of passages of Lorem Ipsum available, but the majority
						have suffered.`
					},
					{
						id: 3,
						tag: "Architecture",
						title: "Let’s Get Solution for Building Construction Work (Architecture)",
						img: require('@/assets/img/blog2.png'),
						date: "29 December, 2022",
						category: "Interior / Home / Decore",
						textMany: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
							turpmaximus.posuere in.Contrary to popular belief.There are many
							variations of passages of Lorem Ipsum available, but the majority
							have suffered alteration in some form, by injecthumour, or
							randomised words which don't look even slightly believable.
							Embarrassing hidden in the middle of text. All the Lorem Ipsum
							generators on the Internet tend to repeat predefined chunks as
							necessary.`,
						quoteText: "The details are not the details. They make the design.",
						subTitle: "Design sprints are great",
						subText: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
						turpmaximus.posuere in.Contrary to popular belief.There are many
						variations of passages of Lorem Ipsum available, but the majority
						have suffered.`
					},
					{
						id: 4,
						tag: "Kitchen Planning",
						title: "Let’s Get Solution for Building Construction Work (Kitchen Planning)",
						img: require('@/assets/img/blog1.png'),
						date: "30 December, 2022",
						category: "Interior / Home / Decore",
						textMany: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
							turpmaximus.posuere in.Contrary to popular belief.There are many
							variations of passages of Lorem Ipsum available, but the majority
							have suffered alteration in some form, by injecthumour, or
							randomised words which don't look even slightly believable.
							Embarrassing hidden in the middle of text. All the Lorem Ipsum
							generators on the Internet tend to repeat predefined chunks as
							necessary.`,
						quoteText: "The details are not the details. They make the design.",
						subTitle: "Design sprints are great",
						subText: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
						turpmaximus.posuere in.Contrary to popular belief.There are many
						variations of passages of Lorem Ipsum available, but the majority
						have suffered.`
					},
					
			],
    }
  },
  components: {
    BlogTagComponent,
    BlogArticleComponent,
  },
  methods: {
			activeTag(){
        [...event.target.closest('.blog-articles__tabs').children]
				.map(children => children.classList.remove('blog-articles__tab-button_active'));
				if (event.target.classList.contains('blog-articles__tab-button')) {
          event.target.classList.add('blog-articles__tab-button_active');
          this.selectTag = event.target.innerText;
				} else {
          this.selectTag = '';
				}
			},
		},
  computed: {
    filterBlogs() {
            if (this.selectTag === "") {
              return this.blogs
            } else {
              return this.blogs.filter(blog => blog.tag === this.selectTag);
            }
          },
  },
}
</script>

<style lang="scss" scoped></style>
