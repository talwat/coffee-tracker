<script lang="ts">
  import Shade from "./Shade.svelte";

  import { fly } from "svelte/transition";
  import type { Writable } from "svelte/store";

  let innerHeight: number = 0;
  let isCancelled = true;

  export let store: Writable<boolean>;
  export let heading: string;
  export let doneFunction: () => void;

  function close() {
    store.set(false);
  }

  function done() {
    isCancelled = false;
    close();
  }
</script>

<svelte:window bind:innerHeight />

<Shade />

<div
  class="menu"
  transition:fly={{ y: innerHeight, duration: 500, opacity: 1 }}
  on:outroend={() => {
    if (!isCancelled) {
      doneFunction();
    }
  }}
>
  <div class="menu-head">
    <button class="empty-button blue-text-btn" on:click={close}>Cancel</button>
    <p class="menu-head-text">{heading}</p>
    <button class="empty-button blue-text-btn" on:click={done}>Done</button>
  </div>
  <slot />
</div>

<style>
  .menu-head {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .menu-head-text {
    margin: 0;
    font-size: 22px;
  }

  .blue-text-btn {
    color: #007ae1;
    font-size: 22px;
  }

  .menu {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    padding: 24px;
    gap: 10px;

    position: absolute;
    width: 100vw;
    height: calc(100% - 24px);
    left: 0px;
    top: 25px;

    background: #e5e5ea;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
</style>
