<script lang="ts">
  import CoffeeList from "./CoffeeList.svelte";
  import MaxCoffee from "./MaxCoffee.svelte";
  import Footer from "./Footer.svelte";
  import Popup from "./assets/Popup.svelte";
  import Add from "./Add.svelte";

  import { onMount } from "svelte";

  import { day } from "./ts/stores";
  import { now, getComparableDate } from "./ts/dateUtils";
  import { type Cup, getCupDate } from "./ts/cup";

  let intro: boolean = false;

  // Set day if it's undefined
  if ($day == undefined) {
    setTimeout(() => (intro = true), 300);

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

<div class="master">
  <CoffeeList />
  <MaxCoffee />
  <Footer />
</div>

<Add />

{#if intro}
  <Popup
    title="Intro"
    options={[
      {
        name: "Okay",
        function: () => (intro = false),
      },
    ]}
    >Click the + to add coffee.
    <br />
    Change your coffee limit by clicking the buttons.</Popup
  >
{/if}

<style>
  .master {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;

    height: 100vh;
    /* mobile viewport bug fix */
    max-height: -webkit-fill-available;

    justify-content: space-between;
  }
</style>
