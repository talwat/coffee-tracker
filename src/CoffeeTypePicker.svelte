<script lang="ts">
  import { CoffeeList } from "./ts/cup";
  import { coffeeType } from "./ts/stores";
</script>

<div class="coffee-type-picker">
  {#each CoffeeList.sort() as coffee, i}
    {#if coffee == $coffeeType}
      {#if i <= 0}
        <button
          class="coffee-type-option coffee-type-option-selected coffee-type-option-selected-top empty-button"
          on:click={() => {
            coffeeType.set(coffee);
          }}
        >
          {coffee}
        </button>
      {:else if i === CoffeeList.length - 1}
        <button
          class="coffee-type-option coffee-type-option-selected coffee-type-option-selected-bottom empty-button"
          on:click={() => {
            coffeeType.set(coffee);
          }}
        >
          {coffee}
        </button>
      {:else}
        <button
          class="coffee-type-option-selected coffee-type-option empty-button"
          on:click={() => {
            coffeeType.set(coffee);
          }}
        >
          {coffee}
        </button>
      {/if}
    {:else}
      <button
        class="coffee-type-option empty-button"
        on:click={() => {
          coffeeType.set(coffee);
        }}
      >
        {coffee}
      </button>
    {/if}
    {#if i < CoffeeList.length - 1}
      {#if CoffeeList[i + 1] === $coffeeType || CoffeeList[i] === $coffeeType}
        <div class="separator separator-wide" />
      {:else}
        <div class="separator" />
      {/if}
    {/if}
  {/each}
</div>

<style>
  .coffee-type-option-selected {
    background-color: #d1d1d6 !important;
  }

  .coffee-type-option-selected-top {
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }

  .coffee-type-option-selected-bottom {
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  .coffee-type-option {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    padding-top: 6px;
    font-size: 18px;
    margin: 0;

    width: 100%;
  }

  .separator-wide {
    width: 100% !important;
  }

  .separator {
    width: calc(100% - 12px);
    height: 1px;

    background: #d1d1d6;
  }

  .coffee-type-picker {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: calc(100%);

    background: #f2f2f7;
    border-radius: 12px;
  }
</style>
