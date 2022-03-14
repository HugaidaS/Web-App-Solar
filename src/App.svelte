<script lang="ts">
  import Butoon from "./components/Common/Button/Button.svelte";
  import Input from "./components/Common/Input/Input.svelte";
  import Roof from "./components/Roof/Roof.svelte";
  import { onMount } from "svelte";
  import {
    storePanels,
    idIncrement,
    width,
    height,
    rightIntent,
    leftIntent,
    canvas,
  } from "./services/store";

  $: calcWidth = $width / 10;
  $: calсHeight = $height / 10;
  $: calcRightIntent = $rightIntent / 10;
  $: calcLeftIntent = $leftIntent / 10;

  onMount(async () => {
    $canvas.width = window.innerWidth - 100; // equals window dimension
    $canvas.height = window.innerHeight - 100;
    $idIncrement = 1;
    handleAddRect();
  });

  $: handleAddRect = () => {
    let x = 50;
    let y = 10;
    let ctx = $canvas.getContext("2d");
    let grd = ctx.createLinearGradient(100, 400, 500, 10);
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);
    let calculateLeftTopAngleX = x + calcLeftIntent;
    let calculateRightTopAngleX = x + calcWidth - calcRightIntent;
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(calculateLeftTopAngleX, y);
    ctx.lineTo(x, y + calсHeight);
    ctx.lineTo(x + calcWidth, y + calсHeight);
    ctx.lineTo(calculateRightTopAngleX, y);
    ctx.lineTo(calculateLeftTopAngleX, y);
    grd.addColorStop(0, "#e5bdf6");
    grd.addColorStop(1, "#d8dede");
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.closePath();
  };

  $storePanels = [{ id: 0 }];

  function addItem() {
    var l = $storePanels.length;
    $storePanels[l] = { id: $idIncrement };
    $idIncrement += 1;
    console.log($storePanels);
  }
</script>

<main>
  <h2>Solar App</h2>

  <Butoon clickHandler={addItem} title="Add Item" />

  <div class="input-group">
    <Input changeHandler={handleAddRect} label="Width" currentValue={width} />
    <Input changeHandler={handleAddRect} label="Height" currentValue={height} />
    <Input
      changeHandler={handleAddRect}
      label="Right Intent"
      currentValue={rightIntent}
    />
    <Input
      changeHandler={handleAddRect}
      label="Left Intent"
      currentValue={leftIntent}
    />
  </div>

  <Roof />
</main>

<style>
  .input-group {
    display: flex;
    flex-wrap: wrap;
  }
</style>
