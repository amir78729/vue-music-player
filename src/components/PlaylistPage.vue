<template>
  <div class="container-fluid body">

    <div class="center">
      <div class="container playlist-info" :style="{color: color , backgroundImage:`url(${playlists[currentPlaylistIndex].imageURL})`}">
        <div :style="{backgroundImage:`url(${playlists[currentPlaylistIndex].imageURL})`}" class="playlist-cover"></div>
        <h1>{{playlists[currentPlaylistIndex].title}}</h1>
        <p>{{playlists[currentPlaylistIndex].description}}</p>
        <router-link to="/all-playlists">
          <div class="d-flex go-back"><i style="font-size: 15px" class="material-icons">arrow_back</i> <p>Back to Playlists</p></div>
        </router-link>

      </div>
      <table class="info table table-dark">
        <thead >
        <tr :style="{color: color}">
          <th>#</th>
          <th> </th> <!-- like -->
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
        </tr>
        </thead>
        <tbody class="">
        <tr v-for="(row, index) in data">
          <td>{{ index + 1 }}</td>
          <td v-if="row.isLiked"><i style="font-size: 15px" class="material-icons">favorite</i></td>
          <td v-else><i style="font-size: 15px" class="material-icons">favorite_outline</i></td>
          <td>{{ row.title }}</td>
          <td>{{ row.artist }}</td>
          <td>{{ row.album }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {colors} from "../colors";
  import {playlists} from "../playlists";

  export default {
    name: "Playlist",
    props: ['color' , 'playlistIndex'],
    data() {
      return {
        playlistName : 'Playlist Name',
        playlistDescription : 'Playlist Description',
        playlistCoverURL : 'https://upload.wikimedia.org/wikipedia/en/b/b3/Opeth_-_Deliverance.jpg',
        colors: colors,
        playlists: playlists,

        data: [
          {
            title: 'title',
            isLiked: true,
            artist: 'artist',
            album: 'album',
          },
          {
            title: 'title',
            isLiked: true,
            artist: 'artist',
            album: 'album',
          },{
            title: 'title',
            isLiked: true,
            artist: 'artist',
            album: 'album',
          },{
            title: 'title',
            isLiked: true,
            artist: 'artist',
            album: 'album',
          },
          {
            title: 'title',
            isLiked: true,
            artist: 'artist',
            album: 'album',
          },
          {
            title: 'title',
            isLiked: true,
            artist: 'artist',
            album: 'album',
          },
          {
            title: 'title',
            isLiked: false,
            artist: 'artist',
            album: 'album',
          },{
            title: 'title',
            isLiked: true,
            artist: 'artist',
            album: 'album',
          },{
            title: 'title',
            isLiked: true,
            artist: 'artist',
            album: 'album',
          },{
            title: 'title',
            isLiked: true,
            artist: 'artist',
            album: 'album',
          },
        ]
      }
    },computed: {
      currentPlaylistIndex(){
        return this.$store.state.currentPlaylistIndex;
      }
    }
  }
</script>

<style scoped>
  .body {
    background-color: #202020;
    padding: 10px 10px 20px 10px;
  }
  .go-back{
    position: absolute;
    top: 5px;
    cursor: pointer;

  }
  .go-back i{
    color: white;
    margin: 5px;
    opacity: 0;
    transition: .3s;
    cursor: pointer;
  }
  .go-back:hover i{
    opacity: 1;
    transition: .3s;
  }
  .go-back p{
    cursor: pointer;

    margin-top: 3px;
    margin-left: -10px;
    transition: .3s;
  }
  .go-back:hover p{
    margin-left: 2px;
    transition: .3s;
    color: white;
  }
  .playlist-info  p{
    color: #777777;
    transition: .3s;
  }
  .playlist-info  p:hover{
    color: white;
    transition: .3s;
  }

  .playlist-info  h1{
    font-weight: bolder;

    transition: .3s;
  }
  .playlist-info  h1:hover{
    transition: .3s;
    text-shadow: 0 0  50px black;
  }
  .playlist-info{
    position: relative;
    padding: 20px 0;
    background-size: 95% ;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #202020;
    background-blend-mode: overlay;
    box-shadow: 0px 0px 80px 160px #202020 inset;
    cursor: default;
    transition: all 0.5s;
    horiz-align: center;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .playlist-cover{
    margin: 10px auto;
    height: 200px;
    width: 200px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 200px 200px;
    border-radius: 100px;
    box-shadow: 0 0 100px 0 #00000077 inset;
    transition: all .2s ease-in-out;
  }
  .playlist-cover:hover{
    background-position: center;
    background-size: 210px 210px;
    /*border-radius: 50px;*/
    box-shadow: 0 0 100px 0 #00000000 inset;
    transition: all .2s ease-in-out;
  }
  .center {
    /*background-color: red;*/
    /*width: 100vh;*/
    /*margin-left: 150px;*/
    padding: 10px;
    /*height: 67vh;*/
    overflow: auto;

  }
  .title {
    color: #5bc0de;
  }
  .info {
    width: 100%;
  }
  tr {
    color: #777777;
    background-color: #202020;

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

</style>
