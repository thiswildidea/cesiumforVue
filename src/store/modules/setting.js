import db from '@/utils/localstorage'
import { getLanguage } from '@/lang/index'

export default {
  namespaced: true,
  state: {
    language: getLanguage(),
    Viewloaded: db.get('ViewLOADED', false),
    basemaplayers: db.get('BASEMAPLAYERS', null),
    cesium3DTileLayers: db.get('3DTILELAYERS', null)
  },
  mutations: {
    setLanguage: (state, language) => {
      db.save('LANGUAGE', language)
      state.language = language
    },
    setViewLoaded: (state, Viewloaded) => {
      db.save('ViewLOADED', Viewloaded)
      state.Viewloaded = Viewloaded
    },
    setBasemapLayers: (state, basemaplayers) => {
      db.save('BASEMAPLAYERS', basemaplayers)
      state.basemaplayers = basemaplayers
    },
    setCesium3DTileLayers: (state, cesium3DTileLayers) => {
      db.save('3DTILELAYERS', cesium3DTileLayers)
      state.cesium3DTileLayers = cesium3DTileLayers
    }
  }
}
