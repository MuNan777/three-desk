
import * as THREE from "three"
import { loader } from "../../../../utils/gltfLoader"
import BaseMesh from "./baseMesh"
import { textureLoader } from '../../../../utils/textureLoader'

export default class Table extends BaseMesh {
  scene: THREE.Scene
  desktopMesh: THREE.Mesh = new THREE.Mesh
  footMesh: THREE.Mesh = new THREE.Mesh
  desktopMaterial: THREE.MeshStandardMaterial
  footMaterial: THREE.MeshStandardMaterial

  constructor(scene: THREE.Scene) {
    super()
    this.scene = scene
    this.desktopMaterial = new THREE.MeshStandardMaterial({
      map: textureLoader.load('./textures/desktop/default.jpg'),
      aoMap: textureLoader.load('./textures/desktop/default_AO.jpg'),
      normalMap: textureLoader.load('./textures/desktop/default_Normal.jpg'),
      roughnessMap: textureLoader.load('./textures/desktop/default_Roughness.jpg'),
    })
    this.footMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      map: textureLoader.load('./textures/foot/default.jpg'),
      aoMap: textureLoader.load('./textures/foot/default_AO.jpg'),
      normalMap: textureLoader.load('./textures/foot/default_Normal.jpg'),
      roughnessMap: textureLoader.load('./textures/foot/default_Roughness.jpg'),
    })
    loader.load("./model/table.glb", (table) => {
      table.scene.traverse((item) => {
        if (item.type === 'Mesh') {
          const mesh = item as THREE.Mesh
          if (item.name === 'Desktop') {
            this.desktopMesh = mesh
            mesh.material = this.desktopMaterial
          }
          if (item.name === 'Foot') {
            this.footMesh = mesh
            mesh.material = this.footMaterial
          }
          mesh.geometry.setAttribute('uv2', new THREE.BufferAttribute(mesh.geometry.attributes.uv.array, 2))
        }
      })
      scene.add(table.scene)
    })
  }

  changeDesktopMaterial (material: THREE.MeshStandardMaterial) {
    this.desktopMesh.material = material
  }
}