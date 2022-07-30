<script lang="ts">
  export let checked: boolean;
  export let id: string;

  const capitalizeFirstLetter = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);
</script>

<div class="input-container">
  <label for={id}><slot /></label>
  <button
    type="checkbox"
    {id}
    name={id}
    value={capitalizeFirstLetter(id)}
    class="checkbox empty-button"
    on:click={() => (checked = !checked)}
  >
    <img
      height="20px"
      src={checked ? "svg/checkbox-ticked.svg" : "svg/checkbox.svg"}
      alt="checkbox"
    /></button
  >
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
