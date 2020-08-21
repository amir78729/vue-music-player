<template>
  <div class="footer ">
<!--    <div class="timeline" :style="{width: 100*timelinePercentage+'%'}">-->
<!--    </div>-->
    <div style="position: absolute; top:  -18px; width: 100%;">
      <input type="range" min="1" max="100" value="50" class="slider" id="timeline">
    </div>
    <div class="container-fluid">
      <div class="song-info col-lg-3 col-md-3 col-sm-3 col-xs-2 row">
        <div :style="{backgroundImage:`url(${currentSongCover})`}" class="song-cover "></div>
        <div class="text">
          <p style="font-size: 16px">{{ currentSongName }}</p>
          <p style="font-size: 14px">{{ currentSongArtist }}</p>
        </div>
      </div>
      <div class="buttons container align-content-center col-lg-6 col-md-8 col-sm-8 col-xs-8" align="center">
        <button class="btn" id="shuffle"><i class="fa fa-play" aria-hidden="true"></i></button>
        <button class="btn" id="prev"><i class="fa fa-play" aria-hidden="true"></i></button>
        <button class="btn" id="play"><i class="fa fa-play" aria-hidden="true"></i></button>
        <button class="btn" id="next"><i class="fa fa-play" aria-hidden="true"></i></button>
        <button class="btn" id="repeat"><i class="fa fa-play" aria-hidden="true"></i></button>
      </div>
      <div class="col-lg-3 col-md-2 col-sm-1 col-xs-2" style="float: right; position: relative">
        <div class="slidecontainer" style="position: absolute; right: 0; top: -55px">
          <input type="range" min="1" max="100" value="50" class="slider" id="volume">
        </div>
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
        currentSongCover: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Opeth_-_Deliverance.jpg',
        timelinePercentage: 0.5
      }
    },
  }
</script>

<style scoped>
  .footer {
    background-color: #444444;
    position: relative;
    transition: all .5s;
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


  /* The slider itself */
  .slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 5px; /* Specified height */
    background: #555555; /* Grey background */
    outline: none; /* Remove outline */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: all .2s;
  }

  /* Mouse-over effects */
  .slider:hover {
    background: #666666; /* Grey background */
  }

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 7px; /* Set a specific slider handle width */
    height: 7px; /* Slider handle height */
    border-radius: 50% ;
    background: #5bc0de; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
  .slider::-webkit-slider-thumb:hover {
    box-shadow: 0 0 10px 0 #5bc0de;
    transition: all .2s;
  }

  .slider::-moz-range-thumb {
    width: 7px; /* Set a specific slider handle width */
    height: 7px; /* Slider handle height */
    background: #5bc0de; /* Green background */
    cursor: pointer; /* Cursor on hover */
    transition: all .2s;
  }
  .slider::-moz-range-thumb:hover {
    box-shadow: 0 0 10px 0 #5bc0de;
    transition: all .2s;
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
    margin: 10px 5px 5px 5px;
  }
  .song-cover {
    background-color: #5bc0de;
    background-repeat: no-repeat;
    /*background-attachment: inherit;*/
    background-position: center;
    background-size: 50px 50px;
    height: 50px;
    width: 50px;
    margin: 7px 5px 5px 0px;
    position: relative;
    border-radius: 25px;
    transition: all .5s;
    box-shadow: 0 0 10px 0 #000000 inset;
  }
  .song-cover:hover {
    border-radius: 10px;
    transition: all .5s;
    box-shadow: none;
  }
</style>
