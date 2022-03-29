<template>
  <div class="section-recent">
    <img src="" alt="">
    <div style="padding:30px">
      <h1 style="color:white">문구문구문구</h1>
      <h3 style="color:white">문구문구문구</h3>
    </div>
  </div>

  <div class="section-blog list-section">
    <h2>
      Blog
    </h2>
    <div class="only-desk" style="display:inline-block; width:20%; text-align:right;">
      <a class="btn-more">
        더보기
      </a>
    </div>
    <ul class="card-list" style="height:300px;">
      <li class="card-item wt-4">
        <div class="card-5" style="background:grey;">
          <img src="" alt="">
        </div>
        <div class="card-1">
          <h4>post 1</h4>
        </div>
      </li>
      <li class="card-item wt-4">
        <div class="card-5" style="background:grey;">
          <img src="" alt="">
        </div>
        <div class="card-1">
          <h4>post 1</h4>
        </div>
      </li>
      <li class="card-item wt-4">
        <div class="card-5" style="background:grey;">
          <img src="" alt="">
        </div>
        <div class="card-1">
          <h4>post 1</h4>
        </div>
      </li>
    </ul>
    <div class="only-mob" style="text-align:center;margin-bottom:20px">
      <a class="btn-more">
        더보기
      </a>
    </div>
  </div>
  <div class="section-functions list-section">
    <h2>
      Functions
    </h2>
    <div class="only-desk" style="display:inline-block; width:20%; text-align:right;">
      <a class="btn-more">
        더보기
      </a>
    </div>
    <ul class="card-list" style="height:300px;">
      <li class="card-item wt-4">
        <div class="card-5" style="background:grey;">
          <img src="" alt="">
        </div>
        <div class="card-1">
          <h4>function 1</h4>
        </div>
      </li>
      <li class="card-item wt-4">
        <div class="card-5" style="background:grey;">
          <img src="" alt="">
        </div>
        <div class="card-1">
          <h4>function 1</h4>
        </div>
      </li>
      <li class="card-item wt-4">
        <div class="card-5" style="background:grey;">
          <img src="" alt="">
        </div>
        <div class="card-1">
          <h4>function 1</h4>
        </div>
      </li>
    </ul>
    <div class="only-mob" style="text-align:center;margin-bottom:20px">
      <a class="btn-more">
        더보기
      </a>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'summary',
  }
</script>

<style scoped>
  @media screen and (min-width :451px) {  /* 데스크탑 */
    .section-recent {
      width: 100%;
      height: 500px;
      background-color: rgb(27, 27, 27);
      margin-bottom : 50px;
    }
    .section-blog{
      height: calc(100vh - 100px);
      display: flex;
      flex-wrap: wrap;
      align-content: center;
    }
    .section-functions{
      height: calc(100vh - 100px);
      background-color: var(--ih-light-grey);
      display: flex;
      flex-wrap: wrap;
      align-content: center;
    }

    .list-section{
      width : 90%;
      padding : 0px 5%;
    }
    .list-section h2{
      width : 80%;
      display: inline-block;
    }
    .list-section .card-item h4{
      margin : 0px;
    }
    .btn-more:hover{
      color : rgb(56, 56, 56);
    }
    .btn-more{
      text-align: right;
      color : rgb(167, 167, 167);
      cursor: pointer;
      margin-right: 10px;
    }
    .btn-more:hover::after{
      border-top: 1px solid rgb(56, 56, 56);
      border-right: 1px solid rgb(56, 56, 56);
    }
    .btn-more::after{
      content: ' ';
      border-top: 1px solid rgb(167, 167, 167);
      border-right: 1px solid rgb(167, 167, 167);
      width: 7px;
      height: 7px;
      display: inline-block;
      transform: rotateZ(45deg);
      margin-bottom: 2px;
    }
  }
  /* 데스크탑 끝 */

  @media screen and (max-width :450px) { /* 모바일 */
    .section-recent {
      widows: 100%;
      height: 90vh;
      background-color: rgb(27, 27, 27);
    }
    .list-section > h2{
      text-align: center;
    }
    .list-section .card-list{
      flex-wrap: wrap;
      overflow: hidden;
      height: 350px;
    }
    .list-section .card-item{
      width: 100%;
      margin: 0px 20px;
      height: 50%;
    }
    .list-section .card-item h4{
      margin : 0px;
    }
    .btn-more{
      text-align: right;
      color : rgb(167, 167, 167);
      cursor: pointer;
      margin-right: 10px;
    }
    .btn-more::after{
      content: ' ';
      border-top: 1px solid rgb(167, 167, 167);
      border-right: 1px solid rgb(167, 167, 167);
      width: 7px;
      height: 7px;
      display: inline-block;
      transform: rotateZ(45deg);
      margin-bottom: 2px;
    }
  }
  /* 모바일 끝 */
</style>
