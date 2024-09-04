<script setup>
import { ref, onMounted } from 'vue'
import {
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  WebGLRenderer
} from 'three'

const canvasRef = ref(null)
const setThree = () => {
  const scene = new Scene()

  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshBasicMaterial({ color: 0xff0000 })
  const mesh = new Mesh(geometry, material)

  scene.add(mesh)

  // Sizes
  const sizes = {
    width: 800,
    height: 600
  }

  const camera = new PerspectiveCamera(75, sizes.width / sizes.height)
  camera.position.z = 3
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
})
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>

<style></style>
