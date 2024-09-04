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
  Object3D,
  Vector3
} from 'three'

const canvasRef = ref(null)
const setThree = () => {
  const scene = new Scene()

  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshBasicMaterial({ color: 0xff0000, wireframe: true })
  const mesh = new Mesh(geometry, material)
  console.log('mesh', mesh)

  // 2-1 position
  mesh.position.set(0.7, -0.6, 1)
  // mesh.position.normalize()

  // 2-1-1 AxesHelper

  const axesHelper = new AxesHelper(2) // 숫자는 AxesHelper의 길이
  scene.add(mesh, axesHelper)

  const sizes = {
    width: 800,
    height: 600
  }

  // 2-2 scale
  mesh.scale.set(2, 0.25, 0.5)

  // 2-3 rotation
  mesh.rotation.x = Math.PI * 0.25
  mesh.rotation.y = Math.PI * 0.25

  const camera = new PerspectiveCamera(75, sizes.width / sizes.height)
  camera.position.z = 3
  camera.position.set(1, 1, 4)

  scene.add(camera)

  // 2- 4 lookAt함수
  // camera.lookAt(new Vector3(0, - 1, 0))

  // Renderer
  const renderer = new WebGLRenderer({
    canvas: canvasRef.value
  })
  renderer.setSize(sizes.width, sizes.height)
  // .render ( scene : Object3D, camera : Camera )
  renderer.render(scene, camera)

  console.log('scene', scene)
  console.log('renderer', renderer)
}

onMounted(() => {
  setThree()
})
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>

<style></style>
