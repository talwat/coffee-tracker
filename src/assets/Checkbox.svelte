<script lang="ts">
  export let variable: boolean;
  export let id: string;

  /**
   * Flips the value
   */
  function toggle(): void {
    let val = variable; // Saving value
    if (val) {
      variable = false;
    } else {
      variable = true;
    }
  }

  function capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
</script>

<div class="input-container">
  <label for={id}><slot /></label>
  {#if variable}
    <button
      type="checkbox"
      {id}
      name={id}
      value={capitalizeFirstLetter(id)}
      class="checkbox checkbox-ticked empty-button"
      on:click={toggle}
    >
      <img height="20px" src="svg/checkbox-ticked.svg" alt="checkbox" /></button
    >
  {:else}
    <button
      type="checkbox"
      {id}
      name={id}
      value={capitalizeFirstLetter(id)}
      class="checkbox checkbox-unticked empty-button"
      on:click={toggle}
    >
      <img height="20px" src="svg/checkbox.svg" alt="checkbox" /></button
    >
  {/if}
</div>

<style>
  .checkbox {
    margin: 0;
    padding: 0;
  }

  .input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
  }
</style>
