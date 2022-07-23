<script lang="ts">
  import FooterButton from "./assets/FooterButton.svelte";
  import { addMenu, intro } from "./ts/stores";
</script>

<div class="footer">
  <FooterButton
    on:click={() => {
      addMenu.set(true);
    }}
    src="svg/plus.svg"
    alt="Add Coffee"
  />
  <FooterButton
    on:click={() => {
      intro.set(true);
    }}
    src="svg/help.svg"
    alt="Help"
  />
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
