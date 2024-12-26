<script lang="ts">
  import { T } from '@threlte/core'
</script>

<!-- [ x, y, z ] -->
<T.PerspectiveCamera
  makeDefault
 	position={[10, 2.5, 10]}
	oncreate={(ref) => {
		ref.lookAt(0, 0, 1);
	}}
>
</T.PerspectiveCamera>
