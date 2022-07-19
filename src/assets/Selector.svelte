<script lang="ts">
  import type { Writable } from "svelte/store";
  import Line from "./Line.svelte";

  /* eslint-disable */
  export let items: Array<any>;
  export let toSet: Writable<any>;
</script>

<div class="picker">
  {#each items.sort() as item, i}
    <button
      class={item === $toSet
        ? "option-selected option empty-button"
        : "option empty-button"}
      on:click={() => {
        toSet.set(item);
      }}
    >
      {item}
    </button>

    {#if i < items.length - 1}
      {#if items[i + 1] === $toSet || items[i] === $toSet}
        <Line wide />
      {:else}
        <Line />
      {/if}
    {/if}
  {/each}
</div>

<style>
  .option-selected {
    background-color: #d1d1d6 !important;
  }

  .option {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    padding-top: 6px;
    font-size: 18px;
    margin: 0;

    width: 100%;
  }

  .picker {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    width: calc(100%);

    background: #f2f2f7;
    border-radius: 12px;
  }
</style>
