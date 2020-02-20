<template>
	<nav
		class="flex items-center justify-between flex-wrap bg-teal-500 p-6 shadow-lg"
	>
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<router-link to="/">
				<svg
					class="svg-logo"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 100"
				>
					<title>logo</title>
					<path
						class="logo-cls-1"
						d="M0 0 L10 10 L50 100 L90 10 L100 0 L80 0 L50 70 L20 0 Z"
					/>
				</svg>
			</router-link>
		</div>
		<div class="block md:hidden">
			<button
				class="flex items-center text-teal-200 hover:text-white focus:outline-none"
				@click="isOpen = !isOpen"
			>
				<svg
					class="fill-current h-6 w-6"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Menu</title>
					<path
						v-if="isOpen"
						fill-rule="evenodd"
						d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
					/>
					<path
						v-if="!isOpen"
						fill-rule="evenodd"
						d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
					/>
				</svg>
			</button>
		</div>
		<div
			class="w-full block flex-grow md:flex md:items-center md:w-auto"
			:class="isOpen ? 'block' : 'hidden'"
		>
      <Menu location="primary_menu" :primary="true" />
		</div>
	</nav>
</template>

<script>
import Menu from './menus/Menu'

export default {
	data() {
		return {
			isOpen: false
		}
  },
  
  components: {
    Menu
  }
}
</script>

<style type="postcss" scoped>
.logo-cls-1 {
	fill: #ffffff;
}

.logo-cls-1:hover {
	fill: #b2f5ea;
}

.svg-logo {
	width: 40px;
}
</style>
