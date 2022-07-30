<script lang="ts">
  import FooterButton from "./assets/FooterButton.svelte";
  import { addMenu, intro, lightMode } from "./ts/stores";
  import { draw, fade, fly } from "svelte/transition";
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
      <img
        height="42px"
        src={$lightMode ? "svg/moon.svg" : "svg/sun.svg"}
        alt="Light Mode Toggle"
      />
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
    gap: 24px;

    width: 100%;
    height: 75px;

    background: var(--bg-4);
  }

  :global(.footer > button) {
    margin: 0;
    padding: 0;
  }
</style>
