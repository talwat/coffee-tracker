<script lang="ts">
  import FooterButton from "./assets/FooterButton.svelte";
  import { addMenu, intro, lightMode } from "./ts/stores";
  import { draw, fade } from "svelte/transition";
  import Line from "./assets/Line.svelte";
</script>

<div>
  <Line wide />

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
    <button class="empty-button" on:click={() => lightMode.set(!$lightMode)}>
      {#key $lightMode}
        <img
          in:fade={{ duration: 200 }}
          height="42px"
          src={$lightMode ? "svg/moon.svg" : "svg/sun.svg"}
          alt="Light Mode Toggle"
        />
      {/key}
    </button>
  </div>
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

    background: var(--bg-4);
  }
</style>
