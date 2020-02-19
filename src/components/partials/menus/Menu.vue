<template>
	<div v-if="menu" class="md:flex md:flex-grow">
		<div
			class="font-semibold mt-4 md:mt-0 md:mr-3"
			v-for="item in menu.items"
			:key="item.id"
		>
			<router-link
				class="text-teal-200 hover:text-white"
				v-if="parseLink(item)"
				:to="parseRouterLink(item.url)"
				>{{ item.title }}</router-link
			>

			<a
				class="text-teal-200 hover:text-white"
				v-if="!parseLink(item)"
				:href="item.url"
				><font-awesome-icon
					v-if="iconExists(item.url)"
					:icon="getIcon(item.url)"
          class="text-3xl text-teal-300 hover:text-white"
				/><span v-else>{{ item.title }}</span></a
			>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import SETTINGS from '../../../settings'

export default {
	data() {
		return {
			menu: null
		}
	},

	created() {
		axios
			.get(SETTINGS.API_MENU_PATH + 'locations/' + this.location)
			.then(response => {
				this.menu = response.data
			})
			.catch(e => {
				console.log(e)
			})
	},

	methods: {
		parseLink(item) {
			if (item.url.includes(window.location.host)) {
				return true
			}
			return false
		},

		parseRouterLink(url) {
			return url.replace(window.location.origin, '')
    },
    
    iconExists(url) {
      const icons = ['github', 'linkedin', 'twitter', 'facebook']
      let exist = false
      icons.forEach(icon => {
        if (url.toLowerCase().includes(icon)) {
          exist = true
        }
      })
      return exist
    },

    getIcon(url) {
      const icons = ['github', 'linkedin', 'twitter', 'facebook']
      let setIcon
      icons.forEach(icon => {
        if (url.toLowerCase().includes(icon)) {
          switch(icon) {
            case 'github':
              setIcon = 'github-square'
            break
            
            case 'linkedin':
              setIcon = 'linkedin'
            break

            case 'twitter':
              setIcon = 'twitter-square'
            break

            case 'facebook':
              setIcon = 'facebook-square'
            break
          }
        }
      })
      return ['fab', setIcon]
    }
	},

	props: {
		location: {
			type: String,
			required: true
		}
	}
}
</script>
