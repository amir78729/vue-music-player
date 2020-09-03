<template>
  <div class="container-fluid body">

    <div class="center">
      <div class="container playlist-info" :style="{color: color}">
        <div :style="{backgroundImage:`url(${playlistCoverURL})`}" class="playlist-cover"></div>
        <h1>{{playlistName}}</h1>
        <p>{{playlistDescription}}</p>
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

  export default {
    name: "Playlist",
    props: ['color'],
    data() {
      return {
        playlistName : 'Playlist Name',
        playlistDescription : 'Playlist Description',
        playlistCoverURL : 'https://upload.wikimedia.org/wikipedia/en/b/b3/Opeth_-_Deliverance.jpg',
        colors: colors,

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
    },
  }
</script>

<style scoped>
  .body {

    background-color: #202020;
    padding: 10px 10px 20px 10px;
  }
  .playlist-info h1,p{
    /*color: #5bc0de;*/
    /*text-align: center;*/

  }
  .playlist-info{
    cursor: default;
    transition: all 0.5s;
    horiz-align: center;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .playlist-cover{
    margin: 0 auto;
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
