<template>
  <div class="mapscreen">
    <div id="container" class="calcite-map calcite-widgets-light" />
  </div>
</template>
<script>
import mapctx from './mapctx'
export default {
  name: 'MapControl',
  components: { },
  data() {
    return {
      title: ''
    }
  },
  computed: {

  },
  mounted() {
    this.inituserConfig()
  },
  beforeDestroy() {

  },
  methods: {
    inituserConfig() {
      this.initmap()
    },
    async initmap() {
      await mapctx.initmap()
    }
  }
}
</script>
<style lang="scss" scoped>
  .map {
     height: 800px;
     width: 1000px;
  }
</style>
