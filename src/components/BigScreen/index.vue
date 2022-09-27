<template>
  <div id="bigScreen">
    <div class="content">
      <div class="content-title">
        <h2>桌子配置</h2>
      </div>
      <h3>桌面材质</h3>
      <div class="select">
        <div
          class="select-item"
          v-for="(item, index) in tableMaterials"
          :key="index"
          @click="selectTableMaterials(index)"
        >
          <div
            class="select-item-color"
            :style="{ backgroundImage: `url(./textures/desktop/${item}.jpg)` }"
          ></div>
        </div>
      </div>
      <h3>桌脚颜色</h3>
      <div class="select">
        <div
          class="select-item"
          v-for="(item, index) in colors"
          :key="index"
          @click="selectColor(index)"
        >
          <div class="select-item-color" :style="{ backgroundColor: item }"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['selectColor', 'selectMaterial'],
  setup (props, { emit }) {
    const tableMaterials = ['default', 'wood1', 'wood2', 'marble3', 'marble1', 'marble2']
    const colors = ["#00000", "#000055", "#005500", "#cccccc", "#995500", "#550099"]

    const selectColor = (index: number) => {
      emit('selectColor', colors[index])
    }

    const selectTableMaterials = (index: number) => {
      emit('selectMaterial', tableMaterials[index])
    }
    return {
      colors,
      tableMaterials,
      selectColor,
      selectTableMaterials
    }
  },
})
</script>


<style scoped>
#bigScreen {
  flex: 1;
  padding: 0 10px;
}

.select-item {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.select-item-color {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 10px;
}
.select {
  display: flex;
}
</style>