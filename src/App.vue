<template>
  <div id="app">
    <div id="north"><app-header></app-header></div >
    <div class="col-sm-3" id="east"><app-right-panel></app-right-panel></div>
    <div class="col-sm-3" id="west"><app-left-panel></app-left-panel></div>
    <div id="center">hi</div>
    <div id="south"><app-footer></app-footer></div>

 
<!--    <router-view/>-->
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue"
  import RightPanel from "./components/RightPanel.vue"
  import LeftPanel from "./components/LeftPanel.vue"

  export default {
    components:{
      appHeader: Header,
      appFooter: Footer,
      appRightPanel: RightPanel,
      appLeftPanel: LeftPanel,
    },
    name: 'App'
  }
</script>

<style>
  #app {
    height: 100%;
    width: 100%;

  }
  /*************************************************************************************************************/
  div { border : 1px solid black }
  /*#north    { margin:0;  padding:0em;  }*/
  /*#south    { margin:0;  padding:0em;  }*/
  /*#east     { margin:0;  padding:0em;  width:6em; height:22em; float:left; margin-right:1.1em }*/
  /*#west     { margin:0;  padding:0em;  width:6em; height:22em; float:right; margin-left:1.1em }*/
  /*#center   { margin:0;  padding:0em;  padding-bottom:0em; }*/
  /*#center:after    { content:' '; clear:both; display:block; height:0; overflow:hidden }*/
  #east {
    float: right;
    margin: 0;
    padding: 0;
  }
  #west {
    float: left;
    margin: 0;
    padding: 0;
  }
  #center:after {
    content: '';
    display: block;
    overflow: hidden;
    clear: both;
    height: 0;
  }
  #south {
    width: 100%;
    bottom: 0px;
  }
  #north{
    width: 100%;
  }
</style>
