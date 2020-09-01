<template>
  <div class="header">
    <div class="search">
      <button class="btn" id="search-button" :style="{backgroundColor: color}">
        <i class="fa fa-search" style="color: white; text-align: left;"></i>
        <span></span>
      </button>
      <input type="text" id="search-area" style="outline: none">
      </input>
    </div>
    <div class="color-palette-demo">
      <div class="color-palette-text ">
        change color
      </div>
      <div class="color-palette">
        <button class="btn color-button" :style="{backgroundColor: colors.blue}" @click="changeColor('blue')" ></button>
        <button class="btn color-button" :style="{backgroundColor: colors.red}" @click="changeColor('red')" ></button>
        <button class="btn color-button" :style="{backgroundColor: colors.yellow}" @click="changeColor('yellow')" ></button>
        <button class="btn color-button" :style="{backgroundColor: colors.green}" @click="changeColor('green')" ></button>
        <button class="btn color-button" :style="{backgroundColor: colors.purple}" @click="changeColor('purple')" ></button>
      </div>
    </div>
  </div>
</template>

<script>
  import { colors } from "../colors";

  export default {
    name: 'Header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        colors: colors,
        style:{
          backgroundColor: this.color,
        }
      }
    },
    props:['color'],
    methods: {
      changeColor(color){
        this.$emit("colorChanged", color);
      }
    }
}
</script>

<style scoped>
  .color-palette-demo .color-palette-text{
    opacity: 1;
    text-align: center;
    border: solid 1px white;
    border-radius: 15px;
    color: white;
    height: 30px;
    width: 165px;
    transform: rotateX(0deg);
    position: absolute;
    top: 15px;
    right: 15px;
    transition: all .5s ease-in-out;
  }
  .color-palette-demo .color-palette{
    opacity: 0;
    transform: rotateX(90deg);
    position: absolute;
    top: 0px;
    right: 15px;
    transition: all .5s ease-in-out;
  }
  .color-palette-demo:hover .color-palette-text{
    opacity: 0;
    transform: rotateX(90deg);
    transition: all .5s ease-in-out;
    top: 35px;
  }
  .color-palette-demo:hover .color-palette{
    opacity: 1;
    transform: rotateX(0deg);
    transition: all .5s ease-in-out;
    top: 15px;
  }

  .color-palette .color-button{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    outline: none;
    box-shadow: none;
    border: none;
  }
  .color-palette .color-button:hover{
    box-shadow: 0 0 100px 10px #00000088 inset;

  }
  input {
    border: none;
    box-shadow: none;
  }
  .header{
    background-color: #222222;
    height: 60px;
  }
  .search{
    position: relative;

    /*transition: all .5s;*/
  }
  .search #search-area {
    position: absolute;
    background-color: #ffffff;
    height: 30px;
    left: 15px;
    top: 15px;
    width: 30px;
    border-radius: 15px;
    transition: all .5s;
    color: white;
  }
  .search:hover #search-area {
    width: 225px;
    left: 15px;
    transition: all .5s ease-in-out;
    color: black;
  }
  .search #search-button {
    content: 'hihih';
    position: absolute;
    left: 17px;
    top: 17px;
    align-content: center;
    justify-content: center;
    /*font-size: 10px;*/
    text-align: center;
    /*background-color: #5bc0de;*/
    width: 26px;
    height: 26px;
    border-radius: 15px;
    z-index: 6;
    transition: all .5s;
    box-shadow: 0 0 100px 0 #00000022 inset;

  }
  .search #search-button span:after{
    position: absolute;
    top: 12px;
    left: 0px;
    color: white;
    content: "search";
    font-size: 0;
    opacity: 0;
    transition: all .5s ease-in-out;
  }
  .search:hover #search-button span:after{
    top: 1px;
    left: 30px;
    content: "search";
    font-size: 15px;
    opacity: 1;
    transition: all .5s ease-in-out;
  }
  .search #search-button i{
    position: absolute;
    top: 8px;
    left: 8px;
    color: white;
    font-size: 10px;
    opacity: 1;
    transition: all .5s ease-in-out;
  }
  .search:hover #search-button i{
    font-size: 0;
    opacity: 0;
    transition: all .5s ease-in-out;
  }


  .search:hover #search-button {
    position: absolute;
    width: 100px;
    left: 137px;
    transition: all .5s ease-in-out;
  }

  .search #search-button:hover {
    box-shadow: none;
  }
</style>
