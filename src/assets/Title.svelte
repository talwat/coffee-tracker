<script lang="ts">
  export let title: string;
</script>

<div class="main">
  <p class="title">
    {title.toUpperCase()}
  </p>
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .content {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  .title {
    margin: 8px;
    margin-left: 20px;
    color: var(--bg-0);
    font-size: 14px;
  }
</style>
