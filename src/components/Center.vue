<template>
  <div class="container-fluid body">
    <div class="center">
      <div class="header container " :style="{color: color}">
        <h1>Home</h1>
      </div>
      <div class="home-item container " :style="{color: color}">
        <h2>Home</h2>
        <div class="category container d-flex">
          <div class="home-item-song">
            <div class="pic">
              <div class="pic-hover">
                <div class="play" :style="{backgroundColor: color}">
                  <div class="play-sign"></div>
                </div>
              </div>
            </div>
            <div class="txt">
              <p style="font-size: 15px">song name</p>
              <p style="font-size: 13px">song name</p>
            </div>
          </div>


          <div class="home-item-song">
            <div class="pic">
              <div class="pic-hover">
                <div class="play" :style="{backgroundColor: color}">
                  <div class="play-sign"></div>
                </div>
              </div>
            </div>
            <div class="txt">
              <p style="font-size: 15px">song name</p>
              <p style="font-size: 13px">song name</p>
            </div>
          </div>

        </div>
      </div>

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
            imageURL: '',
          },

        ]
      }
    },
  }
</script>

<style scoped>
  .body {
    background-color: #202020;
    padding: 10px;
  }
  .category{
    /*display: grid;*/
  }
  .header{
    text-align: center;
  }
  .home-item{

  }
  h1  {
    font-weight: bold;
  }
  .txt {
    text-align: center;
  }
  .home-item-song{
    margin: 10px;
  }
  .home-item .home-item-song .pic{
    position: relative;
    background-color: #5bc0de;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    transition: all .5s;
  }
  .home-item .home-item-song .pic:hover{
    box-shadow: 0 0 100px 0 #00000099 inset;
    transition: all .5s;
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
    opacity: .5;
  }
  .home-item .home-item-song .pic .pic-hover .play .play-sign{
    transition: all .5s;
  }
  .home-item .home-item-song .pic:hover .pic-hover .play .play-sign{
    transition: all .5s;
  }
  .home-item .home-item-song .pic:hover .pic-hover .play:hover{
    opacity: 1;
    cursor: pointer;
  }

  .play {
    /*background-color: red;*/
    height: 60px;
    width: 60px;
    border: solid white 2px;
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
