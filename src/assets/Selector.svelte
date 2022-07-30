<script lang="ts">
  import type { Writable } from "svelte/store";
  import Line from "./Line.svelte";

  export let items: string[];
  export let toSet: Writable<string>;
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
        <Line padding={20} />
      {/if}
    {/if}
  {/each}
</div>

<style>
  .option-selected {
    background-color: var(--bg-3) !important;
  }

  .option {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 18px;
    margin: 0;
    color: inherit;
    transition: background-color 0.2s;
    background-color: var(--bg-5);

    width: 100%;
  }

  .picker {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    background: var(--bg-5);
    border-radius: 12px;
  }
</style>
