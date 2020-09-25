<template>
  <div class="header" style="position: relative;">
    <div class="search">
      <button class="btn" id="search-button" :style="{backgroundColor: color}">
        <i class="fa fa-search" style="color: white; text-align: left;"></i>
        <span></span>
      </button>
      <input type="search" id="search-area" style="outline: none">
      </input>
    </div>


    <div class="logo">
      <h1 :style="{color: color}">logo</h1>
    </div>


    <div class="btn-group" style="position: absolute;right: 10px;top: 10px;">
      <button class="setting-btn btn btn-sm dropdown-toggle"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i style="font-size: 20px " class="material-icons">settings</i>
      </button>
      <div class="dropdown-menu menu">
        <button class="dropdown-item" href="#">
          <div class="color-palette-demo">
            <div class="color-palette-text ">
              <i style="font-size: 15px " class="material-icons">color_lens</i> Change color
            </div>
            <div class="color-palette">
              <button class="btn color-button" :style="{backgroundColor: colors.blue}" @click="changeColor('blue')" ></button>
              <button class="btn color-button" :style="{backgroundColor: colors.red}" @click="changeColor('red')" ></button>
              <button class="btn color-button" :style="{backgroundColor: colors.yellow}" @click="changeColor('yellow')" ></button>
              <button class="btn color-button" :style="{backgroundColor: colors.green}" @click="changeColor('green')" ></button>
              <button class="btn color-button" :style="{backgroundColor: colors.purple}" @click="changeColor('purple')" ></button>
            </div>
          </div>
        </button>

<!--        <a type="button" class="dropdown-item" data-toggle="modal" data-target="#exampleModal">-->
<!--          <i style="font-size: 15px " class="material-icons">settings</i> Preferences-->
<!--        </a>-->
<!--        &lt;!&ndash; Modal &ndash;&gt;-->
<!--        <div class="modal fade" id="exampleModal" tabindex="-51" aria-labelledby="exampleModalLabel" aria-hidden="true">-->
<!--          <div class="modal-dialog">-->
<!--            <div class="modal-content">-->
<!--              <div class="modal-header">-->
<!--                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>-->
<!--                <button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
<!--                  <span aria-hidden="true">&times;</span>-->
<!--                </button>-->
<!--              </div>-->
<!--              <div class="modal-body">-->
<!--                ...-->
<!--              </div>-->
<!--              <div class="modal-footer">-->
<!--                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
<!--                <button type="button" class="btn btn-primary">Save changes</button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

        <router-link to="/preferences">
          <button class="dropdown-item"><i style="font-size: 15px " class="material-icons">build</i> Preferences</button>
        </router-link>

        <button class="dropdown-item" href="#">Something else here</button>
<!--        <a class="dropdown-item" href="#">Separated link</a>-->
      </div>
    </div>

<!--    <div class="color-palette-demo">-->
<!--      <div class="color-palette-text ">-->
<!--        change color-->
<!--      </div>-->
<!--      <div class="color-palette">-->
<!--        <button class="btn color-button" :style="{backgroundColor: colors.blue}" @click="changeColor('blue')" ></button>-->
<!--        <button class="btn color-button" :style="{backgroundColor: colors.red}" @click="changeColor('red')" ></button>-->
<!--        <button class="btn color-button" :style="{backgroundColor: colors.yellow}" @click="changeColor('yellow')" ></button>-->
<!--        <button class="btn color-button" :style="{backgroundColor: colors.green}" @click="changeColor('green')" ></button>-->
<!--        <button class="btn color-button" :style="{backgroundColor: colors.purple}" @click="changeColor('purple')" ></button>-->
<!--      </div>-->
<!--    </div>-->


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
  .menu{
    background-color: #202020;
    box-shadow: 0 0 10px 0 #00000077;


  }
  .menu button{
    color: #777777;
    background-color: #202020;
  }
  .menu button:hover{
    color: white;
    background-color: #252525;
  }

  button:focus{
    border: none;
    outline: none;
  }

  .setting-btn{
    color: transparent;
    border: none;
    height: 40px;
    /*position: absolute;*/
    /*right: 10px;*/
    /*top: 10px;*/
    border-radius: 20px;
    box-shadow: none;
    transition: all .5s;
  }
  .setting-btn i{
    transition: all .5s;
    margin-top: 5px;
    color: #777777;
  }
  .setting-btn:hover i{
    transform: rotate(90deg);
    color: white;
    /*right: 15px;*/
    /*top: 15px;*/
    transition: all .5s;
  }


  .color-palette-demo .color-palette-text{
    opacity: 1;
    text-align: left;
    border: solid 1px transparent;
    border-radius: 15px;
    color: #707070;
    height: 30px;
    /*width: 165px;*/
    width: 100%;
    transform: rotateX(0deg);
    /*position: absolute;*/
    /*top: 15px;*/
    /*right: 15px;*/
    transition: all .3s ease-in-out;
  }
  .color-palette-demo .color-palette{
    opacity: 0;
    /*transform: rotateX(90deg);*/
    margin:  auto 0;
    position: absolute;
    top: 30px;
    /*right: 15px;*/
    transition: all .3s ease-in-out;
  }
  .color-palette-demo:hover .color-palette-text{

    /*opacity: 0;*/
    color: white;
    /*transform: rotateX(90deg);*/
    transition: all .3s ease-in-out;
    /*top: 35px;*/
  }
  .color-palette-demo:hover .color-palette{
    opacity: 1;
    top: 35px;
    /*transform: rotateX(0deg);*/
    transition: all .3s ease-in-out;
    /*top: 15px;*/
  }
  .color-palette-demo{
    height: 8px;
    transition: .3s;
    margin-bottom: 25px;
    /*padding-bottom: 10px;*/
  }
  .color-palette-demo:hover{
    height: 40px;
    transition: .3s;

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
  .logo{
    margin: auto auto;
    cursor: default;
    font-family: Brush Script MT, Brush Script Std, cursive;
    text-align: center;
    position: page;
    align-content: center;
    justify-content: center;
  }
  .logo h1{
    font-size: 40px;
    transition: .3s;
  }
  .logo:hover h1{
    font-size: 41px;
    transition: .3s;
  }


  input {
    border: none;
    box-shadow: none;
  }
  .header{
    background-color: #181818;
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
