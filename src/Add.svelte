<script lang="ts">
  import Selector from "./assets/Selector.svelte";
  import Checkbox from "./assets/Checkbox.svelte";
  import Menu from "./assets/Menu.svelte";
  import Group from "./assets/Group.svelte";
  import Title from "./assets/Title.svelte";
  import GroupItem from "./assets/GroupItem.svelte";
  import Switch from "./assets/Switch.svelte";

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
    <Title title="Coffee Type">
      <Selector items={CoffeeList} toSet={coffeeType} />
    </Title>
    <Title title="Other Options">
      <Group>
        <GroupItem>
          <Switch id="decaf" bind:checked={decaf}>Decaf</Switch>
        </GroupItem>
        <GroupItem>
          <Switch id="ice" bind:checked={ice}>Ice</Switch>
        </GroupItem>
      </Group>
    </Title>
  </Menu>
{/if}
