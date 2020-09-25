<template>
    <div class="body">
      <div class=" container header d-flex" :style="{color: color}">
        <h2 :style="{color: color}"><i style="font-size: 30px" class="material-icons">playlist_play</i> Playlists</h2>
        <p class="total">{{playlists.length}} playlists</p>
        <button class="add btn" type="button" data-toggle="modal" data-target="#add-playlist-modal" :style="{backgroundColor: color}">add playlist</button>
      </div>

      <!-- add playlist modal -->
      <div class="modal fade add-playlist-modal" id="add-playlist-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" :style="{color: color}" id="exampleModalLabel"><i style="font-size: 20px" class="material-icons">playlist_add</i> Add playlist</h5>
              <button :style="{color: color}" type="button" class="close btn" data-dismiss="modal" aria-label="Close" style="outline: none; box-shadow: none">
                <span aria-hidden="true" ><i style="font-size: 20px" class="material-icons exit ">clear</i></span>
              </button>
            </div>
            <div class="modal-body ">
              <div style="padding: 20px 15px" class="add-playlist-panel" >
                <div class="add-playlist-panel-pic">
                  <p> <i style="font-size: 15px" class="material-icons">edit</i> </p>
                </div>
                <hr :style="{backgroundColor: color}">
                <div class="">
                  <div style="padding-left: 0px;margin-top: 10px; width: 100%">
                    <div style="font-size: 12px; font-weight: bold;" :style="{color: color}">Title: </div>
                    <input type="text">
                  </div>
                </div>
                <div style="margin-top: 10px;width: 100%">
                  <div style="font-size: 12px; font-weight: bold;" :style="{color: color}">Description: </div>
                  <input type="text">
                </div>
<!--                <button class="btn add-playlist-btn" :style="{backgroundColor: color}" style="color: white"> Add Playlist!</button>-->
              </div>
            </div>
            <div class="modal-footer" >
              <button type="button" class="btn add"  style="background-color: #303030 ;height: 35px;width: max-content" data-dismiss="modal">Close</button>
              <button type="button" class="btn add" style="height: 35px;width: max-content" :style="{backgroundColor: color}">Save changes</button>
            </div>
          </div>
        </div>
      </div>








      <div class="d-flex">
        <div class="playlist-item d-flex" style="">
          <div v-for="(playlist,index) in playlists" class="playlist-item-song">
            <div class="pic" :style="{backgroundImage: `url(${playlist.imageURL})`}" >
              <router-link to="/playlist">
                <div class="pic-hover" @click="goToPlaylist(index)">
                  <div class="play" :style="{backgroundColor: color}">
                    <div class="play-sign"></div>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="txt">
              <p style="font-size: 15px ; font-weight: inherit">{{playlist.title}}</p>
              <p style="font-size: 13px">by <b>{{playlist.by}}</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { playlists } from "../playlists";

  export default {
      name: "AllPlaylists",
      props:['color'],
      data() {
        return {
          playlists: playlists
        }
      },methods:{
        goToPlaylist(index){
          // this.$emit('goToPlaylist', index);
          this.$store.state.currentPlaylistIndex = index;
        }
     }
    }
</script>

