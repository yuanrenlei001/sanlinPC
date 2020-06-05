<template>
    <div class="content">

        <div class="top" style="position: relative;z-index: 9999;">
            <el-row  >
                <el-col :span="6" class="" style="padding: 0;">
                    <router-link class="windows1 menu active" to="/product">产业数据</router-link>
                    <router-link class="windows2 menu" to="/quality2">数字村民</router-link>
                    <router-link class="windows3 menu" to="/quality">生态文明</router-link>
                </el-col>
              <el-col :span="3" class="times">
                <div style="color: #fff;font-size: 20px;margin-top: 14%;margin-left: -10%;text-align:center;">
                  {{ nowDate + ' ' + nowWeek  + ' ' + nowTime }}
                </div>
              </el-col>
              <el-col :span="6" style="opacity: 0;"><router-link  to="/" style="display: block;">123</router-link></el-col>
              <el-col :span="3" class="tianqi">
                <iframe scrolling="no" id="tianqi" style="margin-top: 15%;margin-left: 15%;width: 100%;" src="https://tianqiapi.com/api.php?style=ta&skin=pitaya&color=fff&fontsize=16" frameborder="0" width="400" height="24"  allowtransparency="true"></iframe>
              </el-col>
                <el-col :span="6" class="cols windows" style="padding: 0;">
                    <router-link class="windows6 menu" to="/product2">乡村治理</router-link>
                    <router-link class="windows5 menu" to="/sales2">乡村运营</router-link>
                    <router-link class="windows4 menu" to="/sales">生活服务</router-link>
                </el-col>
            </el-row>
        </div>
        <div class="main">
            <div class="bodys left" style="width:30%;">
                <div style="height:auto;margin-bottom: 23px;">
                    <img src="@/assets/sales/sales-line.png" alt="" class="leftTopImg">
                    <div class="salesLeftTop jdt">
                        <div class="salesLeftTopText">本年度各类销售情况</div>
                      <el-select v-model="value" :popper-append-to-body="false" placeholder="请选择"  popper-class="el-popper" style="background-color: #030813;">
                        <el-option
                          v-for="item in options"

                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                        <div id="myChart" :style="{width: '100%', height: '360px',margin:'-40px 0 0 0'}"></div>
                    </div>
                </div>
                <div style="height:auto;margin-bottom: 23px;position: relative;">
                    <img src="@/assets/sales/sales-line.png" alt="" class="leftTopImg">
                    <div class="salesLeftTop">
                        <div class="salesLeftTopText">农作物产量分析</div>
                        <div id="myChart2" :style="{width: '100%', height: '360px'}"></div>
                    </div>
                </div>
            </div>
            <div class="bodys" style="width:40%;height:100%;position: relative;">
              <div @click="showpopup"  style="cursor: pointer;width:300px;height:300px;position: absolute;top:50%;margin-top: -150px;z-index: 999;left:50%;margin-left: -150px;"></div>
                <img src="@/assets/bg.png" alt="" style="width: 100%;;position: relative;margin-top: 10%;">
                <img src="@/assets/tc.png" alt="" v-show="popup" style="position: absolute;z-index: 999;left:8%;top:10%;cursor: pointer;" @click="closepopup">
            </div>
            <div class="bodys" style="width:30%;">
                <div class="rightTop">
                    <div class="rightTop01">
                        <img src="@/assets/sales/sales-hr.png" class="rightTop01Img" alt="">
                        <div class="rightTopText">农产品分类</div>
                        <img src="@/assets/sales/sales-hr.png" alt="" class="rightTop01Img2">
                    </div>
                    <div class="leftText"><div id="myChart3" :style="{width: '100%', height: '400px'}"></div></div>
                </div>
                <div class="rightTop">
                    <div class="rightTop">
                            <img src="@/assets/sales/sales-hr.png" class="rightTop01Img" alt="">
                    </div>
                    <div class="bottomTop">
                        <div class="bottomTopText" style="color: #f7b349;"><img src="@/assets/quality/rightTopIcon2.png" alt=""> 产品分类销售榜</div>
                        <img src="@/assets/index/bottomRight01.png" alt="">
                    </div>
                    <div class="bottomTop">
                        <div class="bottomTopText" style="color: #00a8d2;"><img src="@/assets/quality/rightTopIcon.png" alt=""> 最受欢迎产品榜</div>
                        <img src="@/assets/index/bottomRight02.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>.

