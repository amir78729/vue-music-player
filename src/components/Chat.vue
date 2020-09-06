<template>
  <div class="body">
    <div class="chat-area">
      <div class="chat-title d-flex">
        <router-link to="/all-chats" class="back">

          <i class="material-icons back">arrow_back</i>
        </router-link>

        <div class="pic" :style="{backgroundImage: `url(${friends[contactIndex].image})`}"></div>
        <div class="info">
          <p :style="{color : color}" style="font-size: 20px;transition: .5s;">{{friends[contactIndex].name}}</p>
          <p class="status">online</p>
        </div>

      </div>
    </div>

    <div class="footer-input ">
      <div class="">
        <input type="text" >
      </div>
      <button class="send" :style="{color:color}">
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
    width: calc(100% - 0px);
    position: relative;
    background-color: #181818;
  }
  .back{
    color: #777777;
    margin:  auto 5px auto 0px ;
    cursor: pointer;
    transition: .5s;
  }
  .back:hover{
    color: white;
    transition: .5s;
  }
  .chat-title{
    background-image: linear-gradient(to right, #222222, #303030);
    height: 80px;
    /*border-radius: 20px 20px 0px 0px;*/
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
    height: calc(100% - 85px);
    margin: 0 0px;
    /*height: 100px;*/
    top: 0px;
    background-image: linear-gradient(to bottom,#202020,#202020, transparent);
    /*width: calc(100% - 0px);*/
    width:100%;
    /*border-radius: 20px;*/
  }
  .footer-input{
    /*position: fixed;*/
    bottom: 35px;
    width: 100%;
    position: absolute;
    background-color: #252525;
    height: 50px;
    box-shadow: 0 0 20px 0 #00000000 ;
    transition: .5s;
    /*z-index: 200;*/
  }
  .footer-input:hover {
    box-shadow: 0 0 20px 0 #00000099 ;
    transition: .5s;
  }
  .info {
    margin-top: 2px;
    margin-left: 10px;
    cursor: default;
  }
  .info p{
    margin-bottom: -8px;
  }
  .status{
    color: #777777;
  }
  .send{
    position: absolute;
    background-color: transparent;
    right: 0px;
    top: 5px;
    /*color: white;*/
    border-radius: 50%;
    border: none;
    height: 40px;
    width: 40px;
    transition: .5s;
    box-shadow: 0 0 0 40px #00000000 inset;
  }
  .send:hover{
    transition: .5s;
    /*box-shadow: 0 0 0 40px #00000011 inset;*/
    text-shadow: 0 0px 5px black;
  }
  .send:focus{
    outline: none;
  }
  input {
    width: calc(100% - 55px);
    /*width: 100%;*/
    height: 40px;
    position: absolute;
    /*border-radius: 20px;*/
    left: 20px;
    top: 5px;
    border: none;
    background-color: transparent;
    color: #777777;
    transition: .5s;
  }
  input:hover {
    /*background-color: #252525;*/
    transition: .5s;
  }
  input:focus {
    outline: none;
  }
</style>
