import * as Cesium from 'cesium'
const maplayersaddutils = {
  initbasemap(viewer, basemaplayers) {
    return basemaplayers.layers.map((layer) => {
      switch (layer.maptype) {
        case 'ArcGisMapServer':
          // eslint-disable-next-line no-case-declarations
          const baselayer = new Cesium.ArcGisMapServerImageryProvider({
            url: layer.url,
            maximumLevel: 15,
            minimumLevel: 10,
            defaultAlpha: 0.1
          })
          viewer.imageryLayers.addImageryProvider(baselayer, layer.index)
          return baselayer
      }
    })
  },
  addCesium3DTileLayer(viewer, buildingsLayers) {
    return buildingsLayers.layers.map((layer) => {
      switch (layer.maptype) {
        case 'Cesium3DTile':
          // eslint-disable-next-line no-case-declarations
          const tileset = new Cesium.Cesium3DTileset({
            url: layer.url
          })
          viewer.scene.primitives.add(tileset)
          return tileset
      }
    })
  }
}
export default maplayersaddutils
