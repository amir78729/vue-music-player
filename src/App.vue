<template>
  <div id="app">
    <div id="north"><app-header></app-header></div >
    <div class="side col-sm-3" id="east"><app-right-panel></app-right-panel></div>
    <div class="side col-sm-3" id="west"><app-left-panel></app-left-panel></div>
    <div id="center"><app-center></app-center></div>
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

  export default {
    components:{
      Center,
      appHeader: Header,
      appFooter: Footer,
      appRightPanel: RightPanel,
      appLeftPanel: LeftPanel,
      appCenter: Center,
    },
    name: 'App'
  }
</script>

<style>
  :root {

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
    background-color: #333333;
    height: calc(100vh - 130px);
    overflow: auto;
    /*display: flex;*/
    margin: 0;
    padding: 0;
  }
  #east {
    float: right;
    /*display: flex;*/
    /*height: 100%;*/
    margin: 0;
    padding: 0;
  }
  #west {
    float: left;
    width: 250px;
    /*display: flex;*/

    margin: 0;
    padding: 0;

  }
  #center {
    height: calc(100vh - 130px);
  }
  #center:after {
    content: '';
    display: block;
    overflow: auto;
    clear: both;
    height: 0;
  }
  #south {
    width: 100%;
    bottom: 0px;
    /*height: 80px;*/
    background-color: #333333;
  }
  #north{
    width: 100%;
  }
</style>
