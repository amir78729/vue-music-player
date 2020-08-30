<template>
    <div class="row" style="position: absolute; right: 10px;top: -55px">
      <div class="col-sm-1" >
        <div id="icon"
        :class="{'vol3': volume >= 66,
        'vol2': 66>volume && volume >= 33,
        'vol1': 33>volume && volume > 0,
        'vol0': volume == 0,
        }">
        </div>
      </div>
      <div class="slidecontainer " style="padding-left: 20px">
        <input :value="volume" type="range" min="0" max="100" value="50" class="slider" id="volume" @input="changeVolume($event)">

      </div>
    </div>
</template>

<script>
    export default {
      name: "volume",
      data() {
        return {
          volume: 50,
          volumeBackground: "../icons/png/003-volume-1.png"
        }
      },
      methods: {
        changeVolume(e) {
          this.volume = e.target.value;
          if (e.target.value> 60) {
            this.volumeBackground = "../icons/png/003-volume-1.png";
            // document.getElementById("icon").style.backgroundImage = "url('../icons/png/003-volume-1.png')";
          }else if (e.target.value>0) {
            this.volumeBackground = "../icons/png/006-volume.png";
            // document.getElementById("icon").style.backgroundImage = "url('../icons/png/006-volume.png')";
          }else {
            this.volumeBackground = "../icons/png/004-mute-1.png";
            // document.getElementById("icon").style.backgroundImage = "url('../icons/png/004-mute-1.png')";
          }
        }
      }
    }
</script>

<style scoped>
  .vol0{
    background-image: url("../icons/png/004-mute-1.png");
  }
  .vol1{
    background-image: url("../icons/png/005-mute.png");
  }
  .vol2{
    background-image: url("../icons/png/006-volume.png");
  }
  .vol3{
    background-image: url("../icons/png/003-volume-1.png");
  }
  #icon {
    /*filter: brightness(0.5) sepia(1) saturate(10000%);*/
    /*background-image: url("../icons/png/003-volume-1.png");*/
    margin: 5px;
    background-repeat: no-repeat;
    background-size: cover;
    height: 20px;
    width: 20px;
    /*background-color: #5bc0de;*/
  }

  /* The slider itself */
  .slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 50%; /* Full-width */
    height: 6px; /* Specified height */
    border-radius: 3px;
    background: #333333; /* Grey background */
    outline: none; /* Remove outline */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: all .2s;
  }

  /* Mouse-over effects */
  .slider:hover {
    background: #444444; /* Grey background */
    width: 100%;
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
    width: 9px; /* Set a specific slider handle width */
    height: 9px; /* Slider handle height */
    box-shadow: 0 0 10px 0 #5bc0de;
    transition: all .2s;
  }
</style>