<style scoped>
  .body {
    background-color: #202020;
    padding: 0px 10px 60px 10px;
    position: relative;
    height: 100%;
    overflow-y: auto;
  }
  .header{
    position: fixed;
    background-image: linear-gradient(to bottom,#202020,#202020, transparent);
    padding-top: 10px;
    z-index: 50;
    text-shadow: #000 0px 0px 20px;
    width: 100%;
    /*background-color: red;*/

  }
  .add-playlist-modal .modal-body{
    background-image: linear-gradient(to bottom, #252525, #181818);
    border: none;
  }

  .add-playlist-modal  .modal-header,.modal-content{
    background-image: linear-gradient(to left, #252525, #181818);
    border: none;
  }

  .modal-dialog, .modal-footer, .modal-header{
    background-color: #202020;
    box-shadow: 0 0 50px 0  #000000bb ;
    border: none;
  }

  .exit {
    transform: rotate(0deg);
    transition: .3s;
  }

  .exit:focus{
    outline: none;
    border: solid #00000000;
    box-shadow: 0 0 0 0 #00000000;
  }

  .exit:hover {
    transition: .3s;
    transform: rotate(90deg);
  }

  .modal h5, div{
    cursor: default;
  }



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
    margin: 0 auto;
    padding-top: 16px;
    height: 150px;
    width:150px;
    border-radius: 50%;
    background-color: white;
    transition: .5s;
    text-align: center;
    vertical-align: center;
    justify-content: center;
  }
  .add-playlist-panel-pic:hover{
    box-shadow: 0 0 100px 0 #000000dd inset;
  }
  .add-playlist-panel-pic p{
    margin: 50px auto;
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

  .add{
    margin: auto 10px;
    font-size: 12px;
    padding-top: 3px;
    color: white;
    width: 100px;
    height: 24px;
    text-align: center;
    box-shadow: 0 0 100px 0 #00000000 inset;
    border: none;
    border-radius: 12px;
    transition: .3s;
    cursor: pointer;
  }
  .add:hover {
    box-shadow: 0 0 100px 0 #00000077 inset;
    transition: .3s;
  }
  h1  {
    /*font-weight: bold;*/
    cursor: default;
  }
  .playlist-preview{

  }
  .txt {
    text-align: center;

  }
  .txt p {
    margin-bottom: 0;
    color: #777777;
    transition: .5s;
    cursor: default;
  }
  .txt p:hover {
    color: white;
    transition: .5s;
  }
  .playlist-item-song{
    margin: 5px;
  }
  .playlist-item{
    padding-top: 60px;

    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }
  .playlist-item .playlist-item-song .pic{
    position: relative;
    background-color: #151515;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    transition: all .5s;
    background-position: center;
    background-size: 150px 150px ;
    background-repeat: no-repeat;
  }
  .playlist-item .playlist-item-song .pic:hover{
    box-shadow: 0 0 100px 0 #00000099 inset;
    transition: all .5s;
    background-size: 180px 180px ;
  }
  .playlist-item .playlist-item-song .pic .pic-hover{
    opacity: 0;
    position: absolute;
    top: 0;
    /*background-color: red;*/
    height: 150px;
    width: 150px;
    border-radius: 50%;
    transition: all .5s;

  }
  .playlist-item .playlist-item-song .pic:hover .pic-hover{
    opacity: 1;
    transition: all .5s;
  }
  .playlist-item .playlist-item-song .pic .pic-hover .play{
    position: absolute;
    top: 45px;
    left: 45px;
    transition: all .5s;
    opacity: 0;
  }
  .playlist-item .playlist-item-song .pic:hover .pic-hover .play{
    position: absolute;
    top: 45px;
    left: 45px;
    transition: all .5s;
    opacity: .75;
  }
  .playlist-item .playlist-item-song .pic .pic-hover .play .play-sign{
    transition: all .5s;
  }
  .playlist-item .playlist-item-song .pic:hover .pic-hover .play .play-sign{
    transition: all .5s;
  }
  .playlist-item .playlist-item-song .pic:hover .pic-hover .play:hover{
    opacity: 1;
    box-shadow: 0 0 50px 0 #00000099;
    cursor: pointer;
  }

  .play {
    /*background-color: red;*/
    height: 60px;
    width: 60px;
    border-radius: 50%;
    position: relative;
  }
  .play-sign{
    top: 18px;
    left: 18px;
    position: absolute;
    height: 24px;
    width: 24px;
    box-sizing: border-box;
    border-style: solid;
    border-color: transparent transparent transparent white;
    border-width: 12px 0px 12px 24px;
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
