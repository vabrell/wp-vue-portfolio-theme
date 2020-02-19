<template>
	<div class="widget recent-posts">
		<h3>
			<slot></slot>
		</h3>
		<div v-if="recentPostsLoaded">
			<div v-for="post in recentPosts(limit)" :key="post.id">
				<router-link
					:to="post.slug"
					tag="div"
					class="max-w-sm w-full md:max-w-full md:flex shadow-lg mb-4 cursor-pointer rounded bg-white md:hover:ml-5"
				>
          <Media
            v-if="post.featured_media > 0"
            :id="post.featured_media"
						class="h-48 md:h-auto md:w-48 flex-none bg-cover bg-center rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden"
          />
					<div
						class="p-4 flex flex-col justify-between leading-normal"
            :class="{ 'rounded-t': post.featured_media < 1 }"
					>
						<div class="mb-8">
							<div class="text-gray-900 font-bold text-xl mb-2">
								{{ post.title.rendered }}
							</div>
							<p
								class="text-gray-700 text-base"
								v-html="post.excerpt.rendered"
							></p>
						</div>
						<div class="flex items-center">
							
							<div class="text-sm">
								<p class="text-gray-600">{{ getAuthor(post) }}</p>
							</div>
						</div>
					</div>
				</router-link>
			</div>
		</div>
		<div v-else>Loading...</div>
	</div>
</template>

<script>
import Media from '../partials/Media'
import { mapGetters } from 'vuex'

export default {
	props: ['limit'],
	computed: {
		...mapGetters({
			recentPosts: 'recentPosts',
			recentPostsLoaded: 'recentPostsLoaded'
		})
	},

	methods: {
		getAuthor(post) {
			console.log(post)
		}
	},

	mounted() {
		this.$store.dispatch('getPosts', { limit: this.limit })
	},

	components: {
		Media
	}
}
</script>
