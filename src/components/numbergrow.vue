<template>
    <span ref="numberGrow" :data-time="time" class="number-grow" :data-value="value">{{value}}</span>
</template>

<script>
    export default {
      props:{
        time:{type:Number,default:2},
        value:{type:Number,default:10},
      },
      methods:{
        numberGrow(ele){
          let _this = this;
          let step = (_this.value*10)/(_this.time*1000);
          let start = 0;
          let t = setInterval(function(){
            start  += step;
            if(start>_this.value){
              clearInterval(t);
              start = _this.value;
              t=null;
            }
            _this.$el.innerHTML = parseInt(start);
          },10)
        },
        handleClick:function(){
          let scrollTop = window.pageYOffset||document.documentElement.scrollTop ||document.body.scrollTop;
          if(scrollTop>200&&scrollTop<300){
            this.numberGrow(this.$refs.numberGrow)
          }
        }
      },
      mounted() {
        window.addEventListener('scroll',this.handleClick)
      }
    }
</script>

<style scoped>

</style>
