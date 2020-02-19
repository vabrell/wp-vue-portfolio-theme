<template>
  <div v-if="imgLoaded && !img" :style="imgStyle" :title="altText"></div>
  <img v-else-if="imgLoaded && img" :src="bgImg" :alt="altText">
</template>

<script>
import axios from 'axios'
import SETTINGS from '../../settings'

export default {

  data() {
    return {
      altText: null,
      bgImg: null,
      imgLoaded: false
    }
  },

  computed: {
    imgStyle() {
      return `background-image: url('${this.bgImg}');` 
    }
  },

  created() {
    axios
      .get(
        SETTINGS.API_BASE_PATH + 'media/' + this.id
      )
      .then(response => {
        this.bgImg = response.data.media_details.sizes.full.source_url
        this.altText = response.data.alt_text
        this.imgLoaded = true
      })
      .catch(e => {
        console.log(e)
      })
  },

  props: {
    id: {
      type: Number,
      required: true
    },

    img: {
      type: Boolean,
      default: false
    }
  }
}
</script>