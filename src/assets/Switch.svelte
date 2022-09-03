<script lang="ts">
  export let checked: boolean = false;
  export let id: string;
</script>

<div class="input-container">
  <label for={id}><slot /></label>
  <label class="switch">
    <input {id} type="checkbox" bind:checked />
    <span class="slider" />
  </label>
</div>

<style>
  .input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
  }

  :root {
    --scale: 0.7;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: calc(64px * var(--scale));
    height: calc(38px * var(--scale));
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-2);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: calc(34px * var(--scale));
  }

  .slider:before {
    position: absolute;
    content: "";
    height: calc(34px * var(--scale));
    width: calc(34px * var(--scale));
    left: calc(2px * var(--scale));
    bottom: calc(2px * var(--scale));
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: var(--green);
  }

  input:checked + .slider {
    box-shadow: 0 0 1px var(--green);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(calc(26px * var(--scale)));
    -ms-transform: translateX(calc(26px * var(--scale)));
    transform: translateX(calc(26px * var(--scale)));
  }
</style>
