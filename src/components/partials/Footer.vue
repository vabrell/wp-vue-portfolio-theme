<template>
	<footer
		class="site-footer bg-teal-500 text-white grid items-center justify-center bg-teal-500 px-6 py-10"
	>
		<Menu location="social_menu" />
    <p class="text-sm text-gray-200">&copy; Victor Abrell 2020</p>
	</footer>
</template>

<script>
import Menu from './menus/Menu'

export default {
  components: {
    Menu
  }
}
</script>

<style type="postcss" scoped></style>
