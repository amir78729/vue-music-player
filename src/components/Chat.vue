<template>
  <div class="body">

    <div class="chat-area">
      <div class="chat-title d-flex">
        <router-link to="/all-chats" class="back">

          <i class="material-icons back">arrow_back</i>
        </router-link>
<!--        <div class="pic" :style="{backgroundImage: `url(${friends[contactIndex].image})`}"></div>-->
        <div class="pic" :style="{backgroundImage: `url(${friends[currentChatIndex].image})`}"></div>
        <div class="info">
          <p :style="{color : color}" style="font-size: 20px;transition: .5s;">{{friends[currentChatIndex].name}}</p>
          <p class="status" v-if="friends[currentChatIndex].isOnline">online</p>
          <p class="status" v-else>offline</p>
        </div>

        <div class="btn-group" style="position: absolute;right: 10px;top: 10px;">
          <button class="setting-btn btn btn-sm dropdown-toggle"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i style="font-size: 20px " class="material-icons">...</i>
          </button>
          <div class="dropdown-menu menu">
            <button class="btn dropdown-item" href="#"><i style="font-size: 15px" class="material-icons">headset</i> Listen Along</button>
            <button class="btn dropdown-item" href="#" onclick="deleteFriend()"><i style="font-size: 15px" class="material-icons">delete</i> Delete Friend</button>
            <button class="btn dropdown-item" href="#"><i style="font-size: 15px" class="material-icons">clear</i> Clear Chat History</button>






            <button class="btn dropdown-item" >
              <i style="font-size: 15px" class="material-icons">info</i> Friend Information
            </button>

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Launch demo modal
            </button>
<!--&lt;!&ndash;            </a>&ndash;&gt;-->

            <!-- Modal -->
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>




          </div>
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
  import {store} from '../store/store';

  export default {
      name: "Chat",
      // props:['color', 'contactIndex'],
    props:['color' ],

    data() {
      return {
        friends: friends,
      }
    },
    computed:{
        currentChatIndex(){
          return this.$store.state.currentChatIndex;
        }
    },methods: {
        deleteFriend(){
          alert("hi");
          alert('Are you sure you want to delete \"'+ friends[currentChatIndex].name + '\"from your friends?')
        }
    }
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

  .menu{
    background-color: #202020;
    box-shadow: 0 0 10px 0 #00000077;

  }
  .menu button{
    color: #777777;
    background-color: #202020;
    transition: .3s;
  }
  .menu button:hover{
    color: white;
    background-color: #252525;
    transition: .3s;
  }

  .setting-btn{
    color: transparent;
    border: none;
    height: 40px;
    /*position: absolute;*/
    /*right: 10px;*/
    /*top: 10px;*/
    border-radius: 20px;
    box-shadow: none;
    transition: all .5s;
  }
  .setting-btn i{
    transition: all .5s;
    margin-top: 5px;
    color: #777777;
  }
  .setting-btn:hover i{
    /*transform: rotate(90deg);*/
    color: white;
    /*right: 15px;*/
    /*top: 15px;*/
    transition: all .5s;
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
