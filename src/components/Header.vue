<template>
  <div class="header">
    <div class="search">
      <button class="btn" id="search-button">
        <i class="fa fa-search" style="color: white; text-align: left;"></i>
        <span></span>
      </button>
      <input type="text" id="search-area" style="outline: none">

      </input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  input {
    border: none;
    box-shadow: none;
  }
  .header{
    background-color: #333333;
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
    background-color: #5bc0de;
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
