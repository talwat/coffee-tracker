<script lang="ts">
  import { day } from "./ts/stores";
  import { slide } from "svelte/transition";
  import { getCupTime } from "./ts/cup";

  let coffeeDisplay: HTMLElement;

  /**
   * Scrolls to the bottom of the coffee list
   */
  window.coffeeScroll = () => {
    setTimeout(() => {
      coffeeDisplay.scroll({
        top: coffeeDisplay.scrollHeight,
        behavior: "smooth",
      });
    }, 1300);
  };

  /**
   * Removes a cup from `$day.cups`
   * @param {number} i Index
   */
  function remove(i: number): void {
    $day.cups.splice(i, 1);
    $day.cups = $day.cups;
  }
</script>

<div class="coffee-display" bind:this={coffeeDisplay}>
  {#each $day.cups as cup, i (cup)}
    <div
      class="coffee"
      in:slide={{ delay: 550, duration: 500 }}
      out:slide={{ duration: 500 }}
    >
      <div class="text-and-icon">
        <img height="42px" src="svg/cup.svg" alt="Coffee Cup" />
        <p class="coffee-type">
          {#if cup.decaf}
            Decaf
          {/if}
          {#if cup.ice}
            Ice
          {/if}
          {cup.coffeeType}
        </p>
      </div>
      <div class="left-items">
        <p class="added-at">{getCupTime(cup)}</p>
        <button class="empty-button x-btn" on:click={() => {remove(i)}}>
          <img height="32px" src="svg/x.svg" alt="X" />
        </button>
      </div>
    </div>
  {/each}
</div>

<style>
  p {
    font-size: 22px;
  }

  .text-and-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }

  .x-btn {
    padding: 0;
    margin: 0;
  }

  .left-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .coffee {
    width: calc(100% - 48px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    height: 32px;
    background: #f2f2f7;
    border-radius: 12px;
    margin-top: 6px;
    margin-bottom: 6px;
  }

  .coffee-display {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0px;
    margin-top: 6px;
    overflow-y: auto;
    max-height: 50vh;

    width: 100%;
  }
</style>
