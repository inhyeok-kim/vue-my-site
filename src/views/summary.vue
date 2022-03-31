<template>

  <div class="section">
    <Posts />
  </div>
  <div class="section">
    <Functions />
  </div>

  <div class="section">
    <Services />
  </div>



</template>

<script>
  import Posts from '@/components/summary/Posts';
  import Functions from '@/components/summary/Functions';
  import Services from '@/components/summary/Services';

  export default {
    name: 'summary',
    components : {
      Functions: Functions,
      Posts: Posts,
      Services: Services,
    },
    data : function () {
        return {
            mouseDown : false,
            mouseX : 0,
        }
    },
  }
</script>

<style scoped>
    .section-recent {
      width: 100%;
      height: 800px;
      background-color: rgb(27, 27, 27);
    }

    .section:nth-of-type(even){
      background-color: var(--ih-light-grey);
    }
    .section{
      width: 100%;
      height : 800px;
      display: flex;
      justify-content: center;
      padding : 5%;
    }

  /* 데스크탑 끝 */

</style>
