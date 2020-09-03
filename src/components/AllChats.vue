<template>
  <div class="body container-fluid">
    <div class=" container header " :style="{color: color}">
      <h1><i style="font-size: 30px" class="material-icons">chat</i> All Chats</h1>
    </div>
    <div>

      <table class="info table table-dark">
        <thead >
        <tr :style="{color: color}">
          <th> </th>
          <th>Name</th> <!-- like -->
          <th>Status</th>
          <th> </th>
          <th> </th>
        </tr>
        </thead>
        <tbody class="">
        <tr class="friend" v-for="(friend, index) in friends">
          <td>
            <div class="picture" :style="{backgroundImage: `url(${friend.image})`}"></div>
          </td>
          <td>{{ friend.name }}</td>
          <td>online</td>
          <td>
            <router-link to="/chat">
              <button @click="goToChat(index)" :style="{backgroundColor: color}" class="btn chat"><i style="font-size: 15px" class="material-icons">chat</i><span class="chat-text">Chat!</span></button>
            </router-link>
          </td>
          <td>
              <button @click="" :style="{backgroundColor: color}" class="btn chat"><i style="font-size: 15px" class="material-icons">headset</i><span class="chat-text">Listen</span></button>
          </td>

        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  import {friends} from "../friends";

  export default {
        name: "AllChats",
      props:['color'],
    methods: {
      goToChat(index) {
        this.$emit('goToChat', index);
      }
    },
    data() {
      return {
        friends: friends
      }
    }
    }
</script>

<style scoped>
  .body {
    /*height: 100%;*/
    width: 100%;
    background-color: #202020;
    padding: 10px 10px 40px 10px;
  }
  h1  {
    /*font-weight: bold;*/
    cursor: default;
  }
  .header {

  }
  .friend{
    transition: all .5s;
    /*height: 80px;*/
    position: relative;
  }
  .friend .chat{
    transition: .3s;
    opacity: 0;
  }

  .friend:hover .chat{
    transition: .3s;
    opacity: 1;
  }
  .chat {
    position: relative;
    text-align: left;
    margin: auto auto;
    /*margin-top: -36px;*/
    font-size: 15px;
    color: white;
    height: 30px;
    width: 100px;
    outline: none;
    border: none;
    padding: 2px 0 0 0;
    border-radius: 15px;
    box-shadow: 0 0 200px 0 #00000000 inset;
  }
  .chat:hover {
    /*width: 50px;*/
    box-shadow: 0 0 200px 0 #00000055 inset;
  }
  .chat i{
    transition: .5s;
    position: absolute;
    opacity: 0;
    top: 8px;
    left: 15px;
    transform: rotate(45deg);
  }
  .chat:hover i{
    transition: .5s;
    position: absolute;
    opacity: 1;
    top: 8px;
    left: 15px;
    transform: rotate(-0deg);
  }
  .chat .chat-text{
    position: absolute;
    left: 32px;
    top: 4px;
    color: white;
    transition: .3s;
  }
  .chat:hover .chat-text{
    transition: .3s;
    left: 40px;
  }
  .picture{
    transition: all .5s;
    height: 30px;
    width: 30px;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    background-position: center;
    /*position: absolute;*/
    top: 10px;
    left: 10px;
    border-radius: 50%;
  }
  .picture:hover {
    transition: all .5s;
    background-size: 35px 35px;
  }
  tr {
    color: #777777;
    background-color: #202020;
    position: relative;

  }
  tr:hover {
    color: white;
    background-color: #272727;
  }
  th{
    background-color: #252525;
    /*color: #5bc0de;*/
    cursor: default;
    transition: all 0.5s;
  }
  td:hover{
    text-shadow: 0 0 10px black;
    cursor: default;
  }
  td{
    position: relative;
  }
</style>
