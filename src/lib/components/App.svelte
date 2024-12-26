<script>
  import { Canvas, extend } from '@threlte/core';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import Scene from './Scene.svelte';
  import TitleBar from './TitleBar.svelte';
  import StatusBar from './StatusBar.svelte';

  extend({
    OrbitControls, 
  });
</script>

<TitleBar />
<StatusBar />
<Canvas>
  <Scene />
</Canvas>
