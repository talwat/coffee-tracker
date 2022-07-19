<script lang="ts">
  import { addMenu } from "./ts/stores";
</script>

<div class="footer">
  <button
    class="empty-button"
    on:click={() => {
      addMenu.set(true);
    }}><img height="42px" src="svg/plus.svg" alt="Plus" /></button
  >
</div>

<style>
  .footer {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 100%;
    height: 75px;

    background: rgba(229, 229, 234, 0.1);
    border-top: 1px solid #d1d1d6;
  }
</style>
