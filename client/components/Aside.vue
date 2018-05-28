<template>
    <aside v-show="show">je suis la sidebar</aside>
</template>

<script>
import { Store } from '@/store/store'

export default {
  data() {
    return {
      show: false
    }
  },
  mounted() {},
  watch: {
    show() {
      this.show = Store.state.show
    }
  }
}
</script>

