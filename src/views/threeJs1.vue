<script setup>
import { ref, onMounted } from 'vue'
import {
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  WebGLRenderer,
  AxesHelper
} from 'three'

const canvasRef = ref(null)
const setThree = () => {
  /* scene */
  // scene은 컨테이너와 같습니다. 그 안에 오브젝트, 조명, 카메라 등을 배치할 수 있으며, 다음 어느 시점에서 Three.js에 해당 장면을 렌더링하도록 요청합니다
  // scene은 Object3D을 상속 받고 있으므로 .add( object ) 메서드를 사용해 객체를 그룹핑해서 오브젝트를 자식으로 추가하는 데에 사용할 수도 있지만, Group를 사용하는 것이 더 낫습니다.
  // https://threejs.org/docs/index.html#api/en/objects/Group
  const scene = new Scene()

  /* object */
  // object 는 여러 가지가 될 수 있습니다. primitive 지오메트리, import 된 모델, 파티클, 조명 등이 있을 수 있습니다.
  const geometry = new BoxGeometry(1, 1, 1)
  // const material = new MeshBasicMaterial({ color: 0xff0000 })
  const material = new MeshBasicMaterial({ color: 0xff0000 , wireframe: true})

  // Mesh 삼각형 폴리곤 메시 기반 오브젝트를 나타내는 클래스
  // Mesh 생성자는 속성 2개만 있다. ( geometry : BufferGeometry, material : Material )
  const mesh = new Mesh(geometry, material)
  console.log('mesh', mesh)

  scene.add(mesh)

  // Sizes
  const sizes = {
    width: 800,
    height: 600
  }

  /* Camera */
  //  PerspectiveCamera : 투영카메라
  // 투영 모드는 사람의 눈으로 보는 방식을 모방하여 설계됨
  /*
   *@description : PerspectiveCamera( fov : Float, aspect : Float, near : Float, far : Float )
   *@param : fov : 카메라 아래부터 위까지, 도 단위로 표시되는 수직 시야입니다. 기본값은 50입니다.
   *@param : aspect : 카메라 절두체 종횡비, 대부분의 경우 화면 너비 / 화면 높이 입니다. 기본값은 1 (정사각형 화면)입니다.
   *@param : near : 카메라 절두체 근평면입니다. 기본값은 0.1입니다.
   *@param :        유효 범위는 0보다 크고 현재 far(원평면) 값보다 작습니다. OrthographicCamera와 달리, PerspectiveCamera의 근평면 값으로 0은 유효한 값이 아님을 주의해주세요
   *@param : far : 카메라 절두체 원평면입니다. 기본값은 2000입니다
   * */
  const camera = new PerspectiveCamera(75, sizes.width / sizes.height)
  // camera.position.z = 3
  camera.position.set(1,1,4)
  scene.add(camera)

  // Renderer
  const renderer = new WebGLRenderer({
    canvas: canvasRef.value
  })
  renderer.setSize(sizes.width, sizes.height)
  // .render ( scene : Object3D, camera : Camera )
  renderer.render(scene, camera)
  console.log('scene', scene)
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
