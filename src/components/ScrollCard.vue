<template>
    <div class="section-album" >
      <div class="list" v-on:mousedown="listMouseDown" @mouseup="listMouseUp">
        <div class="album" :key="n" v-for="n in totalCnt" v-bind:style="{width : getWidth}">
          {{n}}
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props : ['totalCnt', 'useScroll','cardWidth'],
        data : function(){
            return {
                
            }
        },
        mounted : function(){
            
        },
        name: 'scrollCard',
        methods : {
            listMouseDown : function(event){
                if(!this.useScroll) return;
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
        computed : {
            getWidth : function(){
                if(!this.cardWidth) return '250px';
                return this.cardWidth+'px';
            }
        }
    }
</script>

<style scoped>
    .section-album{
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        width:100%;
        height: 100%;
    }
    .section-album .list{
        overflow-x: scroll;
        white-space: nowrap;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        height: 100%;
    }
    
    .section-album .list::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }

    .section-album h1{
        color: white;
    }
    .section-album .list .album{  
        margin-right: 25px;
        height : 100%;
        border : 1px solid black;
        display: inline-block;
        box-sizing: border-box;
    }
    .section-album .list .album img{  
        width:100%;
        border-radius:5px;
        object-fit:cover;
        cursor: pointer;
    }

    .section-album .list .album .title{  
        color:white; 
        margin:0px;
        font-size: 1rem;
    }

    .section-album .list .album .artist{  
        color:lightgrey; 
        margin:0px;
        font-size: 0.9rem;
    }
    .section-album .list .album p a{  
        cursor: pointer;
    }

</style>