<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<button class="empty-button" on:click><img height="42px" {src} {alt} /></button>
