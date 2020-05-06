<template>
  <div class="content">

    <div class="top">
      <el-row  >
        <el-col :span="6" class="" style="padding: 0;">
          <router-link class="windows1 menu active" to="/">乡村指数</router-link>
          <router-link class="windows2 menu" to="/sales">销售数据</router-link>
          <router-link class="windows3 menu" to="/">销售数据</router-link>
        </el-col>
        <el-col :span="3" class="times"><img src="@/assets/index/time.png" alt=""></el-col>
        <el-col :span="6" style="opacity: 0;">1</el-col>
        <el-col :span="3" class="tianqi"><img src="@/assets/index/tianqi.png" alt=""></el-col>
        <el-col :span="6" class="cols windows" style="padding: 0;">
          <router-link class="windows6 menu" to="/">产品数据</router-link>
          <router-link class="windows5 menu" to="/">质量管理</router-link>
          <router-link class="windows4 menu" to="/">质量管理</router-link>
        </el-col>
      </el-row>
    </div>
    <div class="main">
      <div class="bodys left" style="width:27.3%;">
        <div style="height:auto;margin-bottom: 23px;" ref="element">
          <img src="@/assets/index/leftTop.png" alt="" class="leftTopImg">
          <div class="leftText"><div id="myChart" :style="{width: '100%', height: '450px'}"></div></div>
        </div>
        <div style="height:auto;"><img src="@/assets/index/leftTop.png" alt=""></div>
      </div>
      <div class="bodys" style="width:45.4%;">
        <div id="myChartMain" :style="{width: '500px', height: '450px'}"></div>
      </div>
      <div class="bodys" style="width:27.3%;">
        <div style="height:auto;margin-bottom: 23px;position: relative;" ref="element">
          <img src="@/assets/index/rightTop.png" alt="" class="leftTopImg">
          <div class="rightTop">
            <div class="rightTop01">
              <div class="rightTop01-img">
                <img src="@/assets/index/icon-deng.png" alt="" class="dizhuo">
                <img src="@/assets/index/icon-deng-2.png" alt="" class="icon-deng">
              </div>
              <div class="rightTop01-text">
                <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>万</div>
                <div class="rightTop01-text02">数字乡村平台投入</div>
              </div>
            </div>
            <img src="@/assets/index/hr.png" class="hr" alt="">
            <div class="rightTop02">
              <div class="rightTop02Left" >
                <div class="rightTop02-img">
                  <img src="@/assets/index/icon-deng.png" alt="" class="dizhuo">
                  <img src="@/assets/index/icon-deng-1.png" alt="" class="icon-deng2">
                </div>
                <div class="rightTop02-text">
                  <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal2' :duration='3000'></countTo>个</div>
                  <div class="rightTop01-text02">垃圾分类</div>
                </div>
              </div>
              <div class="rightTop02Left rightTop02Left0202" >
                <div class="rightTop02-img">
                  <img src="@/assets/index/icon-deng.png" alt="" class="dizhuo">
                  <img src="@/assets/index/icon-deng-3.png" alt="" class="icon-deng2">
                </div>
                <div class="rightTop02-text">
                  <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal3' :duration='3000'></countTo>万</div>
                  <div class="rightTop01-text02">环保投入</div>
                </div>
              </div>
            </div>
            <img src="@/assets/index/hr.png" class="hr" alt="">
            <div class="rightTop02">
              <div class="rightTop02Left " >
                <div class="rightTop02-img">
                  <img src="@/assets/index/icon-deng.png" alt="" class="dizhuo">
                  <img src="@/assets/index/icon-deng-4.png" alt="" class="icon-deng2">
                </div>
                <div class="rightTop02-text">
                  <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal4' :duration='3000'></countTo>元</div>
                  <div class="rightTop01-text02">人均支配金额</div>
                </div>
              </div>
              <div class="rightTop02Left rightTop02Left0202" >
                <div class="rightTop02-img">
                  <img src="@/assets/index/icon-deng.png" alt="" class="dizhuo">
                  <img src="@/assets/index/icon-deng-5.png" alt="" class="icon-deng2">
                </div>
                <div class="rightTop02-text ">
                  <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal5' :duration='3000'></countTo>（满分10）</div>
                  <div class="rightTop01-text02">幸福感评价</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="height:auto;position: relative;">
          <img src="@/assets/index/rightBottom.png" alt="" class="rightBottomImg">
          <div class="rightBottomTitle">三林简介</div>
          <div class="rightBottomText">
            <p>三林村地处禹越镇西北部，东临高桥村，南接夏东村，西靠新 安镇，北交新市镇，村委驻地与镇政府所在地相距8公里。村地域面 积5.8平方公里，拥有水田3070亩、桑地1291亩、鱼塘460亩。</p>
            <p>创新传承在中华民族的血脉之中、蕴含在马克思主义基本原理 之中、印刻在我们“新农人”的基因之中。创新离我们很近，哪怕 是迈出一小步、想一个小点子也是创新，我们每一个人身上都有创 。</p>
            <p>创新传承在中华民族的血脉之中、蕴含在马克思主义基本原理 之中、印刻在我们“新农人”的基因之中。创新离我们很近，哪怕 是迈出一小步、想一个小点子也是创新，我们每一个人身上都有创 。</p>
            <p>创新传承在中华民族的血脉之中、蕴含在马克思主义基本原理 之中、印刻在我们“新农人”的基因之中。创新离我们很近，哪怕 是迈出一小步、想一个小点子也是创新，我们每一个人身上都有创 。</p>
          </div>
          <div class="rightBottomImgs"><img src="@/assets/index/rightBottomImg.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import countTo from 'vue-count-to';
  export default {
    name: "index",
    components: { countTo },
    data () {
      return {
        staImg1:require('@/assets/index/menu.png'),
        num: 0,
        numTween: 0,
        startVal: 0,
        endVal: 364,
        endVal2: 9,
        endVal3: 300,
        endVal4: 36867,
        endVal5: 9.43,
      };
    },
    methods:{
      change () {
        this.num = 500
      },
      changeImageSrc(index){
        console.log(index)
        index == 2?this.staImg1 = require('@/assets/index/menu.png') :this.staImg1 = require('@/assets/index/active.png')
      },
      drawLine(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption( {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          title: {
            text: '天气情况统计',
            left: 'left'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              label: {
                normal: {
                  position: 'outer',
                  // alignTo: 'labelLine',
                  // bleedMargin: 5,
                  //     show:true,
                  // formatter: '{c|{c}%}\n{hr|}\n{b|{b}}',
                  formatter: (params)=>{
                    return '{color'+params.dataIndex+'| '+params.percent+'%}'+'\n'+'{hr'+params.dataIndex+'|}'
                      +'\n'+'{b'+params.dataIndex+'| '+params.name+'}'
                  },
                  rich: {
                    color0: {fontSize: 18,align: 'center',padding:4},
                    color1: {fontSize: 18,align: 'center',padding:4},
                    color2: {fontSize: 18,align: 'center',padding:4},
                    color3: {fontSize: 18,align: 'center',padding:4},
                    color4: {fontSize: 18,align: 'center',padding:4},
                    hr0:{borderColor: '#31b9e4',width:'100%',borderWidth: 1,height:0},
                    hr1:{borderColor: '#1172e1',width:'100%',borderWidth: 1,height:0},
                    hr2:{borderColor: '#d87017',width:'100%',borderWidth: 1,height:0},
                    hr3:{borderColor: '#f0d22d',width:'100%',borderWidth: 1,height:0},
                    hr4:{borderColor: '#57e0cb',width:'100%',borderWidth: 1,height:0},
                    b0: {fontSize: 16,color: '#FFF',align: 'left', padding: 4,},
                    b1: {fontSize: 16,color: '#FFF',align: 'left', padding: 4,},
                    b2: {fontSize: 16,color: '#FFF',align: 'left', padding: 4,},
                    b3: {fontSize: 16,color: '#FFF',align: 'left', padding: 4,},
                    b4: {fontSize: 16,color: '#FFF',align: 'left', padding: 4,},
                    hr: {
                      borderColor: '#CCCCCC',
                      width: '100%',
                      borderWidth: 1,
                      height: 0
                    },
                    c: {
                      fontSize: 16,
                      align: 'center',
                      padding: 4,
                      color:'#00EDED'
                    }
                  }
                },
              },
              data: [
                {value: 5.84, name: '生活智慧化',itemStyle:{color:'#31b9e4'}},
                {value: 35.72, name: '生态绿色化',itemStyle:{color:'#1172e1'}},
                {value: 27.06, name: '产业数字化',itemStyle:{color:'#d87017'}},
                {value: 20.76, name: '要素高端化',itemStyle:{color:'#f0d22d'}},
                {value: 10.62, name: '治理现代化',itemStyle:{color:'#57e0cb'}},
              ]
            }
          ]
        });
        window.onresize = myChart.resize;
      },
      auto(){
        let myChart = this.$echarts.init(document.getElementById('myChartMain'))
        myChart.setOption( {
          color: ['#bb0004', '#FFD48A'],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            // containLabel: true,
            left: '10%',
            top: "9%",
            bottom: "10%",
          },
          xAxis: {
            data: [
              '一季度',
              '二季度',
              '三季度',
              '四季度'
            ],
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#5EA2ED',
              interval: 0
            },
            axisLine: {
              lineStyle: {
                color: '#1B5BBA',
              }
            }
          },
          yAxis: {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: '#1B5BBA',
              }
            },
            axisLabel: {
              color: '#5EA2ED',
              interval: 0
            },
          },
          series: [{
            type: 'pictorialBar',
            name: '案件归类',
            symbolSize: ['50%', '80%'],
            // symbolPosition: 'center',
            z: 10,
            label: {
              normal: {
                show: true,
                position: "top",
                formatter: "{c}",
                color: "#fff",
                fontSize: 13
              }
            },
            data: [{
              value: 152,
              // symbolPosition: 'center',
              symbolOffset: [0, -8],
              // symbolRotate: -9,
              // symbolPosition: 'start',
              symbol: 'image://../img/column1.png',
            }, {
              value: 380,
              // symbolPosition: 'center',
              symbolOffset: [0, -8],
              symbol: 'image://../img/column2.png',
            }, {
              value: 291,
              // symbolPosition: 'center',
              symbolOffset: [0, -8],
              symbol: 'image://../img/column3.png',
            }, {
              value: 369,
              symbolOffset: [0, -8],
              symbol: 'image://../img/column4.png',
            }]
          }]
        });
        window.onresize = myChart.resize;
      }
    },
    mounted(){
      this.drawLine();
      this.auto();
      this.$refs.example.start();
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    width:100%;height:100%;
    background-image: url("../../src/assets/index/bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .top {
    width:auto;height:145px;
    background-image: url("../../src/assets/index/top.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 22px 24px 0 24px;
  }
  .top .topLeft {float:left;}
  .top .topRight {float:right}
  .menu {display: block;float:left;width: 28%;height:44px;
    background-image: url("../../src/assets/index/menu.png");
    background-repeat: no-repeat;
    background-size:  100% 44px;
    color: #b7cdff;margin-right: 10px;
    text-align: center;line-height: 44px;
    position: relative;
  }
  .menu.active {background-image: url("../../src/assets/index/active.png");}
  .menu:hover {background-image: url("../../src/assets/index/active.png");}
  .windows {position: relative;overflow: hidden;}
  .cols .menu {float:right;}
  @keyframes fade-in {
    0% {opacity: 0;}/*初始状态 透明度为0*/
    40% {opacity: 0;}/*过渡状态 透明度为0*/
    100% {opacity: 1;}/*结束状态 透明度为1*/
  }
  .windows1 {animation: fade-in;/*动画名称*/animation-duration: 1.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 1.5s;/*针对webkit内核*/}
  .windows2 {animation: fade-in;/*动画名称*/animation-duration: 2.5s;/*动画持续时间*/animation-delay: 2s;-webkit-animation:fade-in 2.5s;/*针对webkit内核*/}
  .windows3 {animation: fade-in;/*动画名称*/animation-duration: 3.5s;/*动画持续时间*/animation-delay: 3s;-webkit-animation:fade-in 3.5s;/*针对webkit内核*/}
  .windows4 {animation: fade-in;/*动画名称*/animation-duration: 4.5s;/*动画持续时间*/animation-delay: 4s;-webkit-animation:fade-in 4.5s;/*针对webkit内核*/}
  .windows5 {animation: fade-in;/*动画名称*/animation-duration: 5.5s;/*动画持续时间*/animation-delay: 5s;-webkit-animation:fade-in 5.5s;/*针对webkit内核*/}
  .windows6 {animation: fade-in;/*动画名称*/animation-duration: 6.5s;/*动画持续时间*/animation-delay: 6s;-webkit-animation:fade-in 6.5s;/*针对webkit内核*/}
  @keyframes myfirst
  {
    0% { opacity: 0 }
    50% {opacity: .5}
    100% { opacity: 1 }
  }
  .tianqi {height:45px;position: relative;}
  .times img {margin-top: 15%;margin-left: -10%;width: 100%;}
  .tianqi img {margin-top: 15%;margin-left: 15%;width: 100%;}
  .main {	width:100%;height:auto;position: relative;padding: 0 20px;margin-top: -27px;}
  .main .bodys {float:left;}
  .left {position: relative;}
  .leftTopImg {width: 100%;height:auto;position: relative;top:0;left:0;z-index: 0;}
  .leftText {position: absolute;top:0;left:0;width: 100%;height:auto;}
  .rightTop {position: absolute;top:0;left:0;width:100%;height:100%;}
  .rightTop>div {height:33.33%;width: 100%;text-align: center;}
  .rightTop01-img {text-align: right;width:50%;float:left;height:100%;
    position: relative;
  }
  .dizhuo {position: absolute;top:50%;right:0;width: 117px;height:84px;margin-top: -42px;}
  .icon-deng {position: absolute;top:50%;right:40px;width: 34px;height: 36px;margin-top: -18px;
    animation: ghostUpdown 1s infinite alternate;
    -webkit-animation: ghostUpdown 1s infinite alternate;
  }
  .rightTop01-text {text-align: left;width:50%;float:left;height:100%;color: #ffae00;font-size: 12px;padding-top: 10%;}
  .hr {position: absolute;width: auto;height:1px;left:10%;}
  .rightTop01-text-num {font-size: 40px;font-family: 'jsq';margin-left: 10%;}
  .rightTop01-text02 {font-size: 18px;color: #fff;}
  .rightTop02Left  {width:50%;float:left;height:100%;position: relative;}
  .rightTop02-img {float:left;height:100%;position: relative;width: 100%;}
  .rightTop02-img .dizhuo {left:10%;right:inherit;}
  .icon-deng2 {
    position: absolute;top:50%;left:26%;width: 34px;height: 36px;margin-top: -18px;
    animation: ghostUpdown 1s infinite alternate;
    -webkit-animation: ghostUpdown 1s infinite alternate;
  }
  .rightTop02-text {float:left;height:100%;color: #48e3ff;position: absolute;top:40%;left:16%;font-size: 30px;width: 100%;text-align: center;}
  .rightTop02-text .rightTop01-text-num {margin-left: 0;}
  .rightTop02Right  {width:50%;float:left;font-size: 16px;}
  .rightTop02-text .rightTop01-text01 {font-size: 12px;}
  .rightTop02-text .rightTop01-text-num {font-size: 24px;}
  .rightTop02-text .rightTop01-text02 {font-size: 12px;}
  .rightTop02Left:before {
    content: '';
    width:1px;
    height:56px;
    border-right: 2px dotted rgba(255,255,255,.2);
    position: absolute;
    top:50%;
    right:0;
    margin-top: -28px;
  }
  .rightTop02Left.rightTop02Left0202:before {
    content: '';
    width:1px;
    height:56px;
    border-right: none;
    position: absolute;
    top:50%;
    right:0;
    margin-top: -28px;
  }

  .rightBottomImg {position: absolute;top:0;right:0;width: 100%;}
  .rightBottomText {width:94%;height:100%;color: #fff;font-size: 14px;line-height: 30px;overflow-y: scroll;
    max-height: 200px;position: relative;z-index: 10;    padding: 0 20px 0 42px;text-align: justify;
  }
  .rightBottomText::-webkit-scrollbar {width: 4px;}
  .rightBottomText::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(16,46,75,1);
  }
  .rightBottomText::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
  .rightBottomText p {text-indent: 2em;}
  .rightBottomTitle {width: 100%;line-height: 55px;color: #fff;font-size: 20px;position: relative;margin-left: 28px;padding-bottom: 5%;}
  .rightBottomImgs {width:100%;text-align: center;margin-top: 5%;}
  .rightBottomImgs img {width:auto;}
  @keyframes ghostUpdown {
    from {
      top:55%;
    }
    to {
      top: 50%;
    }
  }
  @keyframes ghostUpdown {
    from {
      top:55%;
    }
    to {
      top: 50%;
    }
  }
</style>
