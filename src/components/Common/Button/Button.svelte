<script lang="ts">
  export let clickHandler: () => void;
  export let title: string;
</script>

<button on:click={clickHandler}>{title}</button>

<style>
  /* your styles go here */
</style>
