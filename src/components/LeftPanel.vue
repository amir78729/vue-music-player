<template>
  <div style="padding-bottom: 40px" class="">
<!--    {{isHome}}-->
<!--    {{isSongs}}-->
<!--    {{isAlbums}}-->
<!--    {{isPlaylists}}-->

    <div class="accordion-panel">
      <router-link to="/">
        <button id="home-button" class="btn accordion" :style="{borderColor: color}" @click="changePage('home')" :class="{'selected': isHome }">
          <!--        <div class="right-icon"><div :style="{backgroundColor: color}" class="line1"  ></div><div :style="{backgroundColor: color}" class="line2"></div></div>-->
          <i style="font-size: 15px" class="material-icons">home</i> Home
        </button>
      </router-link>
    </div>

    <div class="accordion-panel">
      <router-link to="/songs">
        <button id="songs-button" class="btn accordion" :style="{borderColor: color}" @click="changePage('songs')" :class="{'selected': isSongs }">
          <!--        <div class="right-icon"><div :style="{backgroundColor: color}" class="line1"  ></div><div :style="{backgroundColor: color}" class="line2"></div></div>-->
          <i style="font-size: 15px" class="material-icons">library_music</i> Songs
        </button>
      </router-link>
    </div>

    <div class="accordion-panel">
      <router-link to="/albums">
        <button id="albums-button" class="btn accordion" :style="{borderColor: color}" @click="changePage('albums')" :class="{'selected': isAlbums }">
          <!--        <div class="right-icon"><div :style="{backgroundColor: color}" class="line1"  ></div><div :style="{backgroundColor: color}" class="line2"></div></div>-->
          <i style="font-size: 15px" class="material-icons">album</i> Albums</button>
      </router-link>
    </div>

    <div class="accordion-panel" style="position: relative;" :class="{'rotate': addPlaylist}">
      <div class="icon"  @click="addPlaylist = !addPlaylist">
        <i style="font-size: 15px; font-weight: bold" class="material-icons" >add</i>
      </div>
     <router-link to="/all-playlists">
       <button id="playlists-button" class="btn accordion" :style="{borderColor: color}" @click="changePage('playlists')" :class="{'selected': isPlaylists }">
<!--                 <div class="right-icon" @click="addPlaylist = !addPlaylist">-->
<!--                   <div  class="line1"  ></div>-->
<!--                   <div  class="line2"></div>-->
<!--                 </div>-->
<!--         <div class="add-playlist">-->
<!--            Add-->
<!--         </div>-->
         <i style="font-size: 15px" class="material-icons">playlist_play</i>
         Playlists
         </button>
     </router-link>
      <div style="padding: 20px 15px" class="add-playlist-panel" v-if="addPlaylist">
        <div class="d-inline-flex">
<!--          <input type="file">-->
          <div class="add-playlist-panel-pic">
            <p> <i style="font-size: 15px" class="material-icons">edit</i> </p>
          </div>

          <div style="padding-left: 10px; width: 100%">
            <div style="font-size: 12px; font-weight: bold;" :style="{color: color}">Title: </div>
            <input type="text">
          </div>
        </div>
        <div style="margin-top: 10px">
          <div style="font-size: 12px; font-weight: bold;" :style="{color: color}">Description: </div>
          <input type="text">
        </div>
        <button class="btn add-playlist-btn" :style="{backgroundColor: color}" style="color: white"> Add Playlist!</button>
      </div>
<!--      <div id="playlists" class="">-->
<!--        <ul class="" style="margin: 0; padding: 0">-->
<!--          <button class="btn  item" v-for="playlist in playlists">{{ playlist }}</button>-->
<!--        </ul>-->
<!--      </div>-->
    </div>

    <div class="accordion-panel">
      <router-link to="/all-chats">
        <button id="chat-button" class="btn accordion" :style="{borderColor: color}" @click="changePage('chats')" :class="{'selected': isChat }">
          <!--        <div class="right-icon"><div :style="{backgroundColor: color}" class="line1"  ></div><div :style="{backgroundColor: color}" class="line2"></div></div>-->
          <i style="font-size: 13px" class="material-icons">chat</i> Chat</button>
      </router-link>
    </div>

  </div>
</template>

