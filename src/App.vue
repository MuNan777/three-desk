<script lang="ts">
import * as THREE from 'three'
import { defineComponent, ref } from "vue"
import Scene from './components/Scene/index.vue'
import BigScreen from './components/BigScreen/index.vue'
import BaseMesh from "./components/Scene/three/mesh/baseMesh"
import Table from "./components/Scene/three/mesh/table"
import { textureLoader } from "./utils/textureLoader"


const desktopMap = {
  default: new THREE.MeshStandardMaterial({
    map: textureLoader.load('./textures/desktop/default.jpg'),
    aoMap: textureLoader.load('./textures/desktop/default_AO.jpg'),
    normalMap: textureLoader.load('./textures/desktop/default_Normal.jpg'),
    roughnessMap: textureLoader.load('./textures/desktop/default_Roughness.jpg'),
  }),
  wood1: new THREE.MeshStandardMaterial({
    map: textureLoader.load('./textures/desktop/wood1.jpg'),
    aoMap: textureLoader.load('./textures/desktop/wood1_AO.jpg'),
    normalMap: textureLoader.load('./textures/desktop/wood1_Normal.jpg'),
    roughnessMap: textureLoader.load('./textures/desktop/wood1_Roughness.jpg'),
  }),
  wood2: new THREE.MeshStandardMaterial({
    map: textureLoader.load('./textures/desktop/wood2.jpg'),
    aoMap: textureLoader.load('./textures/desktop/wood2_AO.jpg'),
    normalMap: textureLoader.load('./textures/desktop/wood2_Normal.jpg'),
    roughnessMap: textureLoader.load('./textures/desktop/wood2_Roughness.jpg'),
  }),
  marble1: new THREE.MeshStandardMaterial({
    map: textureLoader.load('./textures/desktop/marble1.jpg'),
    roughnessMap: textureLoader.load('./textures/desktop/marble1_Roughness.jpg'),
  }),
  marble2: new THREE.MeshStandardMaterial({
    map: textureLoader.load('./textures/desktop/marble2.jpg'),
    roughnessMap: textureLoader.load('./textures/desktop/marble2_Roughness.jpg'),
  }),
  marble3: new THREE.MeshStandardMaterial({
    map: textureLoader.load('./textures/desktop/marble3.jpg'),
    roughnessMap: textureLoader.load('./textures/desktop/marble3_Roughness.jpg'),
  })
}

export default defineComponent({
  components: {
    Scene,
    BigScreen
  },
  setup () {
    const tableRef = ref<null | Table>(null)
    const getMeshes = (meshes: BaseMesh[]) => {
      tableRef.value = meshes[0] as Table
    }
    const changeFootColor = (cssColor: string) => {
      if (tableRef.value) {
        const color = parseInt(`0x${cssColor.slice(1)}`)
        tableRef.value.footMaterial.color.set(color)
      }
    }
    const changeDesktopMaterial = (name: keyof typeof desktopMap) => {
      if (tableRef.value) {
        tableRef.value.changeDesktopMaterial(desktopMap[name])
      }
    }
    return {
      getMeshes,
      changeFootColor,
      changeDesktopMaterial
    }
  }
})
</script>

<template>
  <div class="content">
    <Scene :getMeshes="getMeshes"></Scene>
    <BigScreen @selectColor="changeFootColor" @selectMaterial="changeDesktopMaterial"></BigScreen>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
}
</style>
