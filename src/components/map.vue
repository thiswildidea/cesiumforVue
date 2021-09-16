<template>
  <div class="mapscreen">
    <div id="viewercontainer" class="calcite-map calcite-widgets-light" />
  </div>
</template>
<script>
import mapctx from './mapctx'
import * as Cesium from 'cesium'
export default {
  name: 'MapControl',
  components: { },
  data() {
    return {
      viewer: null,
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
      const response = await mapctx.initmap()
      this.viewer = response.viewer
    },
    test() {
      this.viewer.imageryProvider = null
      this.viewer.imageryProvider = new Cesium.ArcGisMapServerImageryProvider({
        url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
      })
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
