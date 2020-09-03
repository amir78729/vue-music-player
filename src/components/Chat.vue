<template>
  <div class="body">
    <div class="chat-area">
      <div class="chat-title d-flex">
        <div class="pic" :style="{backgroundImage: `url(${friends[contactIndex].image})`}"></div>
        <div class="info">
          <p :style="{color : color}" style="font-size: 30px">{{friends[contactIndex].name}}</p>
          <p class="status">online</p>
        </div>

      </div>
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
  import {friends} from "../friends";

  export default {
      name: "Chat",
      props:['color', 'contactIndex'],
    data() {
      return {
        friends: friends,
      }
    },
    }
</script>

<style scoped>
  .body {
    align-content: center;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 0px;
    height: 100%;
    width: calc(100% - 10px);
    position: relative;
    background-color: #181818;
  }
  .chat-title{
    background-image: linear-gradient(to right, #202020, #222222);
    height: 80px;
    border-radius: 20px 20px 0px 0px;
    padding: 10px;
  }
  .chat-title .pic{
    background-color: white;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    background-position: center;
    background-size: 60px 60px;
    transition: .5s;
  }
  .chat-title .pic:hover{
    background-size: 70px 70px;
    transition: .5s;
  }
  .chat-area{
    position: absolute;
    height: calc(100% - 110px);
    margin: 0 5px;
    /*height: 100px;*/
    top: 10px;
    background-color: #252525;
    width: calc(100% - 10px);
    border-radius: 20px;
  }
  .footer-input{
    /*position: fixed;*/
    bottom: 45px;
    width: 100%;
    position: absolute;
    background-color: #181818;
    height: 50px;
    /*z-index: 200;*/
  }
  .info {
    margin-top: -5px;
    margin-left: 10px;
  }
  .info p{
    margin-bottom: -8px;
  }
  .status{
    color: #777777;
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
