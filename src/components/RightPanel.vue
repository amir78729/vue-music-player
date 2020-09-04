<template>
    <div class="" style="position: relative; padding-bottom: 50px" >

      <div class="display-1 title" :style="{color:color}">
        <h1 style="margin-left: 10px"><i style="font-size: 16px" class="material-icons">people</i> Friend Activity</h1>
      </div>

      <div class="friend-activity">

        <div class="friend" v-for="(friend,index) in friends">
          <div class="picture" :style="{backgroundImage: `url(${friend.image})`}"></div>
          <div class="status" v-if="friend.isOnline"></div>
          <div class="friend-info">
            <p :style="{color:color}"> <i style="font-size: 12px" class="material-icons">people</i> {{friend.name}}</p>
            <p style="margin-top: -20px; color: #777777; font-size: 14px"><i style="font-size: 10px" class="material-icons">headset</i> {{friend.currentListening}}</p>
            <router-link to="/chat">
              <button @click="goToChat(index)" :style="{backgroundColor: color}" class="btn chat"><i style="font-size: 10px" class="material-icons">chat</i><span class="chat-text">Chat!</span></button>
            </router-link>
            <button :style="{backgroundColor: color}" class="btn listen-along"><i style="font-size: 10px" class="material-icons">headset</i><span class="chat-text">Listen!</span></button>
          </div>

        </div>

      </div>
    </div>
</template>

<script>
  import {friends} from "../friends";

  export default {
      name: "RightPanel",
      props:['color'],
      data() {
        return {
          friends: friends,
        }
      },methods: {
      goToChat(index){
        this.$emit('goToChat', index);
      }
    }
  }
</script>

<style scoped>
  .title {
    margin: 0px 0px;
    z-index: 300;
    position: fixed;
    /*background-color: #151515;*/
    background-image: linear-gradient(to bottom, #151515,#151515, transparent);
    width: 100%;
    height: 40px;
  }
  p,h1{
    cursor: default;
    transition: .5s;
  }
  h1 {
    font-size: 20px;
  }

  .friend-activity{
    padding-top: 25px;
  }
  .friend{
    transition: all .5s;
    height: 80px;
    background-image: linear-gradient(to right, #181818, #181818);
    position: relative;
  }
  .friend .chat{
    transition: .3s;
    opacity: .1;
  }

  .friend:hover .chat{
    transition: .3s;
    opacity: 1;
  }

  .friend .listen-along{
    transition: .3s;
    opacity: .1;
  }

  .friend:hover .listen-along{
    transition: .3s;
    opacity: 1;
  }

  .friend:hover {
    transition: all .5s;
    background-image: linear-gradient(to right, #222222, #181818);
  }
  .picture{
    transition: all .5s;
    height: 60px;
    width: 60px;
    background-repeat: no-repeat;
    background-size: 60px 60px;
    background-position: center;
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 50%;
  }
  .picture:hover {
    transition: all .5s;
    background-size: 70px 70px;
  }
  .status{
    transition: all .5s;
    height: 15px;
    width: 15px;
    background-color: white;
    position: absolute;
    top: 55px;
    left: 55px;
    border: solid #222222 2px;
    border-radius: 50%;
  }
  .friend-info {
    position: absolute;
    height: 60px;
    width: calc(100% - 90px);
    top: 10px;
    right: 10px;
    font-size: 15px;
  }
  .chat {
    position: relative;
    text-align: left;
    margin-top: -36px;
    font-size: 10px;
    color: white;
    height: 20px;
    width: 20px;
    outline: none;
    border: none;
    padding: 2px 0 0 0;
    border-radius: 10px;
    box-shadow: 0 0 200px 0 #00000000 inset;
  }
  .chat:hover {
    width: 50px;
    box-shadow: 0 0 200px 0 #00000055 inset;
  }
  .chat i{
    position: absolute;
    top: 5px;
    left: 5px;
  }
  .chat .chat-text{
    position: absolute;
    left: 0px;
    top: 2px;
    color: transparent;
    transition: .3s;
  }
  .chat:hover .chat-text{
    color: white;
    transition: .3s;
    left: 20px;
  }
  /*****************************************************/
  .listen-along {
    position: relative;
    text-align: left;
    margin-top: -36px;
    font-size: 10px;
    color: white;
    height: 20px;
    width: 20px;
    outline: none;
    border: none;
    padding: 2px 0 0 0;
    border-radius: 10px;
    box-shadow: 0 0 200px 0 #00000000 inset;
  }
  .listen-along:hover {

    width: 60px;
    box-shadow: 0 0 200px 0 #00000055 inset;
  }
  .listen-along i{
    position: absolute;
    top: 5px;
    left: 5px;
  }
  .listen-along .chat-text{
    position: absolute;
    left: 0px;
    top: 2px;
    color: transparent;
    transition: .3s;
    font-size: 10px;
  }
  .listen-along:hover .chat-text{
    color: white;
    transition: .3s;
    left: 20px;
  }

</style>
