<template>
  <div id="app">
<!--    <button @click="changeColor('blue')" >blue</button>-->
<!--    <button @click="changeColor('red')" >red</button>-->
<!--    <button @click="changeColor('yellow')" >yellow</button>-->
<!--    <button @click="changeColor('green')" >green</button>-->
<!--    <button @click="changeColor('purple')" >purple</button>-->


    <div id="north"><app-header @colorChanged="changeColor($event)" :color="currentColor"></app-header></div >
<!--    <div class="side col-sm-3" id="east"><app-right-panel></app-right-panel></div>-->
<!--    <div class="side col-sm-3" id="west"><app-left-panel></app-left-panel></div>-->
<!--    <div id="center"><app-playlist-page></app-playlist-page></div>-->
<!--    <div id="center"><app-center></app-center></div>-->


    <div class="middle d-flex">
      <div class="side " id="west"><app-left-panel
        :page="currentPage"
        :color="this.currentColor"></app-left-panel></div>

<!--      <div id="center" class=""><app-playlist-page :color="this.currentColor"></app-playlist-page></div>-->
      <div id="center" class="">
        <router-view
          :color="this.currentColor"
          :contactIndex="currentContact"
          @goToChat="changeCurrentContact($event)"></router-view></div>
      <div class="side " id="east"><app-right-panel :color="this.currentColor" @goToChat="changeCurrentContact($event)"></app-right-panel></div>
    </div>
    <div id="south"><app-footer :color="this.currentColor"></app-footer></div>


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
  import {colors} from "./colors";
  import {friends} from "./friends";

  export default {
    components:{
      appHeader: Header,
      appFooter: Footer,
      appRightPanel: RightPanel,
      appLeftPanel: LeftPanel,
      appCenter: Center,
      appPlaylistPage: PlaylistPage,
    },
    name: 'App',
    data(){
      return{
        colors: colors,
        currentColor: colors.red,
        currentPage: '',
        friends: friends,
        currentContact: 0,

      }
    },methods: {
      changeCurrentContact(index){
        this.currentContact = index;
      },
      changeColor(color){
        if (color === 'red'){
          this.currentColor = this.colors.red
        }else if (color === 'blue'){
          this.currentColor = this.colors.blue
        }else if (color === 'yellow'){
          this.currentColor = this.colors.yellow
        }else if (color === 'green'){
          this.currentColor = this.colors.green
        }else if (color === 'purple'){
          this.currentColor = this.colors.purple
        }
        // alert(color + ' ' + this.currentColor)
      }
    }
  }
</script>

<style>

  .middle{
    height: calc(100vh - 70px);
    padding: 60px 0 100px 0;
    width: 100%;
    /*background-color: red;*/
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
    /*font-family: 'Mako'*/
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
    /*box-shadow: 0 0 20px 0 #00000052 ;*/
  }
  #center {
    /*height: calc(100vh - 130px);*/
    /*height: 80vh;*/
    background-color: #181818;
    height: calc(100vh - 60px);
    overflow: auto;
    width: 60%;
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
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    transition: .5s;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: #252525;
    transition: .5s;
    /*box-shadow: inset 0 0 5px grey;*/
    /*border-radius: 10px;*/
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #333333;
    transition: .5s;
    /*border-radius: 10px;*/
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #353535;
    transition: .5s;
  }
</style>
