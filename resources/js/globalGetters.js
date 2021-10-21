import { mapGetters } from 'vuex'

const globalGetters = {
    install(Vue, options) {
      Vue.mixin({
        computed: {
            ...mapGetters('translation',['translation']),
            ...mapGetters('user',['currentUser']),
        }
      })
    }
  };

  export default globalGetters;
