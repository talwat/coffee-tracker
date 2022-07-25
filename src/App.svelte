<script>
  import Main from "./Main.svelte";
</script>

<main>
  <Main />
</main>

<style>
  :root {
    --red: #ff3b30;
    --blue: #007ae1;
    --indigo: #5856d6;

    --bg-5: #f2f2f7;
    --bg-4: #e5e5ea;
    --bg-3: #d1d1d6;
    --bg-2: #c7c7cc;
    --bg-1: #aeaeb2;
    --bg-0: #8e8e93;

    --fg: black;
  }

  :root.dark {
    --blue: #0a84ff;
    --indigo: #5e5ce6;
    --red: #ff453a;

    --bg-5: #2c2c2e;
    --bg-4: #1c1c1e;
    --bg-3: #3a3a3c;
    --bg-2: #48484a;
    --bg-1: #636366;
    --bg-0: #8e8e93;

    --fg: white;
  }
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
    color: var(--fg);
    transition: background-color 0.3s;
    transition: color 0.3s;
  }
  :global(html),
  :global(body) {
    margin: 0;
    height: 100%;
    overflow: hidden;
    background: var(--bg-4);
  }
  :global(.empty-button) {
    background-color: transparent;
    border: 0;
  }
</style>
