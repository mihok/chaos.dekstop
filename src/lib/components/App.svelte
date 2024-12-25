<script>
  import { Canvas } from '@threlte/core';
  import Scene from './Scene.svelte';
  import TitleBar from './TitleBar.svelte';
  import StatusBar from './StatusBar.svelte.ts';
</script>

<TitleBar />
<StatusBar />
<Canvas>
  <Scene />
</Canvas>
