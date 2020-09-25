<template>
  <div class="body">
    <div class="container header d-flex" :style="{color: color}">
      <h2 :style="{color: color}"><i style="font-size: 30px" class="material-icons">build</i> Preferences</h2>
    </div>
    <div class="center">
      <div class="container row">
        <div class="col-sm-6" style="border-right: solid #303030 1px" >
          <h5>personal settings</h5>
          <p :style="{color: color}">Name: </p>
          <input type="text" placeholder="Enter your name">
          <p :style="{color: color}">Picture: </p>
          <div class="row">
            <div style="margin-left: 20px" class="profile-pic">
            </div>

<!--            <div class="" style="margin: 0 auto; align-content: center; justify-content: center;text-align: center">-->
            <div class="col" style="margin: auto auto; align-content: center; justify-content: center;text-align: center">
              <button style="width: 80%; margin-bottom: 5px" :style="{backgroundColor: color}" class=" btn btn-dark btn-sm"><i style="font-size: 13px" class="material-icons">add</i> Add picture</button>
              <button style="width: 80%" :style="{backgroundColor: color}" class=" btn btn-dark btn-sm disabled"><i style="font-size: 13px" class="material-icons">delete</i> Remove picture</button>
            </div>
          </div>

        </div>
        <hr :style="{backgroundColor: color}">
        <div class="col-sm-6">
          <h5>security settings</h5>
          <p :style="{color: color}">Password: </p>
          <input type="password" placeholder="Enter your old password" >
          <input type="password" placeholder="Enter your new password" >
          <input type="password" placeholder="Enter your new password again" >
          <button :style="{backgroundColor: color}" class="btn btn-block btn-dark" style="margin-bottom: 50px">submit</button>
        </div>

      </div>

      <hr style="height: 1px; background-color: #303030; width: 95%">


    </div>
  </div>
</template>

<script>
  export default {
    name: "Albums",
    props:['color'],
  }
</script>

<style scoped>
  .body {
    background-color: #202020;
    padding: 0px 10px 60px 10px;
    position: relative;
    height: 100%;
  }
  .header{
    position: fixed;
    background-image: linear-gradient(to bottom,#202020,#202020, transparent);
    padding-top: 10px;
    z-index: 50;
    text-shadow: #000 0px 0px 20px;


  }
  h2,h3,h4,h5,p{
    color: #FFF;
  }

  button{
    box-shadow: 0 0 100px 0 #00000055 inset;
  }
  button:focus{
    border: none;
    outline: none ;
    box-shadow: 0 0 100px 0 #00000055 inset;
  }
  button:hover{
    box-shadow: 0 0 100px 0 #00000077 inset;
  }

  input{
    background-color: #272727;
    margin: 5px 0;
  }
  input:hover{
    background-color: #303030;
  }
  hr{
    background-color: #fff;
  }

  h1  {
    /*font-weight: bold;*/
    cursor: default;
  }
  .center {
    padding-top: 60px;

  }
  .total{
    color: #777777;
    cursor: default;
    margin: auto 5px;
    transition: .2s;
  }
  .total:hover{
    color: white;
    transition: .2s;
  }


  .profile-pic{
    margin: 0 auto;
    padding-top: 16px;
    height: 100px;
    width:100px;
    border-radius: 50%;
    background-color: white;
    transition: .5s;
    text-align: center;
    vertical-align: center;
    justify-content: center;
  }

  .profile-pic:hover{
    box-shadow: 0 0 100px 0 #00000055 inset;
  }
  .profile-pic p{
    margin: 50px auto;
    width: 50px;
    cursor: pointer;
    font-size: 12px;
    color: white;
    opacity: .5;
    transition: .3s;
  }
  .profile-pic:hover p{
    opacity: 1;
    transition: .3s;

  }
</style>
