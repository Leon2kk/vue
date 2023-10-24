new Vue({
		el: '#app',
		data: {
			tags: ["Kitchen", "Bedroom", "Building", "Architecture", "Kitchen Planning"],
			selectTag: "",
			blogs: [{
						id: 0,
						tag: "Kitchen",
						title: "Let’s Get Solution for Building Construction Work (Kitchen)",
						img: "img/blog1.png",
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
						img: "img/blog2.png",
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
						img: "img/blog1.png",
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
						img: "img/blog2.png",
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
						img: "img/blog1.png",
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
		},
		methods: {
			activeTag() {
			   const childArr = [...event.target.closest('.blog-articles__tabs').children]
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
	})