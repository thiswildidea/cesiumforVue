import * as Cesium from 'cesium'
const mapconfig = {
  viewsetting: {
    allowDataSourcesToSuspendAnimation: false,
    baseLayerPicker: false,
    animation: false,
    fullscreenButton: false,
    vrButton: false,
    geocoder: false,
    homeButton: false,
    projectionPicker: false,
    sceneModePicker: false,
    infoBox: true,
    selectionIndicator: true,
    timeline: false,
    navigationHelpButton: false,
    scene3DOnly: false,
    mapProjection: new Cesium.GeographicProjection(),
    skyAtmosphere: false,
    skyBox: new Cesium.SkyBox({
      sources: {
        positiveX: require('../assets/SkyBox/tycho2t3_80_px.jpg'),
        negativeX: require('../assets/SkyBox/tycho2t3_80_mx.jpg'),
        positiveY: require('../assets/SkyBox/tycho2t3_80_py.jpg'),
        negativeY: require('../assets/SkyBox/tycho2t3_80_my.jpg'),
        positiveZ: require('../assets/SkyBox/tycho2t3_80_pz.jpg'),
        negativeZ: require('../assets/SkyBox/tycho2t3_80_mz.jpg')
      }
    }),
    fullscreenElement: 'viewercontainer',
    sceneMode: Cesium.SceneMode.SCENE3D,
    globe: new Cesium.Globe(new Cesium.GeographicProjection().ellipsoid),
    terrainShadows: Cesium.ShadowMode.ENABLED,
    terrainExaggeration: 100,
    terrainProvider: Cesium.createWorldTerrain({
      requestWaterMask: false,
      requestVertexNormals: false
    })
    // mapMode2D: Cesium.MapMode2D.INFINITE_SCROLL
    // imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
    //   url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
    // })
  },
  GISService: {
    baseMapServices: {
      layers: [{
        url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
        id: 'basemap_World_Street_Map',
        visible: false,
        opacity: 1.0,
        index: 0,
        maptype: 'ArcGisMapServer',
        title: '基础底图'
      }, {
        url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer',
        id: 'basemap_World_Topo_Map',
        visible: false,
        opacity: 1.0,
        index: 1,
        maptype: 'ArcGisMapServer',
        title: '地形图'
      }, {
        url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer',
        id: 'basemap_World_Imagery',
        visible: true,
        opacity: 1.0,
        index: 2,
        maptype: 'ArcGisMapServer',
        title: '影像'
      }]
    },
    buildingsLayers: {
      layers: [{
        url: 'http://127.0.0.1/3dtiles/building/tileset.json',
        id: 'shanghai_building',
        visible: false,
        opacity: 1.0,
        index: 3,
        maptype: 'Cesium3DTile',
        title: '上海建筑物'
      }]
    }
  }
}
export default mapconfig
