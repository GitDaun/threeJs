<script setup>
import { ref, onMounted } from 'vue'
import {
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  WebGLRenderer,
  AxesHelper,
  Group
} from 'three'

const canvasRef = ref(null)
const setThree = () => {

  const scene = new Scene()

  const group = new Group()
  group.scale.y = 2
  group.rotation.y = 0.2
  scene.add(group)

  // const cube1 = new Mesh(
  //   new BoxGeometry(1, 1, 1),
  //   new MeshBasicMaterial({ color: 0xff0000 })
  // )
  // cube1.position.x = -1.5
  // group.add(cube1)

  // const cube2 = new Mesh(
  //   new BoxGeometry(1, 1, 1),
  //   new MeshBasicMaterial({ color: 0xff0000 })
  // )
  // cube2.position.x = 0
  // group.add(cube2)

  // const cube3 = new Mesh(
  //   new BoxGeometry(1, 1, 1),
  //   new MeshBasicMaterial({ color: 0xff0000 })
  // )
  // cube3.position.x = 1.5
  // group.add(cube3)


  const createCube = (x) => {
    const cube = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshBasicMaterial({ color: 0xff0000 })
    )
    cube.position.x = x
    return cube
  }

const cubePositions = [-1.5, 0, 1.5]
cubePositions.forEach(x => {
  group.add(createCube(x))
})

  // 2-1-1 AxesHelper

  const axesHelper = new AxesHelper(2) // 숫자는 AxesHelper의 길이
  scene.add(axesHelper)

  const sizes = {
    width: 800,
    height: 600
  }


  const camera = new PerspectiveCamera(75, sizes.width / sizes.height)
  camera.position.z = 3
  camera.position.set(1,1,4)
  
  scene.add(camera)

  console.log('scene', scene);
  // Renderer
  const renderer = new WebGLRenderer({
    canvas: canvasRef.value
  })
  renderer.setSize(sizes.width, sizes.height)
  // .render ( scene : Object3D, camera : Camera )
  renderer.render(scene, camera)
}

onMounted(() => {
  setThree()

})
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>

<style></style>
