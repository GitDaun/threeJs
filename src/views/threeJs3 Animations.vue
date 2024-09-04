<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import {
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  WebGLRenderer,
  Clock
} from 'three'

const log = console.log
const canvasRef = ref(null)
const setThree = () => {
  const scene = new Scene()

  // Object
  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshBasicMaterial({ color: 0xff0000 })
  const mesh = new Mesh(geometry, material)
  scene.add(mesh)

  // Sizes
  const sizes = {
    width: 800,
    height: 600
  }

  // Camera
  const camera = new PerspectiveCamera(75, sizes.width / sizes.height)
  camera.position.z = 3
  scene.add(camera)

  // Renderer
  const renderer = new WebGLRenderer({
    canvas: canvasRef.value
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.render(scene, camera)

  // Animation
  // 2-1 Date.now() 사용
  // let time = Date.now()
  // const tick = () => {
  //   // update objects
  //   const currentTime = Date.now()
  //   const deltaTime = currentTime - time
  //   time = currentTime
  //   log(deltaTime)

  //   mesh.rotation.y += 0.01
  //   // render
  //   renderer.render(scene, camera)
  //   window.requestAnimationFrame(tick)
  // }

  // 2-2 clock 메서드 사용
  //   const clock = new Clock()
  //   const tick = () => {
  //     const elapsedTime = clock.getElapsedTime()
  //     log(elapsedTime)
  //     // mesh.rotation.y = elapsedTime // 1
  //     // mesh.position.x = Math.cos(elapsedTime) // 2
  //     // mesh.position.y = Math.sin(elapsedTime) // 2

  //     camera.position.x = Math.cos(elapsedTime)
  //     camera.position.y = Math.sin(elapsedTime)
  //     camera.lookAt(mesh.position)
  //     // render
  //     renderer.render(scene, camera)
  //     window.requestAnimationFrame(tick)
  //   }
  //   tick()
  // }

  gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })

  const tick = () => {
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  }

  tick()
}

onMounted(() => {
  setThree()
})
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>

<style></style>
