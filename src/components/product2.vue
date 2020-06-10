<template>
    <div class="content">

        <div class="top" style="position: relative;z-index: 9999;">
            <el-row  >
                <el-col :span="6" class="" style="padding: 0;">
                    <router-link class="windows1 menu" to="/product">产业数据</router-link>
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
                    <router-link class="windows6 menu  active" to="/product2">乡村治理</router-link>
                    <router-link class="windows5 menu" to="/sales2">乡村运营</router-link>
                    <router-link class="windows4 menu" to="/sales">生活服务</router-link>
                </el-col>
            </el-row>
        </div>
        <div class="main" >
            <div class="bodys" style="width:464px;margin-right: 13px;">
                <div class="grid-content" style="height:324px;">
                    <img src="@/assets/news/bg01.png" alt="" style="width: 100%;">
                    <div style="position: absolute;top:0;width: 100%;height:300px;">
                        <div class="rightBottomTitle">人群分布</div>
                        <div class="leftText" style="position: absolute;top:0;width: 100%;">
                            <div id="myChart2" :style="{width: '100%', height: '300px'}"></div>
                        </div>
                    </div>
                </div>
                <div class="grid-content" style="margin: 16px 0 16px 0;">
                    <img src="@/assets/news/bg05.png" alt="" style="width: 100%;">
                    <div class="rightBottomTitle" style="position: absolute;top:0;">法治</div>
                    <div class="fazhi">
                        <div class="fazhi01">
                            <div class="news-zbsj-01"><span>·</span> 村民调解员</div>
                            <div class="rightTop01-text01" style="font-size: 22px;font-weight: bold;height:48px;line-height: 48px;">沈建冬</div>
                        </div>
                        <div class="fazhi01">
                            <div class="news-zbsj-01"><span>·</span> 调解次数</div>
                            <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal5' :duration='5000'></countTo>件</div>
                        </div>
                        <img src="@/assets/index/hr.png" class="hr" alt="">
                        <div class="fazhi01">
                            <div class="news-zbsj-01"><span>·</span> 村民法律顾问</div>
                            <div class="rightTop01-text01" style="font-size: 22px;font-weight: bold;height:48px;line-height: 48px;">夏胜晨</div>
                        </div>
                        <div class="fazhi01">
                            <div class="news-zbsj-01"><span>·</span> 法律咨询次数</div>
                            <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal6' :duration='5000'></countTo>件</div>
                        </div>
                    </div>
                </div>
                <div class="grid-content">
                    <img src="@/assets/news/bg07.png" alt="" style="height:278px;">
                    <div class="rightBottomTitle" style="position: absolute;top:0;">河塘治理</div>
                    <div class="rightTopBgText">
                        <el-table
                                :data="tableData3"
                                height="210"
                                style="width: 100%;background: transparent;">
                            <el-table-column width="200" prop="name" label="巡逻员"></el-table-column>
                            <el-table-column prop="pro" label="巡逻距离"></el-table-column>
                            <el-table-column prop="prosort" label="巡检次数"></el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
            <div class="bodys" style="width: 941px;">
                <div style="height:324px;">
                    <div style="float:left;width: 50%;">
                        <div style="position: relative;">
                            <img src="@/assets/news/bg02.png" alt="" style="height:156px;">
                            <div class="rightBottomTitle" style="position: absolute;top:0;">最多跑一次</div>
                            <div class="news-zbsj">
                                <div class="news-zbsj-sort">
                                    <div class="news-zbsj-01"><span>·</span> 在办事件</div>
                                    <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal' :duration='5000'></countTo>件</div>
                                </div>
                                <div class="news-zbsj-sort">
                                    <div class="news-zbsj-01"><span>·</span> 已办事件</div>
                                    <div class="rightTop01-text01" style="color: #ff5e48;"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal1' :duration='5000'></countTo>件</div>
                                </div>
                                <div class="news-zbsj-sort">
                                    <div class="news-zbsj-01"><span>·</span> 办结率</div>
                                    <div class="rightTop01-text01" style="color: #ffba00;"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal2' :duration='5000'></countTo>%</div>
                                </div>
                            </div>
                        </div>
                        <div style="margin-top: 10px;position: relative;">
                            <img src="@/assets/news/bg02.png" alt="" style="height:156px;">
                            <div class="rightBottomTitle" style="position: absolute;top:0;">三务公开</div>
                            <div class="sanwu">
                                <img src="@/assets/news/icon01.png" alt="">
                                <div class="sanwu01">
                                    <p class="sanwu02">三务公开次数</p>
                                    <div class="sanwu03">
                                        <div class="rightTop01-text01" style="color: #48e3ff;"><countTo style="margin-left: 0;" class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal3' :duration='10000'></countTo>次
