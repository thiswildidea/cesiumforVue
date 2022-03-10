import mapconfig from '@/config/config_map.js'
import maplayersaddutils from '@/utils/maputils/maplayersaddutils.js'
import * as Cesium from 'cesium'
import store from '@/store/index'
const mapctx = {
  async initmap() {
    const defaulttoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0YjdlYzY1MC01YTUzLTRkNDUtOWRkZC0zYTY1Njg1YzI0YTciLCJpZCI6NjY1NjAsImlhdCI6MTYzMTA2Mzg4Nn0.ircpakx0HfOMx7se0k0eQfESR1ZhljB83NRwQ9xkHm4'
    Cesium.Ion.defaultAccessToken = defaulttoken
    var viewer = new Cesium.Viewer('viewercontainer', {
      allowDataSourcesToSuspendAnimation: mapconfig.viewsetting.allowDataSourcesToSuspendAnimation,
      baseLayerPicker: mapconfig.viewsetting.baseLayerPicker,
      animation: mapconfig.viewsetting.animation,
      fullscreenButton: mapconfig.viewsetting.fullscreenButton,
      vrButton: mapconfig.viewsetting.vrButton,
      geocoder: mapconfig.viewsetting.geocoder,
      homeButton: mapconfig.viewsetting.homeButton,
      projectionPicker: mapconfig.viewsetting.projectionPicker,
      sceneModePicker: mapconfig.viewsetting.sceneModePicker,
      infoBox: mapconfig.viewsetting.infoBox,
      selectionIndicator: mapconfig.viewsetting.selectionIndicator,
      timeline: mapconfig.viewsetting.timeline,
      navigationHelpButton: mapconfig.viewsetting.navigationHelpButton,
      scene3DOnly: mapconfig.viewsetting.scene3DOnly,
      mapProjection: mapconfig.viewsetting.mapProjection,
      skyAtmosphere: mapconfig.viewsetting.skyAtmosphere,
      skyBox: mapconfig.viewsetting.skyBox,
      fullscreenElement: mapconfig.viewsetting.fullscreenElement,
      sceneMode: mapconfig.viewsetting.sceneMode,
      globe: mapconfig.viewsetting.globe,
      terrainShadows: mapconfig.viewsetting.terrainShadows,
      terrainExaggeration: mapconfig.viewsetting.terrainExaggeration,
      terrainProvider: mapconfig.terrainProvider
    })
    viewer.scene.globe.depthTestAgainstTerrain = true
    viewer.imageryLayers.remove(viewer.imageryLayers.get(0))
    const baselayers = maplayersaddutils.initbasemap(viewer, mapconfig.GISService.baseMapServices)
    viewer.scene.terrainProvider = new Cesium.CesiumTerrainProvider({
      url: 'http://127.0.0.1/dem'
    })
    store.commit('setting/setBasemapLayers', baselayers)
    // const cesium3DTileLayers = maplayersaddutils.addCesium3DTileLayer(viewer, mapconfig.GISService.buildingsLayers)
    // store.commit('setting/setCesium3DTileLayers', cesium3DTileLayers)
    return { viewer }
  }
}
export default mapctx
// viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
//   url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
// }))
