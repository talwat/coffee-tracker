<script lang="ts">
  import { day, max } from "./ts/stores";
  import { fly } from "svelte/transition";
</script>

<div class="max-coffee-display">
  <div
    class={$day.cups.length > $max
      ? "red max-coffee-p max-coffee-text"
      : "max-coffee-p max-coffee-text"}
  >
    {#key $day.cups.length}
      <p in:fly={{ y: -20 }}>
        {$day.cups.length}
      </p>
    {/key}
    <p>/</p>
    {#key $max}
      <p in:fly={{ y: -20 }}>
        {$max}
      </p>
    {/key}
  </div>
  <p class="status-text">
    {$day.cups.length >= $max ? "Stop drinking" : "You're all good!"}
  </p>

  <p class="max-control-p">Max</p>
  <div class="max-control">
    <button
      class="max-control-btn"
      on:click={() => {
        if ($max > 0) $max--;
      }}>Lower</button
    >
    <button
      class="max-control-btn"
      on:click={() => {
        $max++;
      }}>Raise</button
    >
  </div>
</div>

<style>
  p {
    font-size: 28px;
  }

  .red {
    color: var(--red);
  }

  .max-control {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
  }

  .max-control-p {
    margin: 0;
    text-align: center;
  }

  .max-control-btn {
    border: 0;
    background-color: var(--blue);
    color: #fff;
    border-radius: 8px;
    padding: 4px;
    font-size: 22px;
    margin: 4px;
  }

  .max-control-btn:active {
    background-color: var(--indigo);
  }

  .max-coffee-text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .max-coffee-p > p {
    border: 0;
    margin: 0;
    padding: 0;
    font-size: 48px;
  }

  .status-text {
    text-align: center;
    margin-top: 2px;
  }
</style>
