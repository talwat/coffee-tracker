<script lang="ts">
  import Line from "./Line.svelte";

  let component: HTMLElement;
</script>

<div class="item" bind:this={component}>
  <slot />
</div>

<!--
    Copy-pasted from https://stackoverflow.com/a/53920512/ 
    Please forgive me
-->
<div class="line-container">
  <Line padding={20} />
</div>

<style>
  .line-container:last-child {
    display: none;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 18px;
    margin: 0;
    color: inherit;
    transition: background-color 0.2s;
    background-color: var(--bg-5);

    width: auto;
  }
</style>
