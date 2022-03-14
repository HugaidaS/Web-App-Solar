<script lang="ts">
  export let objAttributes = { id: 0 };
  import { fade } from "svelte/transition";
  import { storePanels, idIncrement } from "../../services/store";
  let top = 200;
  let left = 100;

  let moving = false;

  function removeComponent() {
    $storePanels = $storePanels.filter(function (value) {
      if (value.id != objAttributes.id) return value;
    });
    console.log($storePanels);

    if ($storePanels.length === 0) {
      $idIncrement = 0;
    }
  }

  function start() {
    moving = true;
  }

  function stop() {
    moving = false;
  }

  function move(e: MouseEvent) {
    if (moving) {
      left += e.movementX;
      top += e.movementY;
    }
  }
</script>

<svelte:window on:mouseup={stop} on:mousemove={move} />

<section
  class="draggable"
  style="left:{left}px;top:{top}px"
  on:mousedown={start}
  transition:fade
>
  <slot>
    Panel
    <p>554mm <br /> x 2270mm</p>
    <div on:click={removeComponent} class="btn__delete">x</div>
  </slot>
</section>

<style>
  .draggable {
    user-select: none;
    box-sizing: border-box;
    text-align: center;
    padding-top: 15px;
    position: absolute;
    font-size: 12px;
    cursor: move;
    height: 227px;
    width: 55.4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px dotted gray;
    background-color: #f39f86;
    background-image: linear-gradient(315deg, #f39f86 0%, #f9d976 74%);
  }
  .btn__delete {
    cursor: pointer;
    border-top: 1px dotted gray;
  }
</style>
