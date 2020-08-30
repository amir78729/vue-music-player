<template>
  <div id="app">
    <div id="north"><app-header></app-header></div >
<!--    <div class="side col-sm-3" id="east"><app-right-panel></app-right-panel></div>-->
<!--    <div class="side col-sm-3" id="west"><app-left-panel></app-left-panel></div>-->
<!--    <div id="center"><app-playlist-page></app-playlist-page></div>-->
<!--    <div id="center"><app-center></app-center></div>-->


    <div class="middle d-flex">
      <div class="side " id="west"><app-left-panel></app-left-panel></div>
      <div id="center" class=""><app-playlist-page></app-playlist-page></div>
<!--      <div id="center"><app-center></app-center></div>-->
      <div class="side " id="east"><app-right-panel></app-right-panel></div>
    </div>

    <div id="south"><app-footer></app-footer></div>


<!--    <router-view/>-->
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue"
  import RightPanel from "./components/RightPanel.vue"
  import LeftPanel from "./components/LeftPanel.vue"
  import Center from "./components/Center.vue"
  import PlaylistPage from "./components/PlaylistPage.vue"

  export default {
    components:{
      appHeader: Header,
      appFooter: Footer,
      appRightPanel: RightPanel,
      appLeftPanel: LeftPanel,
      appCenter: Center,
      appPlaylistPage: PlaylistPage,
    },
    name: 'App'
  }
</script>

<style>

  .middle{
    height: calc(100vh - 70px);
    padding: 60px 0 100px 0;
    width: 100%;
    background-color: red;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
    margin-bottom: 70px;
  }
  .middle div{
    /*overflow: auto;*/
  }
  #app {
    min-height: 100%;
    min-width: 100%;
  }
  /*************************************************************************************************************/
  /*div { border : 1px solid black }*/
  /*#north    { margin:0;  padding:0em;  }*/
  /*#south    { margin:0;  padding:0em;  }*/
  /*#east     { margin:0;  padding:0em;  width:6em; height:22em; float:left; margin-right:1.1em }*/
  /*#west     { margin:0;  padding:0em;  width:6em; height:22em; float:right; margin-left:1.1em }*/
  /*#center   { margin:0;  padding:0em;  padding-bottom:0em; }*/
  /*#center:after    { content:' '; clear:both; display:block; height:0; overflow:hidden }*/

  .side {
    background-color: #181818;
    /*height: calc(100vh - 130px);*/
    width: 20%;
    height: calc(100vh - 60px);
    overflow: auto;
    /*display: flex;*/
    margin: 0;
    padding: 0;
  }
  #east {
    /*float: right;*/
    /*display: flex;*/
    /*height: 100%;*/
    margin: 0;
    padding: 0;
    z-index: 51;
    transition: .2s;

  }
  #east:hover {
    transition: .2s;
    box-shadow: 0 0 20px 0 #00000052 ;
  }
  #west {
    /*float: left;*/
    /*width: 250px;*/
    /*display: flex;*/

    margin: 0;
    padding: 0;
    z-index: 50;
    transition: .2s;
  }
  #west:hover {
    transition: .2s;
    box-shadow: 0 0 20px 0 #00000052 ;
  }
  #center {
    /*height: calc(100vh - 130px);*/
    /*height: 80vh;*/
    height: calc(100vh - 60px);
    overflow: auto;
    width: 60%;
  }

  #center:after {
    /*content: '';*/
    /*display: block;*/
    /*overflow: auto;*/
    /*clear: both;*/
    /*height: 0;*/
  }
  #south {
    width: 100%;
    /*height: 80px;*/
    /*background-color: #333333;*/
    position: fixed;
    bottom: 0;
    z-index: 100;
    transition: .2s;

  }
  #south:hover {
    transition: .2s;
    /*box-shadow: 0 0 20px 0 #00000052 ;*/
  }
  #north{
    width: 100%;
    position: fixed;
    z-index: 100;
    transition: .2s;
  }
  #north:hover{
    box-shadow: 0 0 20px 0 #00000052 ;
    transition: .2s;
  }
</style>