<script>
  import {colors} from "../colors";

  export default {
    data() {
      return {
        isHome: true,
        isSongs: false,
        isAlbums: false,
        isPlaylists: false,
        isChat: false,

        addPlaylist:false,
        playlists: ['playlist 1','playlist 2','playlist 2','playlist 2','playlist 2','playlist 2','playlist 2','playlist 2'],
      }
    },
    props: ['color', 'page'],
    methods: {
      changePage(page){
        if (page === 'home'){
          this.isHome = true;
          this.isSongs = false;
          this.isAlbums = false;
          this.isPlaylists = false;
          this.isChat = false;
          this.$emit('homeSelected')
        }   if (page === 'songs'){
          this.isHome = false;
          this.isSongs = true;
          this.isAlbums = false;
          this.isPlaylists = false;
          this.isChat = false;
          this.$emit('songsSelected')
        } if (page === 'albums'){
          this.isHome = false;
          this.isSongs = false;
          this.isAlbums = true;
          this.isPlaylists = false;
          this.isChat = false;
          this.$emit('albumsSelected')
        } if (page === 'playlists'){
          this.isHome = false;
          this.isSongs = false;
          this.isAlbums = false;
          this.isPlaylists = true;
          this.isChat = false;
          this.$emit('playlistsSelected')
        }
        if (page === 'chats'){
          this.isHome = false;
          this.isSongs = false;
          this.isAlbums = false;
          this.isPlaylists = false;
          this.isChat = true;
          this.$emit('chatsSelected')
        }

      }
    }
  }
</script>

