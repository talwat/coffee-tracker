<script lang="ts">
  import Popup from "./Popup.svelte";
  import CoffeeList from "./CoffeeList.svelte";
  import MaxCoffee from "./MaxCoffee.svelte";
  import Footer from "./Footer.svelte";

  import { onMount } from "svelte";

  import { day, popup } from "./ts/stores";
  import { now, getComparableDate } from "./ts/dateUtils";
  import { type Cup, getCupDate } from "./ts/cup";

  // Set day if it's undefined
  if ($day == undefined) {
    day.set({
      cups: [],
      max: 2,
    });
  }

  onMount(() => {
    setInterval(function () {
      clearCups();
    }, 1000 * 60); // 1 minute

    clearCups();
  });

  /**
   * Set `day.cups`
   *
   * @param {Cup[]} cups Value to set
   */
  function setCups(cups: Cup[]): void {
    day.set({
      max: $day.max,
      cups: cups,
    });
  }

  /**
   * Clear all cups which have not been created today
   */
  function clearCups(): void {
    for (let i = 0; i < $day.cups.length; i++) {
      const cup: Cup = $day.cups[i];
      const cupDate: Date = getCupDate(cup);

      // Compare dates to check wether to remove cup
      if (getComparableDate(cupDate) !== getComparableDate(now())) {
        setCups($day.cups.splice(i, 0));
      }
    }
  }
</script>

<main>
  <div class="master">
    <CoffeeList />
    <MaxCoffee />
    <Footer />
  </div>
  {#if $popup}
    <Popup />
  {/if}
</main>

<style>
  .master {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    height: 100vh;
    justify-content: space-between;
  }
</style>
