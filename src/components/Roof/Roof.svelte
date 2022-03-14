<script lang="ts">
  import SolarPanel from "../SolarPanel/SolarPanel.svelte";
  import { storePanels, canvas } from "../../services/store";
</script>

{#each $storePanels as item (item.id)}
  <svelte:component this={SolarPanel} objAttributes={item} />
{/each}
<!-- svelte-ignore component-name-lowercase -->
<canvas bind:this={$canvas} />

<style>
  canvas {
    border: dotted 1px gray;
  }
</style>