<script>
    import countTo from 'vue-count-to';
    import echarts from 'echarts'
    export default {
        props: {number: {type: Number, default: 0}},
        name: "sales",
        components: {countTo},
        data() {
            return {
              popup: 0,
              nowDate: "",
              nowTime: "",
              nowWeek: "",
              value: '2019',
              options: [
                {value: '0', label: '2020',},
                {value: '1', label: '2019',},
                {value: '2', label: '2018',},
                {value: '3', label: '2017',},
              ],
                staImg1: require('@/assets/index/menu.png'),
                staImg2: require('@/assets/sales/mapTitle.png'),
                num: 0,
                numTween: 0,
                startVal: 0,
                endVal: 364,
                endVal2: 9,
                endVal3: 300,
                endVal4: 36867,
                endVal5: 9.43,
                computeNumber: ['0', '9', '6', '9', '4', '3', '3', '2', '6']
            };
        },
        methods: {
          //打开活动规则页面
          showpopup() {
            this.popup = 1;
          },
          //关闭活动规则页面
          closepopup() {
            this.popup = 0;
          },
          currentTime() {
            setInterval(this.getDate, 500);
          },
          getDate: function() {
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let week = new Date().getDay();
            let hh = new Date().getHours();
            let mf =
              new Date().getMinutes() < 10
                ? "0" + new Date().getMinutes()
                : new Date().getMinutes();
            if (week == 1) {
              this.nowWeek = "星期一";
            } else if (week == 2) {
              this.nowWeek = "星期二";
            } else if (week == 3) {
              this.nowWeek = "星期三";
            } else if (week == 4) {
              this.nowWeek = "星期四";
            } else if (week == 5) {
              this.nowWeek = "星期五";
            } else if (week == 6) {
              this.nowWeek = "星期六";
            } else {
              this.nowWeek = "星期日";
            }
            _this.nowTime = hh + ":" + mf;
            _this.nowDate = yy + "/" + mm + "/" + dd;
          },
            drawLine() {
                var colors = [
                    {
                    type: 'linear',
                    x: 0,
                    x2: 0,
                    y: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#0f6fdc'
                    }, {
                        offset: 1,
                        color: '#29c5f9'
                    }]
                }, {
                    type: 'linear',
                    x: 0,
                    x2: 0,
                    y: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#0172e2'
                    }, {
                        offset: 0.5,
                        color: '#0656c6'
                    }, {
                        offset: 0.5,
                        color: '#0656c6'
                    }, {
                        offset: 1,
                        color: '#0f299a'
                    }]
                }];
                var barWidth = 25;
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                window.onresize = myChart.resize;
                // 绘制图表
                myChart.setOption({
                    xAxis: [
                        {
                            type: 'category',
                            name: '月',
                            data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(15,148,255,.2)'
                                },

                            },
                            axisLine: {
                                lineStyle: {
                                    color: 'rgba(15,148,255,1)'
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
                            axisLine: {
                                lineStyle: {
                                    color: 'rgba(15,148,255,1)'
                                }
                            },
                            show: true,
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(15,148,255,.2)'
                                }
                            },
                        },

                    ],
                    series: [
                        {
                            z: 1,
                            name: '实验频次',
                            type: 'bar',
                            barWidth: '20',
                            data: [300, 345, 450, 480, 360, 170, 180, 390, 270, 180, 90, 260],
                            itemStyle: {
                                normal: {
                                    color: colors[0]
                                },
                            }
                        },
                        {
                            z: 3,
                            type: 'pictorialBar',
                            symbolPosition: 'end',
                            data:  [300, 345, 450, 480, 360, 170, 180, 390, 270, 180, 90, 260],
                            symbol: 'diamond',
                            symbolOffset: [0, '-50%'],
                            symbolSize: [barWidth - 7, (10 * (barWidth - 4)) / barWidth],
                            itemStyle: {
                                normal: {
                                    borderColor: '#0f6fdc',
                                    borderWidth: 1,
                                    color: '#0f6fdc'
                                }
                            },
                        },
                        {z: 3,
                            name:'123',
                            data:  [300, 345, 450, 480, 360, 170, 180, 390, 270, 180, 90, 260],
                            lineStyle: {
                                color: '#ca8b04',
                                width: 3,
                            },
                            type: 'line'
                        }
                    ]
                });
            },
            drawLine2() {
                var titlename = ['2015', '2016', '2017', '2018', '2019'];
                var valdata = [789, 541, 411, 462, 315]
                var myColor = ['#dd821e', '#ecca29', '#1d92eb', '#1d92eb', '#1d92eb'];
                var myColorTiao = ['#ff5f10', '#a57400', '#0148a9', '#0148a9', '#0148a9'];
                // 基于准备好的dom，初始化echarts实例
                let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
                window.onresize = myChart2.resize;
                // 绘制图表
                myChart2.setOption({
                    title: {
                        text: '历年产量分析表',
                        textStyle: {
                            fontSize: 18,
                            color: '#fff',
                        },
                    },
                    xAxis: {
                        type: 'value'
                    },
                    yAxis: [
                        {
                            show: true,
                            data: titlename,
                            inverse: true,
                            axisLine: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                color: '#fff',
                                rich: {
                                    lg: {
                                        backgroundColor: '#339911',
                                        color: '#fff',
                                        borderRadius: 15,
                                        // padding: 5,
                                        align: 'center',
                                        width: 15,
                                        height: 15
                                    },
                                }
                            },


                        }, {
                            show: false,
                            inverse: true,
                            data: valdata,
                            axisLabel: {
                                textStyle: {
                                    fontSize: 12,
                                    color: '#fff',
                                },
                            },
                            axisLine: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },

                        }],
                    series: [
                        {
                            name: '搜索引擎',
                            type: 'bar',
                            stack: '总量',
                            barWidth: 30,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 30,
                                    color: function(params) {
                                        var num = myColor.length;
                                        return myColor[params.dataIndex % num]
                                    },
                                }
                            },
                            data: [789, 541, 411, 462, 315]
                        },
                        {
                            name: '框',
                            type: 'bar',
                            yAxisIndex: 1,
                            barGap: '-100%',
                            data:[789, 541, 411, 462, 315],
                            barWidth: 30,
                            itemStyle: {
                                normal: {
                                    color: 'none',
                                    borderColor: function(params) {
                                        var num = myColorTiao.length;
                                        return myColorTiao[params.dataIndex % num]
                                    },
                                    borderWidth: 3,
                                    barBorderRadius: 20,
                                }
                            }
                        }
                    ]
                });
            },
            increaseNumber() {
                function getRandomNumber(min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min)
                };
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
            },
            drawLine3() {
                let myChart3 = this.$echarts.init(document.getElementById('myChart3'));
                let giftImageUrl = require('@/assets/index/leftQuan.png');
                myChart3.setOption( {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    graphic: {
                        elements: [{
                            type: 'image',
                            style: {
                                image: giftImageUrl,
                                width: 226,
                                height: 226
                            },
                            left: 'center',
                            top: 'center'
                        }]
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: ["9%", "10%"],
                            center: ['50%', '48%'],
                            hoverAnimation: false,
                            labelLine: {
                                normal: {
                                    show: false,
                                    length: 30,
                                    length2: 55,

                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            data: [{
                                name: '',
                                value: 0,
                                itemStyle: {
                                    normal: {
                                        color: "#1a9bff"
                                    }
                                }
                            }]
                        },
                        {
                            name: '',
                            type: 'pie',
                            radius: ['15%', '40%'],
                            center: ['50%', '48%'],
                            roseType: 'area',
                            zlevel:10,
                            label: {
                                normal: {
                                    position: 'outer',
                                    padding: [0, -10],
                                    // alignTo: 'labelLine',
                                    // bleedMargin: 5,
                                    //     show:true,
                                    // formatter: '{c|{c}%}\n{hr|}\n{b|{b}}',
                                    formatter: (params)=>{
                                        return '{color'+params.dataIndex+'| '+params.percent+'%}'+'\n'+'{hr'+params.dataIndex+'|}'
                                            +'\n'+'{b'+params.dataIndex+'| '+params.name+'}'
                                    },
                                    rich: {
                                        color0: {fontSize: 18,align: 'center',padding:3.5},
                                        color1: {fontSize: 18,align: 'center',padding:3},
                                        color2: {fontSize: 18,align: 'center',padding:3},
                                        color3: {fontSize: 18,align: 'center',padding:3},
                                        color4: {fontSize: 18,align: 'center',padding:3},
                                        hr0:{borderColor: '#31b9e4',width:'100%',borderWidth: 2,height:0},
                                        hr1:{borderColor: '#1172e1',width:'100%',borderWidth: 2,height:0},
                                        hr2:{borderColor: '#d87017',width:'100%',borderWidth: 2,height:0},
                                        hr3:{borderColor: '#f0d22d',width:'100%',borderWidth: 2,height:0},
                                        hr4:{borderColor: '#57e0cb',width:'100%',borderWidth: 2,height:0},
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
                                {value: 20.76, name: '手工艺品',itemStyle:{color:'#31b9e4'}},
                                {value: 27.06, name: '特色食品',itemStyle:{color:'#1172e1'}},
                                {value: 10.62, name: '新鲜水果',itemStyle:{color:'#d87017'}},
                                {value: 41.56, name: '生态农产品',itemStyle:{color:'#f0d22d'}},
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
                window.onresize = myChart3.resize;
            },
        },
        mounted() {
          this.currentTime();
            this.drawLine();
            this.drawLine2();
            this.drawLine3();
            // this.increaseNumber();
        },
      beforeDestroy: function() {
        if (this.getDate) {
          console.log("销毁定时器")
          clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
        }
      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jdt >>> .el-select-dropdown {background-color: #071327 !important; color: #1cd7ff !important;}
  .jdt >>> .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {background-color: #030813 !important;}
  .jdt >>> .el-select-dropdown {border: 1px solid #071327 !important;}
  .jdt >>> .el-select-dropdown__item {color: #1cd7ff !important;}
  .jdt >>> .el-select {width: 45%;top:-20px;left:20px;}
  .jdt >>> .el-input__inner {font-size: 16px;height:35px;color: #00c5fe;background: #071327;border: transparent;}
    .bottomTopText {line-height: 88px;font-size: 24px;}
    .bottomTopText img {vertical-align: middle;}
    .bottomTop {width: 50%;float:left;text-align: center;}
    .rightTop01 {width:100%;padding: 0 30px;position: relative;}
    .rightTop01Img {width: 100%;}
    .rightTop01Img2 {width: 100%;}
    .rightTopText {position: relative;height:60px;line-height: 60px;color: #e99b1f;font-size: 32px;margin: auto;text-align: center;}
    .rightTopText:before {
        content: '';
        background-image: url("../assets/sales/sales-left.png");
        background-repeat: no-repeat;
        background-size: 40px 18px;
        width:40px;height:18px;
        position: absolute;
        top:50%;
        margin-top: -9px;
        left:19%;
    }
    .rightTopText:after {
        content: '';
        background-image: url("../assets/sales/sales-right.png");
        background-repeat: no-repeat;
        background-size: 40px 18px;
        width:40px;height:18px;
        position: absolute;
        top:50%;
        margin-top: -9px;
        right:19%;
    }
    .rightTopTa {width:100%;padding: 0 30px;position: relative;overflow: hidden;}
    .rightTopTa01 {width:100%;height:60px;line-height: 60px;position: relative;margin-bottom: 8px;}
    .rightTopTa01 div {float:left;}
    .rightTopTa01-1 {width:74px;height:100%;margin-right: 10px;}
    .rightTopTa01-1 img {width: 100%;vertical-align: middle;}
    .rightTopTa01-2 {font-size: 18px;color: #ff902d;line-height: 60px;white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;}
    .rightTopTa01 .ightTopTa01-3 {width: 226px;overflow: hidden;text-align: center;}
    .rightTopTa01-3 {height:60px;width: 225px;position: absolute;right:0;top:0;text-align: center;}
    .rightTopTa01-3 img {width:auto;height:auto;}
    .number-item {
        width: 30px;
        /*background: url(./number-bg.png) no-repeat center center;*/
        background-size: 100% 100%;
        height: 36px;
        text-align: center;
        line-height: 40px;
        background: #000b21;
        font-family: 'jsq';
        float: left;
        margin-right: 4px;
        padding-right: 4px;
    }

    .number-item span {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
        writing-mode: vertical-rl;
        text-orientation: upright;
        overflow: hidden;
    }

    .number-item i {
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
        width: 100%;
        height: 100%;
        background-image: url("../../src/assets/index/bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .top {
        width: auto;
        height: 145px;
        background-image: url("../../src/assets/index/top.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 22px 24px 0 24px;
    }

    .top .topLeft {
        float: left;
    }

    .top .topRight {
        float: right
    }

    .menu {
        display: block;
        float: left;
        width: 28%;
        height: 44px;
        background-image: url("../../src/assets/index/menu.png");
        background-repeat: no-repeat;
        background-size: 100% 44px;
        color: #b7cdff;
        margin-right: 10px;
        text-align: center;
        line-height: 44px;
        position: relative;
    }

    .menu.active {
        background-image: url("../../src/assets/index/active.png");
    }

    .menu:hover {
        background-image: url("../../src/assets/index/active.png");
    }

    .windows {
        position: relative;
        overflow: hidden;
    }

    .cols .menu {
        float: right;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        /*初始状态 透明度为0*/
        40% {
            opacity: 0;
        }
        /*过渡状态 透明度为0*/
        100% {
            opacity: 1;
        }
        /*结束状态 透明度为1*/
    }

    .windows1 {
        animation: fade-in; /*动画名称*/
        animation-duration: 1.5s; /*动画持续时间*/
        animation-delay: 1s;
        -webkit-animation: fade-in 1.5s; /*针对webkit内核*/
    }

    .windows2 {
        animation: fade-in; /*动画名称*/
        animation-duration: 2.5s; /*动画持续时间*/
        animation-delay: 2s;
        -webkit-animation: fade-in 2.5s; /*针对webkit内核*/
    }

    .windows3 {
        animation: fade-in; /*动画名称*/
        animation-duration: 3.5s; /*动画持续时间*/
        animation-delay: 3s;
        -webkit-animation: fade-in 3.5s; /*针对webkit内核*/
    }

    .windows4 {
        animation: fade-in; /*动画名称*/
        animation-duration: 4.5s; /*动画持续时间*/
        animation-delay: 4s;
        -webkit-animation: fade-in 4.5s; /*针对webkit内核*/
    }

    .windows5 {
        animation: fade-in; /*动画名称*/
        animation-duration: 5.5s; /*动画持续时间*/
        animation-delay: 5s;
        -webkit-animation: fade-in 5.5s; /*针对webkit内核*/
    }

    .windows6 {
        animation: fade-in; /*动画名称*/
        animation-duration: 6.5s; /*动画持续时间*/
        animation-delay: 6s;
        -webkit-animation: fade-in 6.5s; /*针对webkit内核*/
    }

    @keyframes myfirst {
        0% {
            opacity: 0
        }
        50% {
            opacity: .5
        }
        100% {
            opacity: 1
        }
    }

    .tianqi {
        height: 45px;
        position: relative;
    }

    .times img {
        margin-top: 15%;
        margin-left: -10%;
        width: 100%;
    }

    .tianqi img {
        margin-top: 15%;
        margin-left: 15%;
        width: 100%;
    }

    .main {
        width: 100%;
        height: auto;
        position: relative;
        padding: 0 20px;
        margin-top: -27px;
    }

    .main .bodys {
        float: left;
    }

    .left {
        position: relative;
    }

    .leftTopImg {
        width: 100%;
        height: auto;
        position: relative;
        top: 0;
        left: 0;
        z-index: 0;
    }

    .salesLeftTop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
    }

    .salesLeftTopText {
        width: 100%;
        line-height: 55px;
        color: #fff;
        font-size: 20px;
        position: relative;
        margin-left: 28px;
        padding-bottom: 5%;
    }

    .autoTop {
        position: relative;
        width: 100%;
        text-align: center;
        height: auto;
        padding: 0 30px;
    }

    .autoTopImg {
        width: 100%;
        height: auto;
    }

    .autoTopText {
        position: absolute;
        top: 2%;
        left: 0;
        width: 100%;
    }

    .autoTopText .autoTopIcon {
        width: auto;
        height: auto;
        float: left;
        margin-top: 5%;
        margin-left: 13%;
    }

    .autoTopRight {
        width: 100%;
        position: absolute;
        top: 33%;
        left: 37%;
    }

    .autoTopTexts {
        font-size: 24px;
        color: #00c0ff;
        text-align: left;
        margin-bottom: 15px;
    }

    .autoBottomText {
        position: absolute;
        bottom: 18%;
        left: 0;
        height: 40px;
        text-align: center;
        width: 100%;
    }

    .autoBottomText img {
        vertical-align: middle;
    }

    .autoBottom {
        font-size: 22px;
        color: #fff;
    }

    .autoBottomNum {
        display: inline-block;
        width: 31px;
        height: 40px;
        color: #39dcff;
        font-family: 'jsq';
        font-size: 34px;
        text-align: center;
        line-height: 40px;
        border: 1px solid #266bd3;
        margin-right: 7px;
    }

    .autoBottomSpan {
        font-size: 14px;
        color: rgba(255, 255, 255, .2)
    }

    @keyframes ghostUpdown {
        from {
            top: 55%;
        }
        to {
            top: 50%;
        }
    }

    @keyframes ghostUpdown {
        from {
            top: 55%;
        }
        to {
            top: 50%;
        }
    }
</style>
