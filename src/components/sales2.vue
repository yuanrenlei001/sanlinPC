<template>
    <div class="content">

        <div class="top" style="position: relative;z-index: 9999;">
            <el-row  >
                <el-col :span="6" class="" style="padding: 0;">
                    <router-link class="windows1 menu" to="/product">产业数据</router-link>
                    <router-link class="windows2 menu" to="/quality2">数字村民</router-link>
                    <router-link class="windows3 menu" to="/quality">生态文明</router-link>
                </el-col>
                <el-col :span="3" class="times"><img src="@/assets/index/time.png" alt=""></el-col>
                <el-col :span="6" style="opacity: 0;"><router-link  to="/" style="display: block;">123</router-link></el-col>
                <el-col :span="3" class="tianqi"><img src="@/assets/index/tianqi.png" alt=""></el-col>
                <el-col :span="6" class="cols windows" style="padding: 0;">
                    <router-link class="windows6 menu" to="/product2">乡村治理</router-link>
                    <router-link class="windows5 menu active" to="/sales2">乡村运营</router-link>
                    <router-link class="windows4 menu" to="/sales">生活服务</router-link>
                </el-col>
            </el-row>
        </div>
        <div class="main">
            <div class="bodys left" style="width:33.1%;">
                <div style="height:auto;margin-bottom: 23px;">
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
                            <div class="autoTopTexts">三林村总营收额 <img src="@/assets/sales/sales-icon03.png" alt=""></div>
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
                    <div class="autoBottomText">
                        <div class="autoBottom"><img src="@/assets/sales/sales-icon04.png" alt=""> 电商注册平台：<span
                                class="autoBottomNum">1</span><span class="autoBottomNum">3</span><span
                                class="autoBottomNum">4</span> <span class="autoBottomSpan">个</span></div>
                    </div>
                </div>
                <div class="autoBottom" style="position: relative;">
                    <div class="rightTop01" style="position: absolute;top:10%;">
                        <div class="rightTopText">最受欢迎的TOP5</div>
                    </div>
                    <div id="myChart3" :style="{width: '100%', height: '500px'}" style="padding-top: 10%;"></div>
                </div>
            </div>
            <div class="bodys" style="width:33.1%;">
                <div class="rightTop">
                    <div class="rightTop01">
                        <img src="@/assets/sales/sales-hr.png" class="rightTop01Img" alt="">
                        <div class="rightTopText">最受欢迎的TOP5</div>
                        <img src="@/assets/sales/sales-hr.png" alt="" class="rightTop01Img2">
                    </div>
                    <div class="rightTopTa">
                        <div class="rightTopTa01">
                            <div class="rightTopTa01-1"><img src="@/assets/sales/sales-top1.png" alt=""></div>
                            <div class="rightTopTa01-2"><span>三林海洋股份有限公司</span>-------------------------------</div>
                            <div class="rightTopTa01-3"><img src="@/assets/sales/sales-top1-1.png" alt=""></div>
                        </div>
                        <div class="rightTopTa01">
                            <div class="rightTopTa01-1"><img src="@/assets/sales/sales-top2.png" alt=""></div>
                            <div class="rightTopTa01-2"><span style="color: #e5cb54;">三林阁文化旅游集团有限公司</span>----------------------</div>
                            <div class="rightTopTa01-3"><img src="@/assets/sales/sales-top2-2.png" alt=""></div>
                        </div>
                        <div class="rightTopTa01">
                            <div class="rightTopTa01-1"><img src="@/assets/sales/sales-top3.png" alt=""></div>
                            <div class="rightTopTa01-2"><span style="color: #49bdff;">三林市供水总公司</span>------------------------------</div>
                            <div class="rightTopTa01-3"><img src="@/assets/sales/sales-top3-3.png" alt=""></div>
                        </div>
                        <div class="rightTopTa01">
                            <div class="rightTopTa01-1"><img src="@/assets/sales/sales-top4.png" alt=""></div>
                            <div class="rightTopTa01-2"><span style="color: #49bdff;">三林阁文化旅游集团有限公司</span>----------------------</div>
                            <div class="rightTopTa01-3"><img src="@/assets/sales/sales-top4-4.png" alt=""></div>
                        </div>
                        <div class="rightTopTa01">
                            <div class="rightTopTa01-1"><img src="@/assets/sales/sales-top5.png" alt=""></div>
                            <div class="rightTopTa01-2"><span style="color: #49bdff;">三林市供水总公司</span>------------------------------</div>
                            <div class="rightTopTa01-3"><img src="@/assets/sales/sales-top5-5.png" alt=""></div>
                        </div>
                    </div>
                </div>
                <div class="rightTop">
                    <div class="rightTop01">
                        <img src="@/assets/sales/sales-hr.png" class="rightTop01Img" alt="">
                        <div class="rightTopText">最受欢迎的TOP5</div>
                        <img src="@/assets/sales/sales-hr.png" alt="" class="rightTop01Img2">
                    </div>
                    <div class="rightTopTa">
                        <div class="rightTopTa01">
                            <div class="rightTopTa01-1"><img src="@/assets/sales/sales-top1.png" alt=""></div>
                            <div class="rightTopTa01-2"><span>三林海洋股份有限公司</span>-------------------------------</div>
                            <div class="rightTopTa01-3"><img src="@/assets/sales/sales-top1-1.png" alt=""></div>
                        </div>
                        <div class="rightTopTa01">
                            <div class="rightTopTa01-1"><img src="@/assets/sales/sales-top2.png" alt=""></div>
                            <div class="rightTopTa01-2"><span style="color: #e5cb54;">三林阁文化旅游集团有限公司</span>----------------------</div>
                            <div class="rightTopTa01-3"><img src="@/assets/sales/sales-top2-2.png" alt=""></div>
                        </div>
                        <div class="rightTopTa01">
                            <div class="rightTopTa01-1"><img src="@/assets/sales/sales-top3.png" alt=""></div>
                            <div class="rightTopTa01-2"><span style="color: #49bdff;">三林市供水总公司</span>------------------------------</div>
                            <div class="rightTopTa01-3"><img src="@/assets/sales/sales-top3-3.png" alt=""></div>
                        </div>
                        <div class="rightTopTa01">
                            <div class="rightTopTa01-1"><img src="@/assets/sales/sales-top4.png" alt=""></div>
                            <div class="rightTopTa01-2"><span style="color: #49bdff;">三林阁文化旅游集团有限公司</span>----------------------</div>
                            <div class="rightTopTa01-3"><img src="@/assets/sales/sales-top4-4.png" alt=""></div>
                        </div>
                        <div class="rightTopTa01">
                            <div class="rightTopTa01-1"><img src="@/assets/sales/sales-top5.png" alt=""></div>
                            <div class="rightTopTa01-2"><span style="color: #49bdff;">三林市供水总公司</span>------------------------------</div>
                            <div class="rightTopTa01-3"><img src="@/assets/sales/sales-top5-5.png" alt=""></div>
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
    import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
    export default {
        props: {number: {type: Number, default: 0}},
        name: "sales",
        components: {countTo},
        data() {
            return {
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
                computeNumber: ['0', '0', '2', '0', '7', '3', '2', '1', '4']
            };
        },
        methods: {
            drawLine() {
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
                        data: ['旅游收入', '产品销售收入'],
                        x: 'right',
                        y: 'canter',
                        padding: [50, 50, 0, 0],
                        textStyle: {color: '#ffffff'}
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
                            name: '月',
                            data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],

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
                            splitLine: {show: false},
                            type: 'value',
                            name: '万',
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
                            name: '旅游收入',
                            type: 'line',
                            xAxisIndex: 1,
                            data: [400, 300, 425, 400, 450, 250, 550, 380, 410, 390, 301, 400

                            ],
                            symbol: 'none',  //这句就是去掉点的
                            smooth: true,  //这句就是让曲线变平滑的
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: 'default',
                                        //渐变色实现
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, .8,//变化度
                                            //三种由深及浅的颜色
                                            [{
                                                offset: 0,
                                                color: 'rgba(230,164,5,.8)'
                                            }, {
                                                offset: 0.5,
                                                color: 'rgba(230,164,5,.4)'
                                            }, {
                                                offset: 1,
                                                color: 'rgba(230,164,5,.0)'
                                            }]),
                                    },
                                    lineStyle: {  //线的颜色
                                        color: '#fac202'
                                    },
                                }
                            }
                        },
                        {
                            name: '产品销售收入',
                            type: 'line',
                            smooth: true,
                            symbol: 'none',  //这句就是去掉点的
                            data: [350, 340, 320, 390, 350, 440, 400, 460, 330, 410, 490, 410],
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: 'default',
                                        //渐变色实现
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, .8,//变化度
                                            //三种由深及浅的颜色
                                            [{
                                                offset: 0,
                                                color: 'rgba(0,168,255,.8)'
                                            }, {
                                                offset: 0.5,
                                                color: 'rgba(0,168,255,.4)'
                                            }, {
                                                offset: 1,
                                                color: 'rgba(0,168,255,.0)'
                                            }]),
                                    },
                                    lineStyle: {  //线的颜色
                                        color: '#00c0ff'
                                    },
                                }
                            }
                        }
                    ]
                });
            },
            drawLine2() {
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
                    "color": ["#e6b418", '#0f94ff'],
                    legend: {
                        data: ['解决事项', '未解决事项'],
                        textStyle: {color: '#ffffff'}
                    },
                    xAxis: [
                        {
                            type: 'category',
                            name: '月',
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
                            name: "解决事项",
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
                            name: '未解决事项',
                            type: 'bar',
                            "barWidth": "12",
                            data: [200, 245, 350, 380, 260, 100, 130, 290, 170, 80, 90, 160]
                        },
                    ],
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
                // 基于准备好的dom，初始化echarts实例
                let myChart3 = this.$echarts.init(document.getElementById('myChart3'));
                let giftImageUrl = require('@/assets/sales/mapTitle.png');
                var mapName = 'china'
                var data = [
                    {"name": "南海诸岛", "value": 0, "itemStyle": {"normal": {"opacity": 0}}},
                    {name: "北京", value: 199},
                    {name: "天津", value: 42},
                    {name: "河北", value: 102},
                    {name: "山西", value: 81},
                    {name: "内蒙古", value: 47},
                    {name: "辽宁", value: 67},
                    {name: "吉林", value: 82},
                    {name: "黑龙江", value: 123},
                    {name: "上海", value: 24},
                    {name: "江苏", value: 92},
                    {name: "浙江", value: 114},
                    {name: "安徽", value: 109},
                    {name: "福建", value: 116},
                    {name: "江西", value: 91},
                    {name: "山东", value: 119},
                    {name: "河南", value: 137},
                    {name: "湖北", value: 116},
                    {name: "湖南", value: 114},
                    {name: "重庆", value: 91},
                    {name: "四川", value: 125},
                    {name: "贵州", value: 62},
                    {name: "云南", value: 83},
                    {name: "陕西", value: 80},
                    {name: "甘肃", value: 56},
                    {name: "青海", value: 10},
                    {name: "宁夏", value: 18},
                    {name: "广东", value: 123},
                    {name: "广西", value: 59},
                    {name: "海南", value: 14},
                ];

                var geoCoordMap = {};
                var toolTipData = [
                    // {"name": "南海诸岛","value": 0, "itemStyle":{ "normal":{"opacity":0}} },
                    {name: "北京", value: [{name: "科技人才总数", value: 95}, {name: "理科", value: 82}]},
                    {name: "天津", value: [{name: "文科", value: 22}, {name: "理科", value: 20}]},
                    {name: "河北", value: [{name: "文科", value: 60}, {name: "理科", value: 42}]},
                    {name: "山西", value: [{name: "文科", value: 40}, {name: "理科", value: 41}]},
                    {name: "内蒙古", value: [{name: "文科", value: 23}, {name: "理科", value: 24}]},
                    {name: "辽宁", value: [{name: "文科", value: 39}, {name: "理科", value: 28}]},
                    {name: "吉林", value: [{name: "文科", value: 41}, {name: "理科", value: 41}]},
                    {name: "黑龙江", value: [{name: "文科", value: 35}, {name: "理科", value: 31}]},
                    {name: "上海", value: [{name: "文科", value: 12}, {name: "理科", value: 12}]},
                    {name: "江苏", value: [{name: "文科", value: 47}, {name: "理科", value: 45}]},
                    {name: "浙江", value: [{name: "文科", value: 57}, {name: "理科", value: 57}]},
                    {name: "安徽", value: [{name: "文科", value: 57}, {name: "理科", value: 52}]},
                    {name: "福建", value: [{name: "文科", value: 59}, {name: "理科", value: 57}]},
                    {name: "江西", value: [{name: "文科", value: 49}, {name: "理科", value: 42}]},
                    {name: "山东", value: [{name: "文科", value: 67}, {name: "理科", value: 52}]},
                    {name: "河南", value: [{name: "文科", value: 69}, {name: "理科", value: 68}]},
                    {name: "湖北", value: [{name: "文科", value: 60}, {name: "理科", value: 56}]},
                    {name: "湖南", value: [{name: "文科", value: 62}, {name: "理科", value: 52}]},
                    {name: "重庆", value: [{name: "文科", value: 47}, {name: "理科", value: 44}]},
                    {name: "四川", value: [{name: "文科", value: 65}, {name: "理科", value: 60}]},
                    {name: "贵州", value: [{name: "文科", value: 32}, {name: "理科", value: 30}]},
                    {name: "云南", value: [{name: "文科", value: 42}, {name: "理科", value: 41}]},
                    {name: "陕西", value: [{name: "文科", value: 38}, {name: "理科", value: 42}]},
                    {name: "甘肃", value: [{name: "文科", value: 28}, {name: "理科", value: 28}]},
                    {name: "青海", value: [{name: "文科", value: 5}, {name: "理科", value: 5}]},
                    {name: "宁夏", value: [{name: "文科", value: 10}, {name: "理科", value: 8}]},
                    {name: "广东", value: [{name: "文科", value: 63}, {name: "理科", value: 60}]},
                    {name: "广西", value: [{name: "文科", value: 29}, {name: "理科", value: 30}]},
                    {name: "海南", value: [{name: "文科", value: 8}, {name: "理科", value: 6}]},
                ];

                /*获取地图数据*/
                myChart3.showLoading();
                var mapFeatures = echarts.getMap(mapName).geoJson.features;
                myChart3.hideLoading();
                mapFeatures.forEach(function (v) {
                    // 地区名称
                    var name = v.properties.name;
                    // 地区经纬度
                    geoCoordMap[name] = v.properties.cp;

                });

// console.log(data)
// console.log(toolTipData)
                var max = 480,
                    min = 9; // todo
                var maxSize4Pin = 100,
                    minSize4Pin = 20;

                var convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value),
                            });
                        }
                    }
                    return res;
                };

                window.onresize = myChart3.resize;
                // 绘制图表
                myChart3.setOption({
                    tooltip: {
                        padding: 0,
                        enterable: true,
                        transitionDuration: 1,
                        textStyle: {
                            color: '#rrrrrr',
                            decoration: 'none',
                        },
                        backgroundColor:'rgba(255,255,255,0)',
                        position: function (point, params, dom, rect, size) {
                            return [point[0], point[1]];
                        },
                        formatter: function (params) {
                            console.log(params.data == undefined)
                            // params.name
                            var tipHtml = '';
                            tipHtml = '<div style="position: relative;width: 185px;height:122px;">'
                                +'<img src="'+giftImageUrl+'" style="position: absolute;top:0;left:0;z-index: 0;">'
                                +'<div style="font-size: 18px;color: #fff;width: 100%;text-align: center;position: relative;z-index: 1;height:48px;line-height: 48px;">'+params.name+'</div>'
                                +'<div style="font-size: 14px;color: #fff;width: 100%;text-align: center;position: relative;z-index: 1;">产品销量 <span style="color: #ffa810;">'+(params.data !== undefined?params.data.value:0)+'</span> 吨</div>'
                                +'<div style="font-size: 14px;color: #fff;width: 100%;text-align: center;position: relative;z-index: 1;">占市场份额 <span style="color: #ffa810;">'+(params.data !== undefined?params.data.value:0)+'</span> %</div>'
                                +'</div>';
                            setTimeout(function () {
                                tooltipCharts(params.name);
                            }, 10);
                            return tipHtml;
                        }

                    },


                    geo: {
                        map: 'china',
                        aspectScale: 0.75,
                        regions: [
                            {
                                name: "南海诸岛",
                                value: 0,
                                itemStyle: {
                                    normal: {
                                        opacity: 0,
                                        label: {
                                            show: false
                                        }
                                    }
                                }
                            }
                        ],
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        silent: true,
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(147, 235, 248, 1)',
                                borderWidth: 0.5,
                                color: {
                                    type: 'linear-gradient',
                                    x: 0,
                                    y: 1500,
                                    x2: 2500,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(0,18,75,.5)' // 0% 处的颜色
                                    }],
                                    global: true // 缺省为 false
                                },
                            },
                            // emphasis: {
                            //     areaColor: 'rgba(0,18,75,.5)'
                            // }
                        },
                        z: 2
                    },
                    series: [
                        {

                            type: 'map',
                            map: 'china',
                            regions: [
                                {
                                    name: "南海诸岛",
                                    value: 0,
                                    itemStyle: {
                                        normal: {
                                            opacity: 0,
                                            label: {
                                                show: false
                                            }
                                        }
                                    }
                                }
                            ],
                            aspectScale: 0.75, //长宽比
                            showLegendSymbol: false, // 存在legend时显示
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                },

                            },
                            roam: false,
                            itemStyle: {
                                normal: {
                                    borderColor: '#2cb3dd',
                                    borderWidth: 0.8,
                                    areaColor: {
                                        type: 'linear-gradient',
                                        x: 1000,
                                        y: 600,
                                        x2: 1000,
                                        y2: 0,
                                        colorStops: [{
                                            offset: 0,
                                            color: '#0f5ae3' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: '#129ef4' // 50% 处的颜色
                                        }],
                                        global: true // 缺省为 false
                                    },
                                },
                                emphasis: {
                                    areaColor: '#0f5ae3'
                                }
                            },
                            animation: false,
                            data: data,
                            z: 2,
                            top: '7%',
                        },
                        {
                            name: 'Top 5',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: convertData(data.sort(function (a, b) {
                                return b.value - a.value;
                            }).slice(0, 10)),
                            symbolSize: function (val) {
                                return val[1] / 5;
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'left',
                                    show: false
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: 'yellow',
                                    shadowBlur: 10,
                                    shadowColor: 'yellow'
                                }
                            },
                            zlevel: 1
                        },
                    ]
                });
            },
        },
        mounted() {
            this.drawLine();
            this.drawLine2();
            this.drawLine3();
            this.increaseNumber();
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
