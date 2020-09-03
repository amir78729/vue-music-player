<template>
  <div>
    <div class="footer-input ">
      <div class="">
        <input type="text" >
      </div>
      <button class="send" :style="{backgroundColor:color}">
        <i style="font-size: 15px" class="material-icons">send</i>
      </button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Chat",
      props:['color']
    }
</script>

<style scoped>
  .footer-input{
    position: relative;
    background-color: #181818;
    height: 50px;
  }
  .send{
    position: absolute;
    right: 5px;
    top: 5px;
    color: white;
    border-radius: 50%;
    border: none;
    height: 40px;
    width: 40px;
    transition: .5s;
    box-shadow: 0 0 0 40px #00000000 inset;
  }
  .send:hover{

    transition: .5s;
    box-shadow: 0 0 0 40px #00000033 inset;
  }
  input {
    width: calc(100% - 55px);
    height: 40px;
    position: absolute;
    border-radius: 20px;
    left: 5px;
    top: 5px;
    border: none;
    background-color: #222222;
    color: #bbbbbb;
    transition: .5s;
  }
  input:hover {
    background-color: #252525;
    transition: .5s;
  }
  input:focus {
    outline: none;
  }
</style>
