<script setup>
import {
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  WebGLRenderer
} from 'three'

import { ref, onMounted } from 'vue'

const canvasRef = ref(null)

const setThree = () => {
  const scene = new Scene()

  // object
  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshBasicMaterial({ color: 0xff0000, wireframe: true })
  const mesh = new Mesh(geometry, material)
  console.log('mesh', mesh)
  scene.add(mesh)

  // Sizes
  const sizes = {
    width: 800,
    height: 600
  }
  // Camera
  const camera = new PerspectiveCamera(75, sizes.width / sizes.height)
  camera.position.z = 2
  scene.add(camera)

  // Renderer
  const renderer = new WebGLRenderer({
    canvas: canvasRef.value
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.render(scene, camera)
}

onMounted(() => {
  setThree()
  console.log('MeshBasicMaterial', new MeshBasicMaterial())
})
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>

<style></style>