<style>
  .add-playlist-btn{
    height: 30px;
    margin-top: 10px;
    width: 100%;
    opacity: .7;
    outline: none;
    box-shadow: none;
    border: none;
  }
  .add-playlist-btn:hover{
     width: 100%;
     opacity: 1;
   }
  .add-playlist-panel{

  }
  .add-playlist-panel-pic{
    padding-top: 16px;
    height: 50px;
    width:50px;
    border-radius: 50%;
    background-color: white;
    transition: .5s;
    text-align: center;
    vertical-align: center;
    justify-content: center;
  }
  .add-playlist-panel-pic:hover{
    box-shadow: 0 0 100px 0 #00000077 inset;
  }
  .add-playlist-panel-pic p{
    width: 50px;
    cursor: pointer;
    font-size: 12px;
    color: white;
    opacity: .5;
    transition: .3s;
  }
  .add-playlist-panel-pic:hover p{
    opacity: 1;
    transition: .3s;

  }

  .accordion {
    background-color: #252525;
    color: #777777;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: all .4s;
    border-radius: 0;
    box-shadow: 0 0 0 0 inset;
  }
  .selected {
    background-image: linear-gradient(to right, #252525, #202020);
    border-left: solid  2px;
    transition: all .4s;
  }
  .selected:hover {
    background-image: linear-gradient(to right, #272727, #202020);
    border-left: solid  2px;
    transition: all .4s;
  }
  /*.selected .right-icon {*/
  /*  background-color: transparent;*/
  /*  border-radius: 50%;*/
  /*}*/
  /*.selected:hover .right-icon {*/
  /*  rotation: 15deg;*/
  /*  background-color: #777777;*/
  /*  box-shadow: 0 0 0 2px #777777 ;*/
  /*}*/
  /*.selected:hover .right-icon:hover {*/
  /*  rotation: 15deg;*/
  /*  background-color: white;*/
  /*  box-shadow: 0 0 0 2px white ;*/
  /*}*/
  /*.selected .right-icon .line2,.line1{*/
  /*  !*background-color: #202020;*!*/
  /*  rotation: 50deg;*/
  /*}*/
  /*.selected:hover .right-icon .line2,.line1{*/
  /*  !*background-color: #202020;*!*/
  /*}*/


  /*.selected .right-icon .line2{*/
  /*  position: absolute;*/
  /*  top: 5px;*/
  /*  background-color: #20202000;*/
  /*  height: 0;*/
  /*  transform: rotate(45deg);*/
  /*}*/
  /*.selected .right-icon .line1{*/
  /*  position: absolute;*/
  /*  top: 5px;*/
  /*  background-color: #20202000;*/
  /*  height: 0;*/
  /*  transform: rotate(-45deg);*/
  /*}*/
  /*.selected:hover .right-icon .line1{*/
  /*  rotation-point: 6px 6px;*/
  /*  background-color: #202020;*/
  /*  transform: rotate(0deg);*/
  /*  height: 10px;*/
  /*  top:1px*/
  /*}*/
  /*.selected:hover .right-icon .line2{*/

  /*  top: 1px;*/
  /*  rotation-point: 6px 6px;*/
  /*  background-color: #202020;*/
  /*  transform: rotate(90deg);*/
  /*  height: 10px;*/
  /*}*/


  .icon{
    cursor: pointer;
    right: 15px;
    top: 15px;
    position: absolute;
    color: #777777;
    z-index: 1000;
    /*background-color: #777777;*/
    height: 20px;
    width: 20px;
    justify-content: center;
    align-content: center;
    text-align: center;
    border-radius: 50%;
    padding-top: 1px;
    transition: .3s;
  }
  .icon:hover{
    color:  white;
  }

  .rotate .icon{
    transform: rotate(45deg);
    transition: .3s;
  }



  .active, .accordion:hover {
    background-color: #232323;
    color: white;
    transition: all .4s;
  }

  .accordion:focus{
    border: none;
    outline: none;
    box-shadow: 0px 0 0px 0px  inset;
    /*color: white;*/
    /*background-color: #202020;*/
    transition: all .4s;
    border-left: solid  2px;
  }
  .panel {
    padding: 0 18px;
    display: none;
    background-color: white;
    overflow: hidden;
    transition: all .4s;
  }

  .right-icon {
    position: absolute;
    right: 20px;
    top: 22px;
    height: 12px;
    width: 12px;
    /*position: relative;*/
    /*float: right;*/
    justify-content: center;
    /*border-radius: 50%;*/
    transition: all .4s;
  }
  .right-icon .line1{
    position: absolute;
    left: 5px;
    /*background-color: #5bc0de;*/
    height: 12px;
    width: 2px;
    transition: all .5s;

  }
  .right-icon .line2{
    position: absolute;
    left: 5px;
    /*background-color: #5bc0de;*/
    height: 12px;
    width: 2px;
    rotation-point: 6px 6px;
    transform: rotate(90deg);
    transition: all .5s;
  }

  /*.accordion:focus .right-icon .line2{*/
  /*  transform: rotate(135deg);*/
  /*  transition: all .5s;*/
  /*}*/
  /*.accordion:focus .right-icon .line1{*/
  /*  transform: rotate(45deg);*/
  /*  transition: all .5s;*/
  /*}*/
  .accordion ~ div{
    opacity: 0;
    height: 0;
    display: none;

    transition: all .5s;
    font-size: 0;

  }
  .accordion:focus ~ div{
    content: "";
    height: auto;
    opacity: 1;
    font-size: 15px;
    display: block;
    transition: all .5s;
  }
  .item {
    background-color: #44444400;
    /*padding-left: 15px;*/
    border-radius: 0;
    outline: none;
    color: white;
    width: 100%;
    text-align: left;
    box-shadow: 0 0 0 0 #5bc0de inset;
    transition: all .5s;
  }

  #playlists-button{
    position: relative;
  }
  #playlists-button .add-playlist{
    position: absolute;
    /*float: right;*/
    top: 20px;
    right: 20px;
    background-color: #5bc0de;
    height: 20px;
    width: 50px;
    transition: all .5s;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size: 12px;
    cursor: default;
  }

  #playlists-button:hover .add-playlist{
    position: absolute;
    /*float: right;*/
    top: 20px;
    right: 20px;
    background-color: red;
    height: 20px;
    width: 50px;
    transition: all .5s;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size: 12px;
    cursor: default;
  }
  .item:hover {
    background-color: #404040;
    color: #5bc0de;
    box-shadow: 2px 0 0 0 white inset;
    transition: all .5s;
  }

  /*#chat-button.selected{*/
  /*  background-image: linear-gradient(to right, #252525, #181818);;*/
  /*}*/
  input {
    border-radius: 5px;
    height: 30px;
    width: 100%;
    border: none;
    background-color: #202020;
    color: #777777;
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
