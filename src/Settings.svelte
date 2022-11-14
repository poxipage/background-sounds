<script lang="ts">
  import { getState } from "./state";

  const state = getState()

  let url = ""

  const addSound = () => $state.url = url

</script>

<div>
    <input bind:value={url} type="text">
</div>
    <button class="btn btn-primary" on:click={addSound} >Add sound</button>
