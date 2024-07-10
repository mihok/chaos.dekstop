<script lang="ts">
  import { T } from '@threlte/core';

</script>

<T.Mesh
  let:ref
  position={1}
  on:create={({ ref }) => {
    ref.lookAt(10,2.5,10);
  }}>
  <T.PlaneGeometry args={[1, 1]} />
  <T.MeshBasicMaterial color="hotpink" />  
</T.Mesh>

<T.AxesHelper size={2} />
<T.GridHelper />

<span>Interface goes here</span>
