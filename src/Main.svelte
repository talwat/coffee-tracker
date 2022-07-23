<script lang="ts">
  import CoffeeList from "./CoffeeList.svelte";
  import MaxCoffee from "./MaxCoffee.svelte";
  import Footer from "./Footer.svelte";
  import Popup from "./assets/Popup.svelte";
  import Add from "./Add.svelte";

  import { onMount } from "svelte";

  import { day, intro } from "./ts/stores";
  import { now, getComparableDate } from "./ts/dateUtils";
  import { type Cup, getCupDate } from "./ts/cup";

  // Set day if it's undefined
  if ($day == undefined) {
    setTimeout(() => intro.set(true), 300);

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

{#if $intro}
  <Popup
    title="Intro"
    options={[
      {
        name: "Okay",
        function: () => intro.set(false),
      },
    ]}
  >
    Hi there! Welcome to this app, it will help control your coffee consumption.
    <br /> <br />
    Please set your coffee limit by clicking the 'lower' and 'raise' buttons.
    <br /> <br />
    Then, whenever you drink a coffee, click the + to add coffee to the app, picking
    which coffee you had, and pressing 'Done'.
  </Popup>
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
