<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { day, coffeeType, popup } from "./ts/stores";
  import { now } from "./ts/dateUtils";
  import CoffeeTypePicker from "./CoffeeTypePicker.svelte";
  import Checkbox from "./assets/Checkbox.svelte";

  let decaf: boolean = false;
  let ice: boolean = false;
  let innerHeight: number = 0;

  /**
   * Add a cup to `day.cups`
   */
  function addCup(): void {
    if ($coffeeType === undefined) {
      return;
    }

    day.update(data => ({
      ...data,
      cups: data.cups.concat({
        coffeeType: $coffeeType,
        dateAdded: now(),
        decaf: decaf,
        ice: ice,
      }),
    }));

    window.coffeeScroll();
    popup.set(false);
  }
</script>

<svelte:window bind:innerHeight />

<main>
  <div class="shade" transition:fade={{ duration: 500 }} />
  <div
    class="popup"
    transition:fly={{ y: innerHeight, duration: 500, opacity: 1 }}
  >
    <div class="popup-head">
      <button
        class="empty-button blue-text-btn"
        on:click={() => {
          popup.set(false);
        }}>Cancel</button
      >
      <p class="popup-head-text">New Coffee</p>
      <button class="empty-button blue-text-btn" on:click={addCup}>Done</button>
    </div>
    <CoffeeTypePicker />
    <Checkbox id="decaf" bind:variable={decaf}>Decaf</Checkbox>
    <Checkbox id="ice" bind:variable={ice}>Ice</Checkbox>
  </div>
</main>

<style>
  .shade {
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;

    background: rgba(0, 0, 0, 0.2);
  }

  .popup-head {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .popup-head-text {
    margin: 0;
    font-size: 22px;
  }

  .blue-text-btn {
    color: #007ae1;
    font-size: 22px;
  }

  .popup {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    padding: 24px;
    gap: 10px;

    position: absolute;
    width: 100vw;
    height: calc(100vh - 24px);
    left: 0px;
    top: 25px;

    background: #e5e5ea;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
</style>
