<template>
  <div class="container-fluid body">
    <div >
      <div class=" container header" :style="{color: color}">
        <h1><i style="font-size: 30px" class="material-icons">home</i> Home</h1>
      </div>
      <div class="home-item container " :style="{color: color}">
        <div class="subtitle d-flex">
          <h3><i style="font-size: 15px" class="material-icons">music_note</i> Songs</h3>
          <router-link to="/songs"><button>  . . .</button></router-link>
        </div>
        <div class="category container d-flex">
          <div v-for="song in songs" class="home-item-song">
            <div class="pic" :style="{backgroundImage: `url(${song.imageURL})`}">
              <div class="pic-hover">
                <div class="play" :style="{backgroundColor: color}">
                  <div class="play-sign"></div>
                </div>
              </div>
            </div>
            <div class="txt">
              <p style="font-size: 15px"><i style="font-size: 15px" class="material-icons">music_note</i> {{song.title}}</p>
              <p style="font-size: 13px"><i style="font-size: 15px" class="material-icons">people</i> {{song.artist}}</p>
            </div>
          </div>



        </div>
      </div>

      <hr :style="{backgroundColor: color}">

      <div class="home-item container " :style="{color: color}">
        <div class="subtitle d-flex">
          <h3><i style="font-size: 15px" class="material-icons">album</i> Albums</h3>
          <router-link to="/albums"><button>  . . .</button></router-link>
        </div>
        <div class="category container d-flex">
          <div v-for="song in songs" class="home-item-song">
            <div class="pic" :style="{backgroundImage: `url(${song.imageURL})`}">
              <div class="pic-hover">
                <div class="play" :style="{backgroundColor: color}">
                  <div class="play-sign"></div>
                </div>
              </div>
            </div>
            <div class="txt">
              <p style="font-size: 15px"><i style="font-size: 15px" class="material-icons">music_note</i> {{song.title}}</p>
              <p style="font-size: 13px"><i style="font-size: 15px" class="material-icons">people</i> {{song.artist}}</p>
            </div>
          </div>



        </div>
      </div>

<!--      <hr :style="{backgroundColor: color}">-->
    </div>
  </div>
</template>

<script>
  import {colors} from "../colors";

  export default {
    name: "Playlist",
    props: ['color'],
    data() {
      return {
        playlistName : 'Playlist Name',
        playlistDescription : 'Playlist Description',
        playlistCoverURL : 'https://upload.wikimedia.org/wikipedia/en/b/b3/Opeth_-_Deliverance.jpg',
        colors: colors,

        songs: [
          {
            title: 'windowpane',
            isLiked: true,
            artist: 'Opeth',
            album: 'damnation',
            imageURL: 'https://upload.wikimedia.org/wikipedia/en/1/16/Damnation_cover.jpg',
          },
          {
            title: 'Take me to church',
            isLiked: true,
            artist: 'Hozier',
            album: 'damnation',
            imageURL: 'https://images.genius.com/67a80685b84a3fe6a948511dc216767a.1000x1000x1.jpg',
          },
          {
            title: 'windowpane',
            isLiked: true,
            artist: 'Opeth',
            album: 'damnation',
            imageURL: 'https://upload.wikimedia.org/wikipedia/en/1/16/Damnation_cover.jpg',
          },
          {
            title: 'Take me to church',
            isLiked: true,
            artist: 'Hozier',
            album: 'damnation',
            imageURL: 'https://images.genius.com/67a80685b84a3fe6a948511dc216767a.1000x1000x1.jpg',
          },
          {
            title: 'windowpane',
            isLiked: true,
            artist: 'Opeth',
            album: 'damnation',
            imageURL: 'https://upload.wikimedia.org/wikipedia/en/1/16/Damnation_cover.jpg',
          },
          {
            title: 'Take me to church',
            isLiked: true,
            artist: 'Hozier',
            album: 'damnation',
            imageURL: 'https://images.genius.com/67a80685b84a3fe6a948511dc216767a.1000x1000x1.jpg',
          },
          {
            title: 'windowpane',
            isLiked: true,
            artist: 'Opeth',
            album: 'damnation',
            imageURL: 'https://upload.wikimedia.org/wikipedia/en/1/16/Damnation_cover.jpg',
          },
          {
            title: 'Take me to church',
            isLiked: true,
            artist: 'Hozier',
            album: 'damnation',
            imageURL: 'https://images.genius.com/67a80685b84a3fe6a948511dc216767a.1000x1000x1.jpg',
          },
        ]
      }
    },
  }
</script>

<style scoped>
  .body {
    background-color: #202020;
    padding: 10px 10px 60px 10px;
    position: relative;
  }
  .subtitle{
    position: relative;

  }
  .subtitle button{
    font-size: 0px;
    margin-left: 0px;
    margin-top: 20px;
    word-spacing: -5px;
    opacity: 0;
    transition: all .5s;
    cursor: pointer;
    background-color: transparent;
    color: #777777;
    box-shadow: 0 0 0 0 #00000000;
    border: none;
    outline: none;
  }
  hr{
    opacity: 0.3;
  }

  .subtitle:hover button{
    font-size: 20px;
    margin-left: 5px;
    margin-top: -10px;
    word-spacing: -5px;
    opacity: 1;
    transition: all .5s;
  }
  .subtitle:hover button:hover{
    color: white;
    /*cursor: pointer;*/
  }
  .category{
    /*display: grid;*/
    background-image: linear-gradient(to right, #202020,#222222,#202020);
    overflow-x:auto ;
  }
  .header{
    /*position: fixed;*/
    /*top: ;*/
    /*z-index: 1;*/
    /*background-image: linear-gradient(to bottom, #202020, transparent);*/
    /*!*text-align: center;*!*/
  }
  .home-item{

  }
  h1  {
    /*font-weight: bold;*/
    cursor: default;
  }
  h3 {
    cursor: default;
    color: #777777;
    font-size: 20px;

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
  .home-item-song{
    margin: 10px;
  }
  .home-item .home-item-song .pic{
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
  .home-item .home-item-song .pic:hover{
    box-shadow: 0 0 100px 0 #00000099 inset;
    transition: all .5s;
    background-size: 180px 180px ;
  }
  .home-item .home-item-song .pic .pic-hover{
    opacity: 0;
    position: absolute;
    top: 0;
    /*background-color: red;*/
    height: 150px;
    width: 150px;
    border-radius: 50%;
    transition: all .5s;

  }
  .home-item .home-item-song .pic:hover .pic-hover{
    opacity: 1;
    transition: all .5s;
  }
  .home-item .home-item-song .pic .pic-hover .play{
    position: absolute;
    top: 45px;
    left: 45px;
    transition: all .5s;
    opacity: 0;
  }
  .home-item .home-item-song .pic:hover .pic-hover .play{
    position: absolute;
    top: 45px;
    left: 45px;
    transition: all .5s;
    opacity: .75;
  }
  .home-item .home-item-song .pic .pic-hover .play .play-sign{
    transition: all .5s;
  }
  .home-item .home-item-song .pic:hover .pic-hover .play .play-sign{
    transition: all .5s;
  }
  .home-item .home-item-song .pic:hover .pic-hover .play:hover{
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
