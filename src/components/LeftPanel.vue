<template>
  <div style="overflow: auto;">
    <button class="btn accordion">Section 1</button>
    <div class="panel">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <button class="btn accordion">Section 2</button>
    <div class="panel">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <button class="btn accordion">Section 3</button>
    <div class="panel">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
    box-shadow: 0 0 0px 0px #5bc0de inset;

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
</style>
