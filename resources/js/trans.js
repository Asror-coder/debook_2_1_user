import { mapGetters } from 'vuex'

const Trans = {
    install(Vue, options) {
      // We call Vue.mixin() here to inject functionality into all components.

      Vue.mixin({
        computed: {
            ...mapGetters('translation',['translation'])
        }
      })
    }
  };

  export default Trans;
