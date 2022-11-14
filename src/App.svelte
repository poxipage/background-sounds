<script lang="ts">
  import { getState } from "./state";

  const state = getState()
  $: console.log($state)
  $: audio = document.getElementById($state.url) as HTMLAudioElement || null

  const setVolume = (volume: number) => {
    console.log("set volume")
    if (audio != null) {
      audio.volume = volume
      console.log(audio.volume) 
    }
  }

  $: setVolume($state.volume/100)

</script>
<div class="flex flex-col">
  <div  class="m-auto h-10 w-10 mb-2 border-2 p-1 border-base-content rounded-full justify-center">
    <button on:click={() => $state.active = !$state.active} class="{$state.active ? "btn-primary" : ""} w-full h-full  rounded-full"> </button>
  </div>
  <input bind:value={$state.volume} class="range range-xs range-primary m-auto w-20 opacity-0 hover:opacity-100" type="range" id="volume" name="volume" min="0" max="100">
</div>

{#if $state.url != ""}
  <audio id={$state.url} src={$state.url} autoplay muted={!$state.active} loop></audio>
{/if}

<style>
</style>
