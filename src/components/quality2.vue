<template>
    <div class="content">

        <div class="top" style="position: relative;z-index: 9999;">
            <el-row  >
                <el-col :span="6" class="" style="padding: 0;">
                    <router-link class="windows1 menu" to="/product">产业数据</router-link>
                    <router-link class="windows2 menu active" to="/quality2">数字村民</router-link>
                    <router-link class="windows3 menu" to="/quality">生态文明</router-link>
                </el-col>
                <el-col :span="3" class="times"><img src="@/assets/index/time.png" alt=""></el-col>
                <el-col :span="6" style="opacity: 0;"><router-link  to="/" style="display: block;">123</router-link></el-col>
                <el-col :span="3" class="tianqi"><img src="@/assets/index/tianqi.png" alt=""></el-col>
                <el-col :span="6" class="cols windows" style="padding: 0;">
                    <router-link class="windows6 menu" to="/product2">乡村治理</router-link>
                    <router-link class="windows5 menu" to="/sales2">乡村运营</router-link>
                    <router-link class="windows4 menu" to="/sales">生活服务</router-link>
                </el-col>
            </el-row>
        </div>
        <div class="main">
            <div class="bodys" style="width:27.33%;">
                <img src="@/assets/quality/leftBg.png" alt="" class="leftBG">
                <div class="left">
                    <div style="height:405px;">
                        <div class="rightBottomTitle" style="position: absolute;top:0;">三品一标产品数据统计</div>
                        <div class="leftText"><div id="myChart" :style="{width: '100%', height: '400px'}"></div></div>
                    </div>
                    <div class="date">
                        <img src="@/assets/quality/left02.png" alt="" class="left02">
                        <div class="dateSort">
                            <div class="dateSort01"><div class="dateSort02">硕士生：</div><div class="dateSort03"> <span>10</span> 个</div></div>
                            <div class="dateSort01"><div class="dateSort02">本科生：</div><div class="dateSort03"> <span>32</span> 个</div></div>
                            <div class="dateSort01"><div class="dateSort02">高中：</div><div class="dateSort03"> <span>107</span> 个</div></div>
                            <div class="dateSort01"><div class="dateSort02">专科：</div><div class="dateSort03"> <span>89</span> 个</div></div>
                        </div>
                    </div>
                    <div class="approve">
                        <div class="approveTop">优秀荣誉村民</div>
                        <div class="approveBottom">
                            <div><span>1</span>张三  获奖时间：1999年</div>
                            <div><span>2</span>李四  获奖时间：1999年</div>
                            <div><span>3</span>王五  获奖时间：1999年</div>
                            <div><span>4</span>赵六  获奖时间：1999年</div>
                            <div><span>5</span>赵六  获奖时间：1999年</div>
                            <div><span>6</span>赵六  获奖时间：1999年</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bodys" style="width:30.9%;">
                <div class="autoTop">
                    <img src="@/assets/quality/autoTop.png" alt="" class="autoTopImg">
                    <div class="autoTopText">
                        <img src="@/assets/sales/sales-icon01.png" alt="" class="autoTopIcon" style="opacity: 0;">
                        <div class="autoTopRight">
                            <div class="autoTopTexts" style="opacity: 0;">123 <img src="@/assets/sales/sales-icon03.png" alt=""></div>
                            <div class="autoTopNum">
                                <ul>
                                    <li :class="{'number-item': !isNaN(item) }" v-for="(item,index) in computeNumber"
                                        :key="index"><span
                                            v-if="!isNaN(item)">       <i ref="numberItem">0123456789</i>     </span>
                                        <span v-else>{{item}}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="autoBottom">
                    <img src="@/assets/quality/autoBottom.png" alt="" class="autoBottomImg">
                    <div class="autoBottomMain">
                        <div class="autoBottomTitle">环境数据</div>
                        <div class="autoBottomSelect">
                            <span>基　地：</span>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="autoBottomSelect">
                            <span>数据源： </span>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="autoBottomSelectTitle"><span>采集点1</span>的环境数据如下</div>
                        <div class="rightTop">
                            <img src="@/assets/index/hr.png" class="hr" alt="">
                            <div class="rightTop02">
                                <div class="rightTop02Left" >
                                    <div class="rightTop02-img">
                                        <img src="@/assets/index/icon-deng.png" alt="" class="dizhuo">
                                        <img src="@/assets/quality/autoBottom01.png" alt="" class="icon-deng2">
                                    </div>
                                    <div class="rightTop02-text">
                                        <div class="rightTop01-text01"><span class="rightTop01-text-num" >64</span></div>
                                        <div class="rightTop01-text02">省级优秀人才</div>
                                    </div>
                                </div>
                                <div class="rightTop02Right" >
                                    <div class="rightTop02-img">
                                        <img src="@/assets/index/icon-deng.png" alt="" class="dizhuo">
                                        <img src="@/assets/quality/autoBottom02.png" alt="" class="icon-deng2">
                                    </div>
                                    <div class="rightTop02-text">
                                        <div class="rightTop01-text01"><span class="rightTop01-text-num">10</span></div>
                                        <div class="rightTop01-text02">市级优秀人才</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rightTop">
                            <img src="@/assets/index/hr.png" class="hr" alt="">
                            <div class="rightTop02">
                                <div class="rightTop02Left" >
                                    <div class="rightTop02-img">
                                        <img src="@/assets/index/icon-deng.png" alt="" class="dizhuo">
                                        <img src="@/assets/quality/autoBottom03.png" alt="" class="icon-deng2">
                                    </div>
                                    <div class="rightTop02-text">
                                        <div class="rightTop01-text01"><span class="rightTop01-text-num">14</span></div>
                                        <div class="rightTop01-text02">镇级优秀人才</div>
                                    </div>
                                </div>
                                <div class="rightTop02Right" >
                                    <div class="rightTop02-img">
                                        <img src="@/assets/index/icon-deng.png" alt="" class="dizhuo">
                                        <img src="@/assets/quality/autoBottom04.png" alt="" class="icon-deng2">
                                    </div>
                                    <div class="rightTop02-text">
                                        <div class="rightTop01-text01"><span class="rightTop01-text-num">17</span></div>
                                        <div class="rightTop01-text02">村级优秀人才</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rightTop">
                            <img src="@/assets/index/hr.png" class="hr" alt="">
                            <div class="rightTop02">
                                <div class="rightTop02Left" >
                                    <div class="rightTop02-img">
                                        <img src="@/assets/index/icon-deng.png" alt="" class="dizhuo">
                                        <img src="@/assets/quality/autoBottom05.png" alt="" class="icon-deng2">
                                    </div>
                                    <div class="rightTop02-text">
                                        <div class="rightTop01-text01"><span class="rightTop01-text-num">17</span></div>
                                        <div class="rightTop01-text02">村级优秀人才</div>
                                    </div>
                                </div>
                                <!--<div class="rightTop02Right" >-->
                                    <!--<div class="rightTop02-img">-->
                                        <!--<img src="@/assets/index/icon-deng.png" alt="" class="dizhuo">-->
                                        <!--<img src="@/assets/quality/autoBottom06.png" alt="" class="icon-deng2">-->
                                    <!--</div>-->
                                    <!--<div class="rightTop02-text">-->
                                        <!--<div class="rightTop01-text01"><span class="rightTop01-text-num">8.63</span> %</div>-->
                                        <!--<div class="rightTop01-text02">P H</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bodys" style="width:41.77%;">
                <img src="@/assets/quality/rightBg.png" alt="" class="leftBG">
                <div class="autoBottomMain">
                    <div class="autoBottomTitle">三林村教育培训课程</div>
                    <div class="rightTopBg">
                        <img src="@/assets/quality/rightTop.png" alt="" class="rightTopBgImg">
                        <div class="rightTopBgText">
                            <div class="rightTopBgText01"><img src="@/assets/quality/rightTopIcon.png" alt=""> 生产信息</div>
                            <el-table
                                    :data="tableData3"
                                    height="340"
                                    style="width: 100%;background: transparent;">
                                <el-table-column width="200" prop="name" label="课程名称" ></el-table-column>
                                <el-table-column prop="pro" label="培训讲师" ></el-table-column>
                                <el-table-column prop="time" label="培训时间"></el-table-column>
                                <el-table-column prop="prosort" label="培训地点"></el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <div class="rightTopBg rightTopBg2" style="margin-top: 22px;">
                        <img src="@/assets/quality/rightTop.png" alt="" class="rightTopBgImg">
                        <div class="rightTopBgText">
                            <!--<div class="rightTopBgText01"><img src="@/assets/quality/rightTopIcon.png" alt=""> 生产信息</div>-->
                            <div class="rightTopBg22">
                                <div class="actives">播 种</div>
                                <div>施 肥</div>
                                <div>胶 水</div>
                                <div>害虫防治</div>
                                <div>农事活动</div>
                            </div>
                            <el-table
                                    :data="tableData3"
                                    height="340"
                                    style="width: 100%;background: transparent;">
                                <el-table-column width="200" prop="name" label="培训单位" ></el-table-column>
                                <el-table-column prop="pro" label="培训次数" ></el-table-column>
                                <el-table-column prop="prosort" label="毕业人数"></el-table-column>
                                <el-table-column prop="pronum" label="受欢迎程度"></el-table-column>
                            </el-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import countTo from 'vue-count-to';
    import echarts from 'echarts'
    // import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
    export default {
        props: {number: {type: Number, default: 0}},
        name: "sales",
        components: {countTo},
        data() {
            return {
                staImg1: require('@/assets/index/menu.png'),
                num: 0,
                numTween: 0,
                startVal: 0,
                endVal: 364,
                endVal2: 9,
                endVal3: 300,
                endVal4: 36867.5,
                endVal5: 9.43,
                computeNumber: ['2', '9', '6', '9', '4', '3', '3', '2', '6'],
                options: [
                    {
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                tableData3: [
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    {name: '东恒经贸集团有限公司', pro: '乌猪', prosort: '养殖业',pronum:'1901213',proliang:'1123',time:'2019-09-14'},
                    ],
                rbsort: require('@/assets/quality/rightBottomSort.png'),
                rbsortAc: require('@/assets/quality/rightBottomAc.png'),
            };
        },
        methods: {
            drawLine(){
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                let giftImageUrl = require('@/assets/index/leftQuan.png');
                myChart.setOption( {
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
                                {value: 17.2, name: '60以上',itemStyle:{color:'#31b9e4'}},
                                {value: 32.5, name: '40-60岁',itemStyle:{color:'#1172e1'}},
                                {value: 37.5, name: '20-40岁',itemStyle:{color:'#d87017'}},
                                {value: 12.8, name: '0-20岁',itemStyle:{color:'#f0d22d'}},
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
                window.onresize = myChart.resize;
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
        },
        mounted() {
            this.increaseNumber();
            this.drawLine();
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .rightBottomTitle {width: 100%;line-height: 55px;color: #fff;font-size: 20px;position: relative;margin-left: 28px;padding-bottom: 5%;}
    .autoBottom {width: 100%;padding: 0 30px;overflow: hidden;position: relative;}
    .autoBottomImg {position: relative;width: 100%;height:auto;}
    .autoBottomTitle {font-size: 20px;color: #cafcff;line-height: 60px;margin-left: 25px;}
    .autoBottomMain {position: absolute;top:0;left:0;width: 100%;padding: 0 30px;}
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
    .autoBottomSelect {font-size: 18px;color: #fff;text-align: center;margin-bottom: 10px;}
    .autoBottomSelect >>> .el-select {width: 55%;}
    .autoBottomSelect >>> .el-input__inner {font-size: 16px;height:33px;color: #00c5fe;background: #111e3b;border: 1px solid #1c3f6f;}
    .autoBottomSelectTitle {width: 100%;text-align: center;font-size: 16px;color: #afc3c7;margin-top: 20px;}
    .autoBottomSelectTitle span {font-size: 20px;color: #ffde00;}
    .rightTop {position: relative;width:100%;padding: 0 30px;margin-top: 20px;}
    .rightTop>div {height:150px;width: 100%;text-align: center;}
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
    .rightTop02Right  {width:50%;float:right;height:100%;position: relative;}
    .rightTop02-img {float:left;height:100%;position: relative;width: 100%;}
    .rightTop02-img .dizhuo {left:10%;right:inherit;}
    .icon-deng2 {
        position: absolute;top:50%;left:29%;width: 34px;height: 36px;margin-top: -18px;
        animation: ghostUpdown 1s infinite alternate;
        -webkit-animation: ghostUpdown 1s infinite alternate;
    }
    .rightTop02-text {float:left;height:100%;color: #48e3ff;position: absolute;top:40%;left:16%;font-size: 30px;width: 100%;text-align: center;}
    .rightTop02-text .rightTop01-text-num {margin-left: 0;}
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
    .rightTopBg {width: 98%;height:auto;position: relative;}
    .rightTopBgImg {position: relative;width:100%;height:auto;}
    .rightTopBgText {position: absolute;top:0;left:0;padding: 0 15px;width: 100%;}
    .rightTopBgText01 {height:45px;line-height: 45px;font-size: 18px;color: #1dadff;}
    .rightTopBgText01 img {vertical-align: middle;}


    .rightTopBgText >>> .el-table th {background-color: transparent;padding: 0;}
    .rightTopBgText >>> .el-table tr {background-color: transparent;}
    .rightTopBgText >>> .el-table td {border-bottom: none;padding: 0;}
    .rightTopBgText >>> .el-table th.is-leaf {border-bottom: none;}
    .rightTopBgText >>> .el-table__header-wrapper {height:40px;background: #0b3262;font-size: 16px;color: #36d2ff;line-height: 40px;}
    .rightTopBgText >>> .el-table th>.cell {color: #36d2ff;font-weight: 100;}
    .rightTopBgText >>> .el-table::before {height:0;}
    .rightTopBgText >>> .el-table__body-wrapper tr{height: 45px;color: #b6cde5;}
    .rightTopBgText >>> .el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar {width: 4px;}
    .rightTopBgText >>> .el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(16,46,75,1);
    }
    .rightTopBgText >>> .el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(0,0,0,0.1);
    }
    .rightTopBg2 >>> .el-table__header-wrapper {display: none;}

    .rightTopBg22 {width:100%;height:37px;line-height: 37px;padding-top: 13px;}
    .rightTopBg22 div {
        float:left;
        margin-right: 2px;
        background-image: url("../assets/quality/rightBottomSort.png");
        background-repeat: no-repeat;
        background-size: 107px 37px;
        width: 107px;
        height:37px;
        text-align: center;
        color: #1dadff;
        font-size: 18px;
    }
    .rightTopBg22 .actives {
        float:left;
        margin-right: 2px;
        background-image: url("../assets/quality/rightBottomAc.png");
        background-repeat: no-repeat;
        background-size: 107px 37px;
        width: 107px;
        height:37px;
        text-align: center;
        color: #ffa20f;
        font-size: 18px;
    }

    .left {width:100%;height:100%;position: relative;z-index: 1;overflow: hidden;}
    .date {width: 100%;text-align: center;padding: 0 28px;position: relative;}
    .leftBG {width:100%;height:auto;position: absolute;top:0;left:0;z-index: 0;}
    .left02 {width: 100%;height:auto;z-index: 0;}
    .dateSort {position: absolute;top:0;left:0;padding: 0 63px;z-index: 1;width: 100%;}
    .dateSort01 {width: 100%;height:53px;line-height: 53px;border-bottom: 1px dashed rgba(255,255,255,.2);text-align: left;color: #fff;}
    .dateSort01:last-child {border-bottom: transparent;}
    .dateSort02 {width:60%;position: relative;float:left;font-size: 21px;color: #fff;padding-left: 30px;}
    .dateSort02:before {
        content: '';
        width:8px;
        height:8px;
        border-radius: 50%;
        background: #4989ff;
        border: 2px solid #1abcff;
        position: absolute;
        left:5px;
        top:50%;
        margin-top: -4px;
    }
    .dateSort03 {width:40%;position: relative;float:left;font-size: 20px;}
    .dateSort03 span {font-family: 'jsq';color: #ffae00;font-size: 30px;}
    .approve {width: 100%;padding: 0 28px;position: relative;margin-top: 25px;}
    .approveTop {width: 100%;height:61px;
        background-image: url("../../src/assets/quality/left04.png");
        background-size: 100% 61px;
        line-height: 61px;color: #49bdff;font-size: 20px;padding-left: 55px;
    }
    .approveBottom div {width: 100%;height:29px;margin-bottom: 1px;background: rgba(255,255,255,.2);line-height: 29px;position: relative;color: #b6cde5;}
    .approveBottom div span {display: block;float:left;width:39px;text-align: center;background: rgba(255,255,255,.1);margin-right: 10px;}
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
        position: relative;
        margin: -27px 0 0 0;
        padding: 0 24px;
        height:100%;
    }

    .main .bodys {
        float: left;
        position: relative;
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
