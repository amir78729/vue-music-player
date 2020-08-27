<template>
  <div style="" class="">
<!--    <div class="accordion-panel">-->
<!--      <button id="songs-button" type="button" class="btn accordion" data-toggle="collapse" data-target="#songs">-->
<!--        <div class="right-icon"><div class="line1"></div><div class="line2"></div></div>-->
<!--        Songs-->
<!--      </button>-->
<!--      <div id="songs" class="collapse">-->
<!--        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="accordion-panel">-->
<!--      <button id="albums-button" type="button" class="btn accordion" data-toggle="collapse" data-target="#albums">-->
<!--        <div class="right-icon"><div class="line1"></div><div class="line2"></div></div>-->
<!--        Albums</button>-->
<!--      <div id="albums" class="collapse">-->
<!--        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="accordion-panel">-->
<!--      <button id="playlists-button" type="button" class="btn accordion" data-toggle="collapse" data-target="#playlists">-->
<!--        <div class="right-icon"><div class="line1"></div><div class="line2"></div></div>-->
<!--        Playlists</button>-->
<!--      <div id="playlists" class="collapse">-->
<!--        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>-->
<!--      </div>-->
<!--    </div>-->
    <div class="accordion-panel">
      <button id="songs-button" class="btn accordion">
        <div class="right-icon"><div class="line1"></div><div class="line2"></div></div>
        Songs
      </button>
      <div id="songs" class="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>

    <div class="accordion-panel">
      <button id="albums-button" class="btn accordion">
        <div class="right-icon"><div class="line1"></div><div class="line2"></div></div>
        Albums</button>
      <div id="albums" class="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>

    <div class="accordion-panel">
      <button id="playlists-button" class="btn accordion">
        <div class="right-icon"><div class="line1"></div><div class="line2"></div></div>
        Playlists</button>
      <div id="playlists" class="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .accordion {
    background-color: #252525;
    color: #5bc0de;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: all .4s;
    border-radius: 0;
    box-shadow: 0 0 0 0 #5bc0de inset;

  }

  .active, .accordion:hover {
    background-color: #232323;
    color: #5bc0de;
    transition: all .4s;
  }

  .accordion:focus{
    border: none;
    outline: none;
    box-shadow: 0 0 0px 1px #5bc0de inset;
    transition: all .4s;
  }
  .panel {
    padding: 0 18px;
    display: none;
    background-color: white;
    overflow: hidden;
  }

  .right-icon {
    height: 12px;
    width: 12px;
    position: relative;
    float: right;
    justify-content: center;
  }
  .right-icon .line1{
    position: absolute;
    left: 5px;
    background-color: #5bc0de;
    height: 12px;
    width: 2px;
    transition: all .5s;

  }
  .right-icon .line2{
    position: absolute;
    left: 5px;
    background-color: #5bc0de;
    height: 12px;
    width: 2px;
    rotation-point: 6px 6px;
    transform: rotate(90deg);
    transition: all .5s;
  }

  .accordion:focus .right-icon .line2{
    transform: rotate(135deg);
    transition: all .5s;
  }
  .accordion:focus .right-icon .line1{
    transform: rotate(45deg);
    transition: all .5s;
  }
  .accordion ~ div{
    opacity: 0;
    height: 0;
    /*display: none;*/
    transition: all .5s;
    font-size: 0;

  }
  .accordion:focus ~ div{
    content: "";
    height: auto;
    opacity: 1;
    font-size: 15px;
    /*display: block;*/
    transition: all .5s;
  }

</style>
