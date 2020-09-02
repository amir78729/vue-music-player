<template>
  <div style="" class="">
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
      <router-link to="/album">
        <button id="albums-button" class="btn accordion" :style="{borderColor: color}" @click="changePage('albums')" :class="{'selected': isAlbums }">
          <!--        <div class="right-icon"><div :style="{backgroundColor: color}" class="line1"  ></div><div :style="{backgroundColor: color}" class="line2"></div></div>-->
          <i style="font-size: 15px" class="material-icons">album</i> Albums</button>
      </router-link>
    </div>

    <div class="accordion-panel">
     <router-link to="/playlist">
       <button id="playlists-button" class="btn accordion" :style="{borderColor: color}" @click="changePage('playlists')" :class="{'selected': isPlaylists }">
         <!--        <div class="right-icon"><div :style="{backgroundColor: color}" class="line1"  ></div><div :style="{backgroundColor: color}" class="line2"></div></div>-->
         <i style="font-size: 15px" class="material-icons">playlist_play</i> Playlists</button>
     </router-link>
      <div id="playlists" class="">
        <ul class="" style="margin: 0; padding: 0">
          <button class="btn  item" v-for="playlist in playlists">{{ playlist }}</button>
        </ul>
      </div>
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
          this.$emit('homeSelected')
        } else  if (page === 'songs'){
          this.isHome = false;
          this.isSongs = true;
          this.isAlbums = false;
          this.isPlaylists = false;
          this.$emit('songsSelected')
        } if (page === 'albums'){
          this.isHome = false;
          this.isSongs = false;
          this.isAlbums = true;
          this.isPlaylists = false;
          this.$emit('albumsSelected')
        } if (page === 'playlists'){
          this.isHome = false;
          this.isSongs = false;
          this.isAlbums = false;
          this.isPlaylists = true;
          this.$emit('playlistsSelected')
        }

      }
    }
  }
</script>

<style>
  .accordion {
    background-color: #252525;
    color: #BBBBBB;
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
    background-image: linear-gradient(to right, #202020, #202020);
    border-left: solid  2px;
    transition: all .4s;
  }
  .selected:hover {
    background-image: linear-gradient(to right, #252525, #202020);
    border-left: solid  2px;
    transition: all .4s;
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
    height: 12px;
    width: 12px;
    position: relative;
    float: right;
    justify-content: center;
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
  .item:hover {
    background-color: #404040;
    color: #5bc0de;
    box-shadow: 2px 0 0 0 white inset;
    transition: all .5s;
  }

</style>
