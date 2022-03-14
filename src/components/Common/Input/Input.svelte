<script lang="ts">
  export let currentValue: SvelteStore<number>;
  export let changeHandler: () => void;
  export let label: string;
</script>

<label>
  {label}
  <input
    type="number"
    name={label}
    bind:value={$currentValue}
    on:change={changeHandler}
  />
</label>

<style>
  label {
    margin: 10px;
  }
</style>
