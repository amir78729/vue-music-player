<template>
    <div class="body">
      <div class=" container header" :style="{color: color}">
        <h1><i style="font-size: 30px" class="material-icons">playlist_play</i> Playlists</h1>
      </div>
    </div>
</template>

<script>
    export default {
      name: "AllPlaylists",
      props:['color'],
    }
</script>

<style scoped>
  .body {
    background-color: #202020;
    padding: 10px 10px 60px 10px;
    position: relative;
  }
</style>
