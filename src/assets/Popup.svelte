<script lang="ts">
  import Line from "./Line.svelte";
  import Shade from "./Shade.svelte";

  import { scale } from "svelte/transition";

  interface Option {
    name: string;
    function: () => void;
  }

  export let title: string;
  export let options: Option[];
</script>

<Shade />
<div class="popup" transition:scale>
  <h2 class="title">{title}</h2>
  <div class="body"><slot /></div>
  <Line wide />
  <div class="options">
    {#each options as option, i}
      {#if i % 2 !== 0}
        <div class="vertical-seperator" />
      {/if}
      <button on:click={option.function} class="empty-button option"
        >{option.name}</button
      >
    {/each}
  </div>
</div>

<style>
  .vertical-seperator {
    width: 1px;
    background-color: #d1d1d6;
  }
  .option {
    font-size: 18px;
    padding: 12px;
    flex-grow: 1;
    color: #007ae1;
  }
  .option:active {
    background-color: #d1d1d6;
  }
  .options {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
  .popup {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: #e5e5ea;
    width: 70%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 16px;
    overflow: hidden;
  }

  .body {
    text-align: center;
    margin-top: 2px;
    margin-bottom: 18px;
    padding-left: 12px;
    padding-right: 12px;
  }

  .title {
    text-align: center;
    margin-top: 18px;
    margin-bottom: 2px;
    font-weight: 500;
  }
</style>
