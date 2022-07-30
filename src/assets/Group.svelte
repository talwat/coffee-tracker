<div class="group">
  <slot/>
</div>

<style>
  .group {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow: hidden;

    width: calc(100%);

    background: var(--bg-5);
    border-radius: 12px;
  }
</style>
