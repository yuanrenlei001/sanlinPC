<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
    provide () {

        return {

            reload: this.reload

        }

    },
    data(){

        return{

            isRouterAlive: true

        }

    },

    methods:{

        //重载

        reload () {

            this.isRouterAlive = false

            this.$nextTick(function () {

                this.isRouterAlive = true

            });

        }

    }
}
</script>

<style>
  *{
    margin:0;padding:0;  outline: 0;  vertical-align: baseline;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  html,body{overflow: hidden;}
  body {margin: 0;padding: 0;}
  html ,body, #app {width:100%;height:100%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  a, a:link, a:visited{
    text-decoration:none;
  }
  ul {

    list-style:none;

  }
</style>
