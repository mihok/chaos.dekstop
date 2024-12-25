<script>
  let active = $state(false);

  document.addEventListener('keypress', (event) => {
    if (event.altKey
      || event.ctrlKey
      || event.metaKey) {
      return;
    }

    if (event.key === ":" || event.key === "/") {
      active = true;
    }
  });
</script>


{#if active}
  <div>STATUS BAR</div>
{:else}
  <div>
    <input tyoe="text" />
  </div>
{/if}

<style>
  div {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: #000;
    color: white;
    display: flex;
    align-items: center;
    font-family: sans-serif;
    font-size: 0.75rem;
    padding: 0 16px;
  }
</style>

