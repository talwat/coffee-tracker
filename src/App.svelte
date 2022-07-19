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
</style>
