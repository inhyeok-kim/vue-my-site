<template>

  <header class="desktop">

    <h1 class="logo">Inheyok.kim</h1>

    <ul class="menu-list">
        <li class="menu" v-bind:class="menu == 'summary' ? 'on' : ''">
            <a href="/" @click="changeMenu($event,'summary')">
                summary
                <hr>
            </a>
        </li>
        <li class="menu" v-bind:class="menu == 'portfolio' ? 'on' : ''">
            <a href="portfolio" @click="changeMenu($event,'portfolio')">
                portfolio
                <hr>
            </a>
        </li>
        <li class="menu" v-bind:class="menu == 'blog' ? 'on' : ''">
            <a href="blog" @click="changeMenu($event,'blog')">
                blog
                <hr>
            </a>
        </li>
        <li class="menu" v-bind:class="menu == 'about' ? 'on' : ''">
            <a href="about" @click="changeMenu($event,'about')">
                about
                <hr>
            </a>
        </li>
    </ul>

  </header>

  <header class="mobile">

    <h1 class="logo">Inheyok.kim</h1>
    <a href="#" class="menu-btn" @click="clickMenuBtn($event);">
        <i class="icon-menu-btn" ></i>
    </a>

    <ul class="menu-list">
        <li class="menu" v-bind:class="menu == 'summary' ? 'on' : ''" @click="changeMenu($event,'summary')">
            <a href="/">
                summary
            </a>
        </li>
        <li class="menu" v-bind:class="menu == 'portfolio' ? 'on' : ''" @click="changeMenu($event,'portfolio')">
            <a href="portfolio">
                portfolio
            </a>
        </li>
        <li class="menu" v-bind:class="menu == 'blog' ? 'on' : ''" @click="changeMenu($event,'blog')">
            <a href="blog">
                blog
            </a>
        </li>
        <li class="menu" v-bind:class="menu == 'about' ? 'on' : ''" @click="changeMenu($event,'about')">
            <a href="about">
                about
            </a>
        </li>
    </ul>

  </header>

</template>

<script>

export default {
  name: 'header',
  data : function(){
        return {
            menu : 'summary',
        }
  },
  methods : {
    changeMenu(event,menu){
        event.preventDefault();
        this.menu = menu;
        this.mobileMenuClose();
        if(menu == 'summary') menu = "/";
        this.$router.push(menu);
    },
    clickMenuBtn(e){
        const btn = e.currentTarget;
        const icon = btn.querySelector('.icon-menu-btn');
        if(icon.classList.contains('close')){
            this.mobileMenuClose();
        }else {
            this.mobileMenuOpen();
        } 

    },
    mobileMenuOpen(){
        document.querySelector('.mobile .icon-menu-btn').classList.add('close');  
        document.querySelector('.mobile .menu-list').classList.add('open');
    },
    mobileMenuClose(){
        console.log('hi');
        document.querySelector('.mobile .icon-menu-btn').classList.remove('close')
        document.querySelector('.mobile .menu-list').classList.remove('open');
    }
  },
}
</script>

<style scoped>
    /* 데스크탑 레이아웃 */
    header.desktop h1 {
        margin: 0px;
        width: 20%;
        text-align: center;
        color: var(--ih-black);
    }

    header.desktop ul.menu-list{
        display: flex;
        width: 100%;
        position: absolute;
        justify-content: center;
        min-width: 1280px;
        padding: 0px;
    }

    header.desktop li.menu{
        margin: 0px 30px;
    }

    header.desktop li.menu a{
        font-size: 1.2rem;
        padding: 5px 0px;
        color: var(--ih-grey);
    }

    header.desktop li.menu a hr{
        width: 0px;
        visibility: hidden;
        color: var(--ih-black);
        transition: width 0.5s;
        margin-left: 0px;
    }

    header.desktop li.menu a:hover, header.desktop li.menu.on a{
        color: var(--ih-black);
    }
    header.desktop li.menu a:hover hr, header.desktop li.menu.on hr{
        width: 100%;
        visibility: visible;
    }

    /* 데스크탑 레이아웃 */

    /* 모바일 레이아웃 */

    header.mobile h1{
        text-align: center;
        background: white;
        margin : 0px;
        padding : 21.94px 0px;
    }
    a.menu-btn{
        right: 20px;
        top : 20px;
        width: 30px;
        height: 40px;
        position: absolute;
    }

    header.mobile ul.menu-list.open{
        top : 100%;
    }
    header.mobile ul.menu-list{
        transition: top 0.5s;
        top: -200%;
        width: 100%;
        position: absolute;
        justify-content: center;
        padding: 0px;
        margin: 0px;
        background-color: white;
        z-index: -1;
    }
    header.mobile ul.menu-list li.on{
        background: var(--ih-light-grey);
        font-weight: bold;
    }
    header.mobile ul.menu-list li{
        text-align: center;
        padding : 15px 0px 15px 0px;
        border-bottom: 1px solid var(--ih-grey);
    }
    /* 모바일 레이아웃 */
</style>
