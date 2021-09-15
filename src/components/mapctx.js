import * as Cesium from 'cesium'
const mapctx = {
  async initmap() {
    const defaulttoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0YjdlYzY1MC01YTUzLTRkNDUtOWRkZC0zYTY1Njg1YzI0YTciLCJpZCI6NjY1NjAsImlhdCI6MTYzMTA2Mzg4Nn0.ircpakx0HfOMx7se0k0eQfESR1ZhljB83NRwQ9xkHm4'
    Cesium.Ion.defaultAccessToken = defaulttoken
    var viewer = new Cesium.Viewer('container')
    viewer.imageryLayers.remove(viewer.imageryLayers.get(0))
    viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
      url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
    }))
    // viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
    //   url: 'http://localhost:6080/arcgis/rest/services/towncompact/MapServer'
    // }))
    // viewer.terrainProvider = Cesium.createWorldTerrain({
    //   requestWaterMask: false,
    //   requestVertexNormals: false
    // })
    viewer.scene.globe.depthTestAgainstTerrain = true
    const tileset = new Cesium.Cesium3DTileset({
      url: 'http://idea.gis.com/3dtiles/building/tileset.json'
    })
    viewer.scene.primitives.add(tileset)
    viewer.zoomTo(tileset)
    return { viewer }
  }
}
export default mapctx
