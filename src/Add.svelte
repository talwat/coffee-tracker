<script lang="ts">
  import Selector from "./assets/Selector.svelte";
  import Checkbox from "./assets/Checkbox.svelte";
  import Menu from "./assets/Menu.svelte";

  import { CoffeeList } from "./ts/cup";
  import { now } from "./ts/dateUtils";
  import { day, addMenu, coffeeType } from "./ts/stores";

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
  }

  let decaf: boolean = false;
  let ice: boolean = false;
</script>

{#if $addMenu}
  <Menu store={addMenu} heading="New Coffee" doneFunction={addCup}>
    <Selector items={CoffeeList} toSet={coffeeType} />
    <Checkbox id="decaf" bind:variable={decaf}>Decaf</Checkbox>
    <Checkbox id="ice" bind:variable={ice}>Ice</Checkbox>
  </Menu>
{/if}
