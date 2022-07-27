<script lang="ts">
  import CoffeeList from "./CoffeeList.svelte";
  import MaxCoffee from "./MaxCoffee.svelte";
  import Footer from "./Footer.svelte";
  import Popup from "./assets/Popup.svelte";
  import Add from "./Add.svelte";

  import { onMount } from "svelte";

  import { day, intro, lightMode, firstTime } from "./ts/stores";
  import { now, getComparableDate } from "./ts/dateUtils";
  import { type Cup, getCupDate } from "./ts/cup";

  /**
   * Sets --vw-full css variable
   */
  function setVwFull(): void {
    document.documentElement.style.setProperty(
      "--vw-full",
      `${window.innerHeight}px`
    );
  }

  onMount(() => {
    // Fix viewport on mobile
    setVwFull();

    onresize = () => setVwFull();

    // Check if user is visiting for the first time
    if ($firstTime) {
      setTimeout(() => intro.set(true), 300);

      firstTime.set(false);
    }

    setInterval(function () {
      clearCups();
    }, 1000 * 60); // 1 minute

    clearCups();
  });

  /**
   * Clear all cups which have not been created today
   */
  function clearCups(): void {
    for (let i = 0; i < $day.cups.length; i++) {
      const cup: Cup = $day.cups[i];
      const cupDate: Date = getCupDate(cup);

      // Compare dates to check wether to remove cup
      if (getComparableDate(cupDate) !== getComparableDate(now())) {
        $day.cups.splice(i, 1);
        $day.cups = $day.cups;
      }
    }
  }

  /* LIGHT/DARK MODE */

  /**
   * Toggles light and dark mode based on a value
   * @param {boolean} lightMode Wether light mode is supposed to be enabled
   */
  function toggleLightMode(lightMode: boolean): void {
    if (lightMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }

  // Subscribe lightMode to toggle whenever changed
  lightMode.subscribe(value => {
    toggleLightMode(value);
  });

  // Set lightMode whenever preference is changed in system settings
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", event => {
      lightMode.set(event.matches);
    });
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

    background: var(--bg-4);

    height: 100vh;
    height: var(--vw-full);

    justify-content: space-between;
  }
</style>
