<script lang="ts">
  import { day } from "./ts/stores";
  import { fly } from "svelte/transition";
</script>

<div class="max-coffee-display">
  <div
    class={$day.cups.length > $day.max
      ? "red max-coffee-p max-coffee-text"
      : "max-coffee-p max-coffee-text"}
  >
    {#key $day.cups.length}
      <p in:fly={{ y: -20 }}>
        {$day.cups.length}
      </p>
    {/key}
    <p>/</p>
    {#key $day.max}
      <p in:fly={{ y: -20 }}>
        {$day.max}
      </p>
    {/key}
  </div>
  <p class="status-text">
    {$day.cups.length >= $day.max ? "Stop drinking" : "You're all good!"}
  </p>

  <p class="max-control-p">Max</p>
  <div class="max-control">
    <button
      class="max-control-btn"
      on:click={() => {
        if ($day.max > 0) $day.max--;
      }}>Lower</button
    >
    <button
      class="max-control-btn"
      on:click={() => {
        $day.max++;
      }}>Raise</button
    >
  </div>
</div>

<style>
  p {
    font-size: 28px;
  }

  .red {
    color: #ff3b30;
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
    background-color: #007ae1;
    color: white;
    border-radius: 8px;
    padding: 4px;
    font-size: 22px;
    margin: 4px;
  }

  .max-control-btn:active {
    background-color: rgb(88, 86, 214);
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
