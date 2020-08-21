<template>
  <div class="footer ">
<!--    <div class="timeline" :style="{width: 100*timelinePercentage+'%'}">-->
<!--    </div>-->
    <div class="slidecontainer">
      <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
    </div>
    <div class="container-fluid">
      <div class="song-info col-lg-4 row">
        <div style="" class="song-cover  "></div>
        <div class="text">
          <p style="font-size: 18px">{{ currentSongName }}</p>
          <p style="font-size: 16px">{{ currentSongArtist }}</p>
        </div>
      </div>
      <div class="buttons container align-content-center col-lg-4" align="center">
        <button class="btn" id="shuffle"><i class="fa fa-play" aria-hidden="true"></i></button>
        <button class="btn" id="prev"><i class="fa fa-play" aria-hidden="true"></i></button>
        <button class="btn" id="play"><i class="fa fa-play" aria-hidden="true"></i></button>
        <button class="btn" id="next"><i class="fa fa-play" aria-hidden="true"></i></button>
        <button class="btn" id="repeat"><i class="fa fa-play" aria-hidden="true"></i></button>
      </div>
      <div class="col-lg-4">

      </div>
    </div>
  </div>
</template>

<script>




  export default {
    data() {
      return {
        currentSongName: 'Song Name',
        currentSongArtist: 'Artist Name',
        timelinePercentage: 0.5
      }
    },
  }
</script>

<style scoped>
  .footer {
    background-color: #444444;
  }

  #play {
    /*text: 'play';*/
  }
  .buttons {
    /*background-color: red;*/

    height: 70px;
    padding-top: 5px;
    align-content: center;
  }
  .buttons button {
    background-color: #444444;
    color: #5bc0de;
    border: solid #5bc0de 2px;
    align-content: center;
    font-size: 18px;
    margin: 4px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    transition: all .3s;
  }
  .buttons button:hover {
    background-color: #333333;
    color: #5bc0de;
    border: solid #5bc0de 2px;
    font-size: 20px;
    margin: 2px;
    height: 54px;
    width: 54px;
    position: center;
    transition: all .3s;
    box-shadow: 0 0 50px 0 #00000066;
    z-index: 2;
  }
  .timeline {
    height: 5px;
    background-color: red;
  }
  .slidecontainer {
    width: 100%; /* Width of the outside container */
  }

  /* The slider itself */
  .slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 5px; /* Specified height */
    background: #999999; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
  }

  /* Mouse-over effects */
  .slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 5px; /* Set a specific slider handle width */
    height: 5px; /* Slider handle height */
    background: red; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }

  .slider::-moz-range-thumb {
    width: 7px; /* Set a specific slider handle width */
    height: 7px; /* Slider handle height */
    background: red; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }

  .song-info {
    float: left;
    text-space: 10px;
  }
  .song-info p {
    /*font-weight: bold;*/
    color: #5bc0de;
    margin-bottom: 0;
  }
  .song-info .text {
    padding: 2px;
  }
  .song-cover {
    background-color: #5bc0de;
    height: 50px;
    width: 50px;
    margin: 7px 5px 5px 0px;
    position: relative;
    border-radius: 50%;
  }
</style>
