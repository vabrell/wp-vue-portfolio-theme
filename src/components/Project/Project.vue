<template>
	<div v-if="project">
		<div class="mb-4">
			<mark class="bg-teal-500 px-4 py-1 text-sm font-semibold text-white">
				<router-link class="text-teal-200 hover:text-white" to="/projects"
					>Projects</router-link
				>
				/
				<span class="font-bold" v-html="project.title.rendered"></span>
			</mark>
		</div>

		<div class="bg-white shadow-lg px-4 py-6 w-full">
			<h2
				class="text-2xl font-bold mb-3 text-teal-500"
				v-html="project.title.rendered"
			></h2>

			<div class="flex mb-8">
				<div v-if="project.acf.github" class="mr-3">
          <a :href="project.acf.github">
            <font-awesome-icon
              class="text-4xl text-teal-700 hover:text-teal-500"
              title="Source Code"
              :icon="['fab', 'github-square']"
            />
          </a>
				</div>
				<div v-if="project.acf.live_demo">
          <a :href="project.acf.live_demo">
            <font-awesome-icon
              class="text-4xl text-teal-700 hover:text-teal-500"
              title="Live Demo"
              icon="eye"
            />
          </a>
        </div>
			</div>

			<p class="mx-4 mb-3">{{ project.acf.description }}</p>

			<p class="mx-4 text-gray-500">
				Utvecklat med: {{ getDev(project.acf.developed_with) }}
			</p>

      <div class="w-full">
				<Media
					class="w-full bg-cover bg-center text-center"
					v-if="project.featured_media > 0"
					:id="project.featured_media"
					:img="true"
				/>
			</div>
		</div>
	</div>
	<div v-else>
		<Loader />
	</div>
</template>

<script>
import axios from 'axios'
import Loader from '../partials/Loader.vue'
import Media from '../partials/Media'
import SETTINGS from '../../settings'

export default {
	data() {
		return {
			project: false
		}
	},

	beforeMount() {
		this.getProject()
	},

	methods: {
		getProject: function() {
			axios
				.get(
					SETTINGS.API_BASE_PATH +
						'projects?slug=' +
						this.$route.params.projectSlug
				)
				.then(response => {
					this.project = response.data[0]
				})
				.catch(e => {
					console.log(e)
				})
		},

		getDev(langs) {
			const arr = []
			langs.forEach(lang => {
				arr.push(lang.name)
			})
			return arr.join(', ')
		}
	},

	components: {
		Loader,
		Media
	}
}
</script>
