<template>
	<div class="widget recent-projects">
		<h3 class="mb-4">
			<slot></slot>
		</h3>
		<div v-if="recentProjectsLoaded">
			<div v-for="project in recentProjects(limit)" :key="project.id">
				<router-link
					:to="project.slug"
					tag="div"
					class="max-w-sm w-full md:max-w-full md:flex shadow-lg mb-4 cursor-pointer rounded-lg bg-white md:hover:ml-1"
				>
          <Media
            v-if="project.featured_media > 0"
            :id="project.featured_media"
						class="h-48 md:h-auto md:w-48 flex-none bg-cover bg-center rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden"
          />
					<div
						class="p-4 flex flex-col justify-between leading-normal"
            :class="{ 'rounded-t': project.featured_media < 1 }"
					>
						<div class="mb-2">
							<p class="text-teal-500 font-bold text-xl" v-html="project.title.rendered">
							</p>
							<p
								class="text-gray-700 text-base"
								v-html="project.acf.description"
							></p>
						</div>

            <div class="text-sm text-gray-500">
              <span class="font-semibold">Developt with:</span> {{ getDev(project.acf.developed_with) }}
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
			recentProjects: 'recentProjects',
			recentProjectsLoaded: 'recentProjectsLoaded'
		})
  },
  
  methods: {
    getDev(langs) {
      const arr = []
      langs.forEach(lang => {
        arr.push(lang.name)
      })
      return arr.join(', ')
    }
  },

	components: {
		Media
	}
}
</script>
