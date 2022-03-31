<template>
    <div class="posts-container">
        <h1>FUNCTIONS</h1>
        <div class="section-album" >
        <div class="list" v-on:mousedown="listMouseDown" @mouseup="listMouseUp">
            <div class="album" :key="n" v-for="n in 6">
            </div>
        </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'posts',
        methods : {
            listMouseDown : function(event){
                const list = event.currentTarget;
                this.mouseDown = true;
                list.addEventListener('mousemove', (e)=>{this.listMouseMove(e,list) });
                list.addEventListener('mouseleave', this.listMouseLeave);
                this.mouseX = event.x;
            },
            listMouseUp : function(){
                this.mouseDown = false;
            },
            listMouseLeave : function(){
                this.mouseDown = false;
            },
            listMouseMove : function(e,list){
                if(this.mouseDown === true){
                    const gap = this.mouseX - e.x;
                    this.mouseX = e.x;
                    list.scrollTo({left : list.scrollLeft + gap});
                }
            }
        },
    }
</script>

<style scoped>
    h1 {
        margin-top : 0px;
        cursor: pointer;
    }
    h1::after {
        content: '';
        position: absolute;
        border-top: 1px solid black;
        border-right: 1px solid black;
        transform: rotate(45deg) translate(9px ,6px);
        width: 0.8rem;
        height: 0.8rem;
    }
    .posts-container {
        display: flex;
        align-content: center;
        height : 100%;
        flex-wrap: wrap;
        width:100%;
        max-width : 1280px;
    }
    .section-album{
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        width : 100%;
        height : 50%;
    }
    .list{
        overflow-x: scroll;
        overflow-y : hidden;
        white-space: nowrap;
        height: 100%;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    .list::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    @media screen and (min-width :1080px) { /* 카드 4개 유지 */
        .album{
            width: 24%;
            border: 1px solid black;
            display: inline-block;
            height: 100%;
        }
    }
    @media screen and (max-width :1079px) and (min-width :835px) {  /* 카드 3개 유지 */
        .album{
            width: 32%;
            border: 1px solid black;
            display: inline-block;
            height: 100%;
        }
    }
    @media screen and (max-width :834px) and (min-width :481px) {  /* 카드 2개 유지 */
        .album{
            width: 48%;
            border: 1px solid black;
            display: inline-block;
            height: 100%;
        }
    }
    @media screen and (max-width :480px) {  /* 카드 1개 유지 */
        .album{
            width: 95%;
            border: 1px solid black;
            display: inline-block;
            height: 100%;
        }
    }
    /* 데스크탑 끝 */

</style>
