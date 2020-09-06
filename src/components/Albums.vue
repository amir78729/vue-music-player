<template>
  <div class="body">
    <div class="container header d-flex" :style="{color: color}">
      <h1><i style="font-size: 30px" class="material-icons">album</i> Albums</h1>
      <p class="total">{{}} albums</p>
    </div>
    <div class="center">

    </div>
  </div>
</template>

<script>
    export default {
      name: "Albums",
      props:['color'],
    }
</script>

<style scoped>
  .body {
    background-color: #202020;
    padding: 0px 10px 60px 10px;
    position: relative;
    height: 100%;
  }
  .header{
    position: fixed;
    background-image: linear-gradient(to bottom,#202020,#202020, transparent);
    padding-top: 10px;
    z-index: 50;
    text-shadow: #000 0px 0px 20px;


  }
  h1  {
    /*font-weight: bold;*/
    cursor: default;
  }
  .center {
    padding-top: 60px;

  }
  .total{
    color: #777777;
    cursor: default;
    margin: auto 5px;
    transition: .2s;
  }
  .total:hover{
    color: white;
    transition: .2s;
  }
</style>
