<template>
  <div class="container body">
    <h1 class="title">{{ title }}</h1>
    <div class="center">
      <table class="info table table-dark">
        <thead >
        <tr >
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
            <td v-if="row.isLiked">Y</td>
            <td v-else>N</td>
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
      name: "Center",
      data() {
        return {
          title: 'Songs',
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
    background-color: #373737;
    padding: 10px;
  }
  .center {
    /*background-color: red;*/
    /*width: 100vh;*/
    /*margin-left: 150px;*/
    padding: 10px;
    height: 67vh;
    overflow: auto;

  }
  .title {
    color: #5bc0de;
  }
  .info {
    width: 100%;
  }
  tr {
    color: white;
    background-color: #373737;

  }
  tr:hover {
    color: #5bc0de;
    background-color: #404040;
  }
  th{
    background-color: #373737;
    color: #5bc0de;
    cursor: default;
  }

</style>
