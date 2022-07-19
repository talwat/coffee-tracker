<script lang="ts">
  import { fade } from "svelte/transition";
</script>

<div class="shade" transition:fade={{ duration: 500 }} />

<style>
  .shade {
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;

    background: rgba(0, 0, 0, 0.2);
  }
</style>
