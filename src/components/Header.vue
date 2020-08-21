<template>
  <div class="header">
    <div class="search">
      <button class="btn" id="search-button">
        <i class="fa fa-search" style="color: white; text-align: left"></i>
      </button>
      <input type="text" id="search-area">

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    left: 30px;
    top: 15px;
    width: 0;
    border-radius: 15px;
    transition: all .5s;


  }
  .search:hover #search-area {
    width: 100px;
    left: 15px;
    transition: all .5s ease-in;
    /*transition: width .5s;*/
  }
  .search #search-button {
    position: absolute;
    left: 15px;
    top: 15px;
    font-size: 10px;
    text-align: center;
    background-color: #5bc0de;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    z-index: 6;
    transition: all .5s;

  }
  .search:hover #search-button {
    position: absolute;
    left: 85px;
    height: 28px;
    width: 28px;
    margin: 1px;
    /*transition: all .5s;*/
    transition: all .485s ease-in-out;
    transition-delay:  .15s;


  }
</style>
