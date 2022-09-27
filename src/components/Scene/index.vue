<template>
  <div class="scene" ref="refScene"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, ref, PropType } from 'vue'
import { init, remove } from './three/init'
import BaseMesh from './three/mesh/baseMesh'

export default defineComponent({
  props: {
    getMeshes: {
      type: Function as PropType<(meshes: BaseMesh[]) => void>
    }
  },
  setup (props) {
    const refScene = ref<null | HTMLElement>(null)
    let meshes = reactive<BaseMesh[]>([])
    onMounted(() => {
      meshes = init(refScene) // 注意需要在组件挂载完成后再进行初始化
      if (props.getMeshes) {
        props.getMeshes(meshes)
      }
    })

    onUnmounted(() => {
      remove()
    })

    return {
      refScene
    }
  },
})
</script>
<style>
.scene {
  width: 70vw;
  height: 100vh;
  background-color: #ccc;
}
</style>
