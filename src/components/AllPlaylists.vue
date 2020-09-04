<template>
    <div class="body">
      <div class=" container header" :style="{color: color}">
        <h1><i style="font-size: 30px" class="material-icons">playlist_play</i> Playlists</h1>
      </div>
      <div class="d-flex">
        <div class="playlist-preview">
          <div v-for="playlist in playlists" class="playlist-item-song">
            <div class="pic" :style="{backgroundImage: `url(${playlist.imageURL})`}">
              <div class="pic-hover">
                <div class="play" :style="{backgroundColor: color}">
                  <div class="play-sign"></div>
                </div>
              </div>
            </div>
            <div class="txt">
              <p style="font-size: 15px">{{playlist.title}}</p>
              <p style="font-size: 13px"><i style="font-size: 15px" class="material-icons">people</i> {{playlist.artist}}</p>
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
      },
    }
</script>

<style scoped>
  .body {
    background-color: #202020;
    padding: 10px 10px 60px 10px;
    position: relative;
    height: 100%;
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
    margin: 10px;
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

</style>
