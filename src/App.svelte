<script>
  import Main from "./Main.svelte";
</script>

<main>
  <Main />
</main>

<style>
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  }
  :global(html),
  :global(body) {
    margin: 0;
    height: 100%;
    overflow: hidden;
    background: #e5e5ea;
  }
  :global(.empty-button) {
    background-color: transparent;
    border: 0;
  }
  :global(.app) {
    height: 100%;
  }

  :global(body) {
    min-height: 100vh;
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;
  }

  :global(html) {
    height: -webkit-fill-available;
  }

  :global(main) {
    height: 100%;
  }
</style>