<!--                                          <span class="newsMore">查看更多新闻</span>-->
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="float:left;width: 50%;">
                        <div style="position: relative;height:324px;">
                            <img src="@/assets/news/bg01.png" alt="" >
                            <div style="position: absolute;top:0;width: 100%;height:300px;">
                                <div class="rightBottomTitle">土地规划</div>
                                <div class="leftText">
                                    <div id="myChart" :style="{width: '100%', height: '200px'}"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 16px;position: relative;">
                    <img src="@/assets/news/bg06.png" alt="" style="">
                    <div class="rightBottomTitle" style="position: absolute;top:0;">垃圾分类</div>
                    <div class="laji">
                        <div class="lajiSort">
                            <div class="lajiTop">
                                <img src="@/assets/news/icon03.png" alt="" class="cubeBottomLeftImg01">
                                <img src="@/assets/news/ic01.png" alt="" class="cubeBottomLeftImg02">
                            </div>
                            <div style="font-size: 18px;color: #fff;margin-top: 10px;">保洁员</div>
                            <div class="user">
                                <span>周金祥</span>
<!--                              <img src="@/assets/news/icon04.png" alt="" class="ic04"><img src="@/assets/news/icon05.png" alt="" class="ic05">-->
                            </div>
                        </div>
                        <div class="lajiSort">
                            <div class="lajiTop">
                                <img src="@/assets/news/icon03.png" alt="" class="cubeBottomLeftImg01">
                                <img src="@/assets/news/ic02.png" alt="" class="cubeBottomLeftImg02">
                            </div>
                            <div style="font-size: 18px;color: #fff;margin-top: 10px;">分类巡逻员</div>
                            <div class="user">
                                <span>姚武杰</span>
