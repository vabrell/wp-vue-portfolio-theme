<template>
	<div class="page page--home">
		<recent-projects-widget :limit="5" class="mb-10"
			><mark class="px-3 py-1 bg-teal-500 text-white"
				>Senaste projekten</mark
			></recent-projects-widget
		>
	</div>
</template>

<script>
import RecentProjectsWidget from './widgets/RecentProjects.vue'

export default {
	components: {
		RecentProjectsWidget
	}
}
</script>

<style type="postcss"></style>
