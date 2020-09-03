<template>
  <div class="body">
    <div class="chat-area">

    </div>

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
  .body {
    align-content: center;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 70px;
    height: 100%;
    width: 95%;
    position: relative;
    background-color: #181818;
  }
  .chat-area{
    position: absolute;
    height: calc(100% - 120px);
    /*height: 100px;*/
    top: 20px;
    background-color: #252525;
    width: 100%;
  }
  .footer-input{
    /*position: fixed;*/
    bottom: 50px;
    width: 100%;
    position: absolute;
    background-color: #181818;
    height: 50px;
    /*z-index: 200;*/
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
