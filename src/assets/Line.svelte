<script lang="ts">
  export let wide: boolean = false;
</script>

<div class="master">
  <div class={wide ? "line line-wide" : "line"} />
</div>

<style>
  .master {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  .line {
    width: calc(100% - 12px);
    height: 1px;
    background: #d1d1d6;
  }

  .line-wide {
    width: 100%;
  }
</style>
