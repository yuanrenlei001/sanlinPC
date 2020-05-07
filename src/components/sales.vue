<template>
  <div class="content">

    <div class="top">
      <el-row  >
        <el-col :span="6" class="" style="padding: 0;">
          <router-link class="windows1 menu" to="/">乡村指数</router-link>
          <router-link class="windows2 menu active" to="/sales">销售数据</router-link>
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
      <div class="bodys left" style="width:33.1%;">
        <div style="height:auto;margin-bottom: 23px;" >
          <img src="@/assets/sales/sales-line.png" alt="" class="leftTopImg">
          <div class="salesLeftTop">
            <div class="salesLeftTopText">乡镇销售数据一览</div>
            <div id="myChart" :style="{width: '100%', height: '360px'}"></div>
          </div>
        </div>
        <div style="height:auto;margin-bottom: 23px;position: relative;">
          <img src="@/assets/sales/sales-line.png" alt="" class="leftTopImg">
          <div class="salesLeftTop">
            <div class="salesLeftTopText">供求预测</div>
            <div id="myChart2" :style="{width: '100%', height: '360px'}"></div>
          </div>
        </div>
      </div>
      <div class="bodys" style="width:33.8%;">
        <div class="autoTop">
          <img src="@/assets/sales/sales-icon02.png" alt="" class="autoTopImg">
          <div class="autoTopText">
            <img src="@/assets/sales/sales-icon01.png" alt="" class="autoTopIcon">
            <div class="autoTopRight">
              <div class="autoTopTexts">电商销售总额 <img src="@/assets/sales/sales-icon03.png" alt=""></div>
              <div class="autoTopNum">
                <ul>
                  <li :class="{'number-item': !isNaN(item) }" v-for="(item,index) in computeNumber" :key="index"><span
                    v-if="!isNaN(item)">       <i ref="numberItem">0123456789</i>     </span> <span v-else>{{item}}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bodys" style="width:33.1%;">
      </div>
    </div>
  </div>

</template>

