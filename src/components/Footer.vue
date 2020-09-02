<template>
  <div class="footer-empty" :style="{color: color, borderColor: color}">
    <div class="footer ">
      <div style="position: absolute; top:  -18px; width: 100%;">
        <input type="range" min="1" max="100" value="50" class="slider" id="timeline" :style="{borderColor: color}">
      </div>
        <div class="footer-items-demo" >
          <p><i style="font-size: 15px" class="material-icons">music_note</i> {{currentSongName}} | <i style="font-size: 15px" class="material-icons">people</i> {{currentSongArtist}}</p>
        </div>
        <div class="footer-items-hover">
          <div class="container-fluid">
            <div class="song-info col-lg-3 col-md-3 col-sm-3 col-xs-2 row">
              <div :style="{backgroundImage:`url(${currentSongCover})`}" class="song-cover "></div>
              <div class="text">
                <p style="font-size: 16px"><i style="font-size: 15px" class="material-icons">music_note</i> {{ currentSongName }}</p>
                <p style="font-size: 14px">  <i style="font-size: 15px" class="material-icons">people</i>  {{ currentSongArtist }}</p>
              </div>
            </div>
            <div class="buttons container align-content-center col-lg-6 col-md-8 col-sm-8 col-xs-8" align="center">
<!--              <button class="btn" id="shuffle":style="{borderColor: color, boxShadow: color }"></button>-->
<!--              <button class="btn" id="prev"   :style="{borderColor: color, boxShadow: color }"></button>-->
<!--              <button class="btn" id="play"   :style="{borderColor: color, boxShadow: color }"></button>-->
<!--              <button class="btn" id="next"   :style="{borderColor: color, boxShadow: color }"></button>-->
<!--              <button class="btn" id="repeat" :style="{borderColor: color, boxShadow: color }"></button>-->
              <button class="btn"  :style="{borderColor: color, boxShadow: color , color: color}"><i style="text-align: center ;font-size: 30px ;margin-top: 2px; margin-left: -4px" class="material-icons">shuffle</i></button>
              <button class="btn"  :style="{borderColor: color, boxShadow: color , color: color}"><i style="text-align: center ;font-size: 30px ;margin-top: 2px; margin-left: -4px" class="material-icons">skip_previous</i></button>
              <button class="btn"  :style="{borderColor: color, boxShadow: color , color: color}"><i style="text-align: center ;font-size: 30px ;margin-top: 2px; margin-left: -4px" class="material-icons">play_arrow</i></button>
              <button class="btn"  :style="{borderColor: color, boxShadow: color , color: color}"><i style="text-align: center ;font-size: 30px ;margin-top: 2px; margin-left: -4px" class="material-icons">skip_next</i></button>
              <button class="btn"  :style="{borderColor: color, boxShadow: color , color: color}"><i style="text-align: center ;font-size: 30px ;margin-top: 2px; margin-left: -4px" class="material-icons">	repeat_one</i></button>
            </div>
            <div class="col-lg-3 col-md-2 col-sm-1 col-xs-2" style="float: right; position: relative">
              <footer-volume></footer-volume>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Volume from "./Volume.vue";

  export default {
    data() {
      return {
        volume: 50,
        currentSongName: 'Song Name',
        currentSongArtist: 'Artist Name',
        currentSongCover: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Opeth_-_Deliverance.jpg',
        timelinePercentage: 0.5
      }
    },
    props: ['color'],
    components :{
      footerVolume: Volume,
    },
  }
</script>

<style scoped>
  .footer-empty{
    position: relative;
  }
  .footer-empty .footer{
    bottom: -40px;
    background-color: #222222;
    /*transition-delay:  1s;*/
  }
  .footer-empty:hover .footer{
    background-color: #191919;
    box-shadow: 0 0 20px 0 #00000052 ;
    bottom: 0;
    /*transition-delay:  0s;*/
  }

  .footer-empty .footer .footer-items-hover{

    /*margin-top: 100px;*/
    opacity: 0;
    transition: all .5s ease-in-out;
    transform: rotateX(-70deg);
    /*transition-delay:  1s;*/
  }
  .footer-empty:hover .footer .footer-items-hover{
    opacity: 1;
    transform: rotateX(0);
    transition: all .5s ease-in-out;
    /*transition-delay:  0s;*/
  }
  .footer-empty .footer .footer-items-demo{
    top: 0px;
    width: 100%;
    position: absolute;
    bottom: 30px;
    left: 0px;
    text-align: center;
    /*color: #5bc0de;*/
    opacity: 1;
    transition: all .5s ;
    transform: rotateX(0);
    /*transition-delay:  1s;*/
  }
  .footer-empty:hover .footer .footer-items-demo{
    /*left: -50%;*/
    top: -20px;
    opacity: 0;
    transform: rotateX(90deg);
    transition: all .5s ;
    /*transition-delay:  0s;*/
  }

  .footer {
    /*background-color: #222222;*/
    position: relative;

    transition: all .5s ease-in-out;
  }


  #shuffle{
    background-image: url("../icons/png/021-shuffle.png");

  }
  #prev{
    background-image: url("../icons/png/019-previous.png");
  }
  #play{
    background-image: url("../icons/png/038-play-arrow.png");
  }
  #next{
    background-image: url("../icons/png/020-skip.png");
  }
  #repeat{
    background-image: url("../icons/png/027-repeat.png");
  }
  .buttons {
    /*background-color: red;*/

    height: 70px;
    padding-top: 5px;
    align-content: center;
  }
  .buttons button {
    background-color: #272727;
    /*color: #5bc0de;*/
    border: solid  2px;
    align-content: center;
    font-size: 18px;
    margin: 4px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    transition: all .3s;
    background-size: 40%;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: none;
    outline: none;


  }
  .buttons button:hover {
    background-color: #222222;
    /*color: #5bc0de;*/
    /*border: solid #5bc0de 3px;*/
    /*font-size: 20px;*/
    /*margin: 2px;*/
    /*height: 54px;*/
    /*width: 54px;*/
    position: center;
    transition: all .3s;
    box-shadow: 0 0 50px 0 #00000066;
    /*z-index: 2;*/
  }

  /* The slider itself */
  .slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 5px; /* Specified height */
    background: #333333; /* Grey background */
    outline: none; /* Remove outline */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: all .2s;
  }

  /* Mouse-over effects */
  .slider:hover {
    background: #444444; /* Grey background */
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
    transition: all .2s;
  }
  .slider::-webkit-slider-thumb:hover {
    width: 9px; /* Set a specific slider handle width */
    height: 9px; /* Slider handle height */
    box-shadow: 0 0 10px 0 #ffffff88;
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
    width: 9px; /* Set a specific slider handle width */
    height: 9px; /* Slider handle height */
    box-shadow: 0 0 10px 0 #ffffff88;
    transition: all .2s;
  }
  .song-info {
    float: left;
    text-space: 10px;
  }
  .song-info p {
    /*font-weight: bold;*/
    /*color: #5bc0de;*/
    margin-bottom: 0;
  }
  .song-info .text {
    margin: 10px 5px 5px 5px;
  }
  .song-cover {
    /*background-color: #5bc0de;*/
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
