import * as THREE from "three";

// 创建一个场景
const scene = new THREE.Scene()

// 添加背景
// const textureCubeLoader = new CubeTextureLoader().setPath("./textures/")
// const textureCube = textureCubeLoader.load()
// scene.background = textureCube
// scene.environment = textureCube

const light = new THREE.AmbientLight(0xffffff)
scene.add(light)

// 添加网格地面
const gridHelper = new THREE.GridHelper(5, 5);
const material = gridHelper.material as THREE.MeshBasicMaterial
material.opacity = 0.2
material.transparent = true
scene.add(gridHelper)


// 添加灯光
const light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(5, 5, 10);
scene.add(light1);


export default scene