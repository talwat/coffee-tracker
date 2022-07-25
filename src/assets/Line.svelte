<script lang="ts">
  import { css } from "@emotion/css";

  export let wide: boolean = false;
  export let padding: number = wide ? 0 : 6;

  export const line = css`
    width: calc(100% - ${padding * 2}px);
    height: 1px;
    background: var(--bg-3);
  `;
</script>

<div class="master">
  <div class={line} />
</div>

<style>
  .master {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
</style>
