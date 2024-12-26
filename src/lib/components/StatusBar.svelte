<script>
  let input;
  let value = $state("");
  let active = $state(false);

  function oninput(event) {
    if (event.target.value === "") {
      deactivate();
    }
  }

  function activate() {
    active = true;

    if (input) {
      input.focus();
    }
  }

  function deactivate() {
    active = false;

    if (input) {
      input.blur();
    }
  }

  function init() {
    window.addEventListener('keypress', (event) => {
      if (event.altKey
        || event.ctrlKey
        || event.metaKey) {
        return;
      }

      if (event.key === ":" || event.key === "/") {
        active = true;

        if (input) {
          // Lol. This is because... svelte sucks.
          setTimeout(() => {
            input.focus();

            value += event.key;
          }, 50);
        }
      }
    });
  }
</script>


<section>
  <input use:init
    bind:this={input} bind:value={value}
    oninput={oninput}
    class={active ? 'active' : 'hidden'} />
</section>

<style>
  section {
    align-items: center;
    background: #000;
    bottom: 0;
    color: white;
    display: flex;
    font-family: sans-serif;
    font-size: 0.75rem;
    height: 30px;
    left: 0;
    padding: 0 16px;
    position: fixed;
    right: 0;
  }

  input {
    border: 0;
    background: #000;
    color: #fff;
    letter-spacing: 0.05rem;
    outline: 0;
    width: 100%;
  }

  input.hidden {
    display: none;
  }
</style>