<script>
  import countTo from 'vue-count-to';
  import echarts from 'echarts'
  export default {
    props: {   number: {     type: Number,     default: 0   } },
    name: "sales",
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
        computeNumber:['0','9','6','9','4','3','3','2','6']
      };
    },
    methods:{
      drawLine(){
        let colors = ['#5793f3', '#e6a405', '#e6a405'];
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        window.onresize = myChart.resize;
        // 绘制图表
        myChart.setOption({
          color: colors,
          tooltip: {
            trigger: 'none',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            data:['销售量', '订单量'],
            x:'right',
            y:'canter',
            padding:[50,50,0,0],
            textStyle:{color:'#ffffff'}
          },
          grid: {
            top: 70,
            bottom: 50
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: '#2b8bd4'
                }
              },
              minorTick: {
                show: true
              },

              // splitLine: {
              //   show: true,
              //   minorSplitLine: {
              //     show: true,
              //     lineStyle: {
              //       color: '#ddd'
              //     }
              //   }
              // },
              axisPointer: {
                label: {
                  // formatter: function (params) {
                  //     return '降水量  ' + params.value
                  //         + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                  // }
                }
              },
              name:'月',
              data: ['一','二','三','四','五','六','七','八','九','十','十一','十二'],

            },
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                // textStyle:{color:'#ffffff'},
                // onZero: false,
                lineStyle: {

                  color: colors[0]
                }
              },
              axisPointer: {
                // label: {
                //     formatter: function (params) {
                //         return '降水量  ' + params.value
                //             + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                //     }
                // }
              },
              // data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
            }
          ],
          yAxis: [
            {
              splitLine:{show:false},
              type: 'value',
              name:'万',
              min: 0,
              max: 600,
              interval: 50,
              axisLine: {
                // onZero: false,
                lineStyle: {
                  color: colors[0]
                }
              },
            }
          ],
          series: [
            {
              name: '销售量',
              type: 'line',
              xAxisIndex: 1,
              data: [400, 300, 425, 400, 450, 250, 550, 380, 410, 390, 301, 400

              ],
              symbol:'none',  //这句就是去掉点的
              smooth:true,  //这句就是让曲线变平滑的
              itemStyle:{
                normal : {
                  areaStyle : {
                    type : 'default',
                    //渐变色实现
                    color : new echarts.graphic.LinearGradient(0, 0, 0, .8,//变化度
                      //三种由深及浅的颜色
                      [ {
                        offset : 0,
                        color : 'rgba(230,164,5,.8)'
                      }, {
                        offset : 0.5,
                        color : 'rgba(230,164,5,.4)'
                      }, {
                        offset : 1,
                        color : 'rgba(230,164,5,.0)'
                      } ]),
                  },
                  lineStyle : {  //线的颜色
                    color : '#fac202'
                  },
                }}
            },
            {
              name: '订单量',
              type: 'line',
              smooth: true,
              symbol:'none',  //这句就是去掉点的
              data: [350, 340, 320, 390, 350, 440, 400, 460, 330, 410, 490, 410],
              itemStyle:{
                normal : {
                  areaStyle : {
                    type : 'default',
                    //渐变色实现
                    color : new echarts.graphic.LinearGradient(0, 0, 0, .8,//变化度
                      //三种由深及浅的颜色
                      [ {
                        offset : 0,
                        color : 'rgba(0,168,255,.8)'
                      }, {
                        offset : 0.5,
                        color : 'rgba(0,168,255,.4)'
                      }, {
                        offset : 1,
                        color : 'rgba(0,168,255,.0)'
                      } ]),
                  },
                  lineStyle : {  //线的颜色
                    color : '#00c0ff'
                  },
                }}
            }
          ]
        });
      },
      drawLine2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        window.onresize = myChart2.resize;
        // 绘制图表
        myChart2.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#000'
              }
            }
          },
          "color": ["#e6b418",'#0f94ff'],
          legend: {
            data: ['蒸发量', '降水量']
          },
          xAxis: [
            {
              type: 'category',
              name: '月',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
              splitLine:{show:true,
                lineStyle: {
                  color: 'rgba(15,148,255,.2)'
                },

              },
              axisLine:{
                lineStyle:{
                  color:'rgba(15,148,255,1)'
                }
              },
              axisLabel: {   // X轴线 标签修改
                textStyle: {
                  color: '#ffffff', //坐标值得具体的颜色
                }
              },
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '万',
              min: 0,
              max: 600,
              interval: 50,
              axisLabel: {
                formatter: '{value} ',
                textStyle: {
                  color: '#ffffff', //坐标值得具体的颜色
                }

              },
              axisLine:{
                lineStyle:{
                  color:'rgba(15,148,255,1)'
                }
              },
              show:true,
              splitLine:{show:true,
                lineStyle: {
                  color: 'rgba(15,148,255,.2)'
                }
              },
            },

          ],
          series: [
            {
              name: "蒸发量",
              "type": "pictorialBar",
              "symbolSize": [12, 10],
              "symbolOffset": [-8, -5],
              "symbolPosition": "end",
              "z": 12,
              "itemStyle": {
                "normal": {
                  "opacity": 1
                }
              },
              "data": [300, 345, 450, 480, 360, 170, 180, 390, 270, 180, 90, 260]
            },
            {
              "name": "2",
              "type": "pictorialBar",
              "symbolSize": [12, 10],
              "symbolOffset": [8, -5],
              "symbolPosition": "end",
              "z": 12,
              "itemStyle": {
                "normal": {
                  "opacity": 1
                }
              },

              "data": [200, 245, 350, 380, 260, 100, 130, 290, 170, 80, 90, 160]
            },
            {
              "type": "bar",
              "itemStyle": {
                "normal": {
                  "opacity": .8
                }
              },
              "barWidth": "12",
              "data": [300, 345, 450, 480, 360, 170, 180, 390, 270, 180, 90, 260]
            },
            {
              name: '降水量',
              type: 'bar',
              "barWidth": "12",
              data: [200, 245, 350, 380, 260, 100, 130, 290, 170, 80, 90, 160]
            },
          ],
        });
      },
      increaseNumber() {
        function getRandomNumber (min, max) {   return Math.floor(Math.random() * (max - min + 1) + min) };
        let self = this
        this.timer = setInterval(() => {
          self.newNumber = self.newNumber + getRandomNumber(1, 100)
          self.setNumberTransform()
        }, 1000)
      },
      setNumberTransform() {
        let numberItems = this.$refs.numberItem
        let numberArr = this.computeNumber.filter(item => !isNaN(item))
        for (let index = 0; index < numberItems.length; index++) {
          let elem = numberItems[index]
          elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`
        }
      }
    },
    mounted(){
      this.drawLine();
      this.drawLine2();
      this.increaseNumber();
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .number-item {
    width: 30px;
    /*background: url(./number-bg.png) no-repeat center center;*/
    background-size: 100% 100%;
    height:40px;
    text-align: center;
    line-height: 40px;
    background: #000b21;
    font-family: 'jsq';
    float:left;
    margin-right: 4px;
  }
  span {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 100%;
    height: 100%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    overflow: hidden;}
  i {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    transition: transform 0.5s ease-in-out;
    letter-spacing: 10px;
    color: #ffa210;
    font-size: 34px;
    font-style: normal;
  }
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
  .salesLeftTop {position: absolute;top:0;left:0;width: 100%;height:auto;}
  .salesLeftTopText {width: 100%;line-height: 55px;color: #fff;font-size: 20px;position: relative;margin-left: 28px;padding-bottom: 5%;}
  .autoTop {position: relative;width: 100%;text-align: center;height:auto;margin: 0 30px;}
  .autoTopImg {width: 100%;height:auto;}
  .autoTopText {position: absolute;top:0;left:0;background: rgba(255,255,255,.5);width: 100%;}
  .autoTopText .autoTopIcon {width: auto;height:auto;float:left;margin-top: 5%;margin-left: 13%;}
  .autoTopRight {width:100%;position: absolute;top:0;right:0;}
  .autoTopTexts {font-size: 24px;color: #00c0ff;}
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
