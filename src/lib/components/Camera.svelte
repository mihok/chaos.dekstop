<script lang="ts">
  import { T } from '@threlte/core'
  // import { T, extend, useThrelte } from '@threlte/core'
  // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  // extend({
  //   OrbitControls
  // })
  // const { renderer } = useThrelte()
</script>


<!-- [ x, y, z ] -->
<T.PerspectiveCamera
  let:ref
  makeDefault
 	position={[10, 2.5, 10]}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 1);
	}}
>
<!-- <T.OrbitControls args={[ref, renderer.domElement]} /> -->
</T.PerspectiveCamera>
