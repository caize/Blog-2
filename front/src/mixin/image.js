import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'option',
      'siteInfo',
      'supportWebp'
    ]),
    logoUrl () {
      return this.getValidImageUrl(this.option.logoUrl)
    },
    sidebarUrl () {
      return this.getValidImageUrl(this.option.sidebarImageUrl)
    }
  },
  methods: {
    getValidImageUrl (url) {
      if (!this.supportWebp) return url.replace(/.webp$/, '.png').replace('/webp', '')
      return url
    }
  }
}
