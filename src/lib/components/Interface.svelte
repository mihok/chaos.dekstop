<script lang="ts">
  import { T } from '@threlte/core';
</script>

<T.Mesh
  position={1}
  oncreate={(ref) => {
    ref.lookAt(10,2.5,10);
  }}>
  <T.PlaneGeometry args={[1, 1]} />
  <T.MeshBasicMaterial color="hotpink" />  
</T.Mesh>

<T.AxesHelper size={2} />
<T.GridHelper />