<!--                              <img src="@/assets/news/icon04.png" alt="" class="ic04"><img src="@/assets/news/icon05.png" alt="" class="ic05">-->
                            </div>
                        </div>
                        <div class="lajiSort">
                            <div class="lajiTop">
                                <img src="@/assets/news/icon03.png" alt="" class="cubeBottomLeftImg01">
                                <img src="@/assets/news/ic03.png" alt="" class="cubeBottomLeftImg02">
                            </div>
                            <div style="font-size: 18px;color: #fff;margin-top: 10px;">参与率</div>
                            <div class="user">
                                <div class="rightTop01-text01" ><countTo style="font-size: 30px;" class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal001' :duration='5000'></countTo>%</div>
                            </div>
                        </div>
                        <div class="lajiSort">
                            <div class="lajiTop">
                                <img src="@/assets/news/icon03.png" alt="" class="cubeBottomLeftImg01">
                                <img src="@/assets/news/ic04.png" alt="" class="cubeBottomLeftImg02">
                            </div>
                            <div style="font-size: 18px;color: #fff;margin-top: 10px;">分类准确率</div>
                            <div class="user">
                                <div class="rightTop01-text01"><countTo style="font-size: 30px;" class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal002' :duration='5000'></countTo>%</div>
                            </div>
                        </div>
                        <div class="lajiSort">
                            <div class="lajiTop">
                                <img src="@/assets/news/icon03.png" alt="" class="cubeBottomLeftImg01">
                                <img src="@/assets/news/ic05.png" alt="" class="cubeBottomLeftImg02">
                            </div>
                            <div style="font-size: 18px;color: #fff;margin-top: 10px;">无垃圾</div>
                            <div class="user">
                                <div class="rightTop01-text01"><countTo style="font-size: 30px;" class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal003' :duration='5000'></countTo>户</div>
                            </div>
                        </div>
                        <div class="lajiSort">
                            <div class="lajiTop">
                                <img src="@/assets/news/icon03.png" alt="" class="cubeBottomLeftImg01">
                                <img src="@/assets/news/ic06.png" alt="" class="cubeBottomLeftImg02">
                            </div>
                            <div style="font-size: 18px;color: #fff;margin-top: 10px;">有垃圾</div>
                            <div class="user">
                                <div class="rightTop01-text01"><countTo style="font-size: 30px;" class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal004' :duration='5000'></countTo>户</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 16px;">
                    <div style="float:left;width: 50%;">
                        <div class="grid-content">
                            <img src="@/assets/news/bg07.png" alt="" style="width: 100%;">
                            <div class="rightBottomTitle" style="position: absolute;top:0;">美丽公路</div>
                            <div class="rightTopBgText">
                                <el-table
                                        :data="tableData4"
                                        height="210"
                                        style="width: 100%;background: transparent;">
                                    <el-table-column width="200" prop="name" label="路长"></el-table-column>
                                    <el-table-column prop="pronum" label="巡逻路段"></el-table-column>
                                </el-table>
                            </div>
                        </div>
                    </div>
                    <div style="float:left;width: 50%;">
                        <div class="grid-content">
                            <img src="@/assets/news/bg07.png" alt="" style="width: 100%;">
                            <div class="rightBottomTitle" style="position: absolute;top:0;">平安乡村</div>
                            <div class="rightTopBgText">
                                <el-table
                                        :data="tableData5"
                                        height="210"
                                        style="width: 100%;background: transparent;">
                                    <el-table-column width="200" prop="name" label="安导员"></el-table-column>
                                    <el-table-column prop="proliang" label="巡逻时段"></el-table-column>
                                </el-table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="bodys" style="margin-left: 12px;width: 464px;">
                <div class="grid-content">
                    <img src="@/assets/news/bg02.png" alt="" style="width: 100%;">
                    <div class="rightBottomTitle" style="position: absolute;top:0;">脱贫检测</div>
                    <div class="sanwu">
                        <img src="@/assets/news/icon01.png" alt="">
                        <div class="sanwu01">
                            <p class="sanwu02">脱贫人口数</p>
                            <div class="sanwu03">
                                <div class="rightTop01-text01" style="color: #48e3ff;"><countTo style="margin-left: 0;" class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal4' :duration='10000'></countTo>人</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-content" style="margin-top: 16px;">
                    <img src="@/assets/news/bg04.png" alt="" style="width: 100%;">
                    <div class="rightBottomTitle" style="position: absolute;top:0;">智慧党建</div>
                    <div style="position: absolute;top:45px;left:0;">
                        <div class="rightTop01">
                            <img src="@/assets/sales/sales-hr.png" class="rightTop01Img" alt="">
                            <div class="rightTopText">年度工作计划</div>
                            <img src="@/assets/sales/sales-hr.png" alt="" class="rightTop01Img2">
                        </div>
                        <div class="news-zbsjs">
                            <div class="news-zbsj-sort">
                                <div class="news-zbsj-01s"><span>·</span> 计划数量</div>
                                <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal01' :duration='5000'></countTo>个</div>
                            </div>
                            <div class="news-zbsj-sort">
                                <div class="news-zbsj-01s"><span>·</span> 任务数量</div>
                                <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal02' :duration='5000'></countTo>项</div>
                            </div>
                            <div class="news-zbsj-sort">
                                <div class="news-zbsj-01s"><span>·</span> 完成进度</div>
                                <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal03' :duration='5000'></countTo>%</div>
                            </div>
                        </div>
                        <div class="rightTop01">
                            <img src="@/assets/sales/sales-hr.png" class="rightTop01Img" alt="">
                            <div class="rightTopText">党员考核结果</div>
                            <img src="@/assets/sales/sales-hr.png" alt="" class="rightTop01Img2">
                        </div>
                        <div class="news-zbsjs">
                            <div class="news-zbsj-sort">
                                <div class="news-zbsj-01s"><span>·</span> 100分</div>
                                <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal04' :duration='5000'></countTo>个</div>
                            </div>
                            <div class="news-zbsj-sort">
                                <div class="news-zbsj-01s"><span>·</span> 90-99分</div>
                                <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal05' :duration='5000'></countTo>个</div>
                            </div>
                            <div class="news-zbsj-sort">
                                <div class="news-zbsj-01s"><span>·</span> 80-89分</div>
                                <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal06' :duration='5000'></countTo>个</div>
                            </div>
                            <img src="@/assets/news/icon02.png" class="hr" alt="">
                            <div class="news-zbsj-sort">
                                <div class="news-zbsj-01s"><span>·</span> 70-79分</div>
                                <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal07' :duration='5000'></countTo>个</div>
                            </div>
                            <div class="news-zbsj-sort">
                                <div class="news-zbsj-01s"><span>·</span> 60-69分</div>
                                <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal08' :duration='5000'></countTo>个</div>
                            </div>
                            <div class="news-zbsj-sort">
                                <div class="news-zbsj-01s"><span>·</span> 60分以下</div>
                                <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal09' :duration='5000'></countTo>个</div>
                            </div>
                        </div>
                        <div class="rightTop01">
                            <img src="@/assets/sales/sales-hr.png" class="rightTop01Img" alt="">
                            <div class="rightTopText">党员实绩公示</div>
                            <img src="@/assets/sales/sales-hr.png" alt="" class="rightTop01Img2">
                        </div>
                        <div class="fazhi" style="position: relative;top:0;left:0;">
                            <div class="fazhi01">
                                <div class="news-zbsj-01"><span>·</span> 参与人数</div>
                                <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal10' :duration='5000'></countTo>个</div>
                            </div>
                            <div class="fazhi01">
                                <div class="news-zbsj-01"><span>·</span> 实际成绩完成率</div>
                                <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal11' :duration='5000'></countTo>%</div>
                            </div>
                        </div>
                        <div class="rightTop01">
                            <img src="@/assets/sales/sales-hr.png" class="rightTop01Img" alt="">
                            <div class="rightTopText">本月党员走访</div>
                            <img src="@/assets/sales/sales-hr.png" alt="" class="rightTop01Img2">
                        </div>
                        <div class="fazhi" style="position: relative;top:0;left:0;">
                            <div class="fazhi01">
                                    <div class="news-zbsj-01"><span>·</span> 党员走访</div>
                                    <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal12' :duration='5000'></countTo>个</div>
                            </div>
                            <div class="fazhi01">
                                <div class="news-zbsj-01"><span>·</span> 完成率</div>
                                <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal13' :duration='5000'></countTo>%</div>
                            </div>
                        </div>
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
              nowDate: "",
              nowTime: "",
              nowWeek: "",
                staImg1: require('@/assets/index/menu.png'),
                staImg2: require('@/assets/sales/mapTitle.png'),
                num: 0,
                numTween: 0,
                startVal: 0,
                endVal: 180,
                endVal1: 180,
                endVal2: 100,
                endVal3: 12,
                endVal4: 10,
                endVal5: 12,
                endVal6: 1,
                endVal01: 1,
                endVal02: 12,
                endVal03: 100,
                endVal04: 12,
                endVal05: 78,
                endVal06: 6,
                endVal07: 0,
                endVal08: 0,
                endVal09: 0,
                endVal10: 96,
                endVal11: 100,
                endVal12: 96,
                endVal13: 100,
                endVal001: 100,
                endVal002: 99,
                endVal003: 23,
                endVal004: 982,
                computeNumber: ['0', '9', '6', '9', '4', '3', '3', '2', '6'],
                tableData3: [
                    {name: '蔡法坤', pro: '4000', prosort: '289',pronum:'三林村口',proliang:'3月20日3点-5点',time:'2019-09-14'},
                    {name: '卞兴泉', pro: '4000', prosort: '289',pronum:'三林村委附近',proliang:'3月20日5点-7点',time:'2019-09-14'},
                    {name: '范荣泉', pro: '4000', prosort: '289',pronum:'三林国际农庄门口',proliang:' 3月20日7点-9点',time:'2019-09-14'},
                    {name: '沈小林', pro: '1500', prosort: '289',pronum:'三林精品荷田旁',proliang:'3月20日9点-11点',time:'2019-09-14'},
                ],
              tableData4: [
                {name: '姚文仙', pro: '1123', prosort: '14',pronum:'三林村口',proliang:'3月20日3点-5点',time:'2019-09-14'},
                {name: '蔡杏定', pro: '5024', prosort: '58',pronum:'三林村委附近',proliang:'3月20日5点-7点',time:'2019-09-14'},
                {name: '周梅珍', pro: '2045', prosort: '23',pronum:'三林国际农庄门口',proliang:' 3月20日7点-9点',time:'2019-09-14'},
                {name: '曹坤仙', pro: '4527', prosort: '34',pronum:'三林精品荷田旁',proliang:'3月20日9点-11点',time:'2019-09-14'},
              ],
              tableData5: [
                {name: '沈建冬', pro: '1123', prosort: '14',pronum:'三林村口',proliang:'3月20日3点-5点',time:'2019-09-14'},
                {name: '赵兴泉', pro: '5024', prosort: '58',pronum:'三林村委附近',proliang:'3月20日5点-7点',time:'2019-09-14'},
                {name: '沈华峰', pro: '2045', prosort: '23',pronum:'三林国际农庄门口',proliang:' 3月20日7点-9点',time:'2019-09-14'},
                {name: '沈寿昌', pro: '4527', prosort: '34',pronum:'三林精品荷田旁',proliang:'3月20日9点-11点',time:'2019-09-14'},
              ],
            };
        },
        methods: {
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
                                width: 188,
                                height: 188
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
                                {value: 2, name: '工业用地',itemStyle:{color:'#31b9e4'}},
                                {value: 40, name: '林地',itemStyle:{color:'#1172e1'}},
                                {value: 48, name: '农业用地',itemStyle:{color:'#d87017'}},
                                {value: 10, name: '宅基地',itemStyle:{color:'#f0d22d'}},
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
            drawLine2(){
                let myChart = this.$echarts.init(document.getElementById('myChart2'));
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
                                width: 188,
                                height: 188
                            },
                            left: 'center',
                            top: 'center'
                        }]
                    },
                    legend: {
                        left: 'center',
                        top: 'bottom',
                        padding:[100,50,0,0],
                        textStyle: {
                            color: "#fff"
                        },
                        data: ['一般人员', '低保边缘户', '低保贫困户','特困户']
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: ["9%", "10%"],
                            center: ['50%', '50%'],
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
                            radius: ['25%', '40%'],
                            center: ['50%', '50%'],
                            zlevel:10,
                            label: {
                                normal: {
                                    formatter: '{d}%  ',

                                        show:true,
                                },
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 0.5, name: '低保贫困户',itemStyle:{color:'#5ae1cc'}},
                                {value: 0.3, name: '低保边缘户',itemStyle:{color:'#d87117'}},
                                {value: 99.1, name: '一般人员',itemStyle:{color:'#0864da'}},
                                {value: 0.1, name: '特困户',itemStyle:{color:'#bb0004'}},
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
            // this.drawLine3();
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
    .user {position: relative;margin-top: 10px;}
    .user span {font-size: 22px;color: #48e3ff;}
    .ic04 {vertical-align: middle;margin-left: 5px;}
    .ic05 {position: absolute;top:-24px;right:0;display: none;}
    @-webkit-keyframes rotations{
        from {-webkit-transform: rotate(360deg);}
        to {-webkit-transform: rotate(0deg);}
    }
    @-webkit-keyframes rotation{
        from {-webkit-transform: rotate(0deg);}
        to {-webkit-transform: rotate(360deg);}
    }
    .cubeBottomLeftImg01 {
        width: 99px;
        height:99px;
        -webkit-transform: rotate(360deg);
        animation: rotation 3s linear infinite;
        -moz-animation: rotation 3s linear infinite;
        -webkit-animation: rotation 3s linear infinite;
        -o-animation: rotation 3s linear infinite;
    }
    .cubeBottomLeftImg02 {
        position: absolute;
        top:50%;
        margin-top: -15px;
        left:50%;
        margin-left: -15px;
        width: 30px;
        height:30px;
    }
    .lajiTop {position: relative;margin-top: 20px;}
    .laji {position: absolute;top:45px;left:0;width: 100%;}
    .lajiSort {width: 16.66%;text-align: center;float:left;}
    .hr {position: relative;width: 90%;height:1px;left:5%;}
    .fazhi {position: absolute;top:45px;left:0;width: 100%;}
    .fazhi01 {width: 48%;text-align: center;float:left;height:103px;}
    .newsMore {color: #48bcff;font-size: 14px;}
    .sanwu {position: absolute;top:65px;left:20%;}
    .sanwu img {float:left;width: 82px;height:70px;}
    .sanwu01 {margin-left: 102px;text-align: left;}
    .sanwu02 {color: #fff;font-size: 18px;}
    .rightTop01-text-num {font-size: 40px;font-family: 'jsq';margin-left: 10%;}
    .news-zbsj-sort {width: 33.33%;float:left;text-align: center;}
    .news-zbsj-01 {font-size: 18px;color: #fff;padding-top: 20px;}
    .news-zbsj-01s {font-size: 18px;color: #fff;padding-top: 10px;}
    .news-zbsj-01 span {color: #ff9600;}
    .news-zbsj-01s span {color: #ff9600;}
    .news-zbsj {position: absolute;top:45px;left:0;width: 100%;}
    .news-zbsjs {position: relative;width: 100%;}
    .rightTop01-text01 {font-size: 12px;color: #48e3ff;}
    .rightBottomTitle {width: 100%;line-height: 45px;color: #fff;font-size: 20px;position: relative;margin-left: 28px;padding-bottom: 5%;}
    .rightTopBgText {position: absolute;top:55px;left:0;padding: 0 15px;width: 95%;}
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
    .grid-content {position: relative;}
    .bottomTopText {line-height: 88px;font-size: 24px;}
    .bottomTopText img {vertical-align: middle;}
    .bottomTop {width: 50%;float:left;text-align: center;}
    .rightTop01 {width:100%;padding: 0 30px;position: relative;}
    .rightTop01Img {width: 100%;}
    .rightTop01Img2 {width: 100%;}
    .rightTopText {position: relative;height:20px;line-height: 30px;color: #1dadff;font-size: 18px;margin: auto;text-align: left;padding-left: 30px;}
    .rightTopText:before {
        content: '';
        background-image: url("../assets/quality/rightTopIcon.png");
        background-repeat: no-repeat;
        background-size: 21px 18px;
        width:21px;height:18px;
        position: absolute;
        top:70%;
        margin-top: -9px;
        left:0;
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
        padding: 0 12px;
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
