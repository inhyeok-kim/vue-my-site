<template>
  
  <Header/>

  <main>
    <router-view></router-view>
  </main>

  <footer>

    <ul class="contact-list">
      <li>
        Name : Kim Inheyok
      </li>
      <li>
        Email : inheyok.kim@icloud.com
      </li>
      <li>
        Address : Daejeon Seo-gu
      </li>
    </ul>

    <ul class="site-list">
      <li>
        <a href="https://github.com/dlsgur2323?tab=repositories">GitHub</a>
      </li>
    </ul>

  </footer>

</template>

<script>
import Header from '@/components/main/header.vue';
export default {
  name: 'App',
  components: {
    Header : Header,
  },
}
</script>

<style>
  @media screen and (min-width :451px) {
    #app {
      min-width: 1280px;
    }
    header.desktop{
      position: fixed;
      width: 100%;
      background-color: white;
      top: 0px;
      display: flex;
      align-items: center;
      height: 100px;
      box-sizing: border-box;
      border-bottom: 1px solid var(--ih-light-grey);
    }
    header.mobile{
      display: none;
    }
    
    main{
      margin-top:100px;
      min-height: calc(100vh - 100px - 100px);
      box-sizing: border-box;
    }

    footer{
        height: 100px;
        box-sizing: border-box;
        border-top: 1px solid var(--ih-light-grey);
    }
    .only-mob {
      display: none !important;
    }
  } 
  /* 데스크탑 레이아웃 */

  /* 모바일 레이아웃 */
  @media screen and (max-width :450px) {
    #app{
      width: 100vw;
    }
    header.mobile{
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid var(--ih-grey);
        top: 0px;
        position: fixed;
        background-color: white;
    }
    header.desktop{
      display: none;
    }

    main{
      margin-top: 80.88px;
      box-sizing: border-box;
    }

    footer{
      display: none;
    }
    .only-desk {
      display: none  !important;
    }
  }
  /* 모바일 레이아웃 */

  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  li{
    list-style: none;
  }

  a {
    text-decoration: none;
    color : black;
  }

  a:visited {
    text-decoration: none;
    color : black;
  }
</style>
