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
          <router-link class="windows5 menu" to="/sales2">乡村运营</router-link>
          <router-link class="windows4 menu" to="/sales">生活服务</router-link>
        </el-col>
      </el-row>
    </div>
    <div class="main" style="height:100%;">
      <div class="bodys left" style="width:27.3%;">
          <!--<div class="btnss large red button">I'm Glowing!</div>-->
            <div style="height:auto;margin-bottom: 23px;position: relative;" ref="element">
                <img src="@/assets/index/leftBottom.png" alt="" class="leftTopImg">
                <div class="rightBottomTitle" style="position: absolute;top:0;">总指数变动贡献率测度</div>
                <div class="leftText"><div id="myChart" :style="{width: '100%', height: height}"></div></div>
            </div>
            <div class="donghua2" style="height:auto;position: relative;">
                <img src="@/assets/index/leftBottom.png" alt="" style="width: 100%;">
                <div style="position: absolute;top:0;width:100%;" class="jdt">
                    <el-select v-model="value" :popper-append-to-body="false" placeholder="请选择" @change="onSelectedDrug" popper-class="el-popper" style="background-color: #030813;">
                        <el-option
                                v-for="item in options"

                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <img src="@/assets/index/leftYear.png" alt="" class="leftYear">
                    <div class="leftBottomTitle">
                        <div class="leftBottomTitle01"><img src="@/assets/index/leftTtileIcon01.png" alt=""> 指数：<span>{{selects.data0}}</span></div>
                        <div class="leftBottomTitle02"><img src="@/assets/index/leftTtileIcon02.png" alt=""> 增长幅度：<span>{{selects.data1}}</span></div>
                    </div>
                    <div class="leftBottomBg" style="padding-top: 22px;">
                        <div class="leftBottomBg01" v-for="(item,index) in selects.obj">
                            <p style="font-size: 16px;color: #fff;margin-bottom: 5px;" >{{item.name}}</p>
                            <el-progress :text-inside="false" :stroke-width="27" :percentage="(item.value/2)"  :color="customColor[index]" style="font-size: 18px;"></el-progress>
                            <div style="position: absolute;bottom:0;right:0;line-height: 27px;color: #48e3ff;">{{item.value}}%</div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
        <div class="bodys" style="width:45.4%;height:100%;">
          <div class="cube-warper">
              <canvas id="canvas" width="100%" height="100%"></canvas>
              <div class="cubeTop">
                  <img src="@/assets/index/autoBottom.png" alt="" class="autoBg">
                  <div class="cubeTop01">
                      <img src="@/assets/index/xx05.png" alt="" class="xx01">
                      <img src="@/assets/index/xx05.png" alt="" class="xx02">
                      <img src="@/assets/index/xx05.png" alt="" class="xx03">
                      <img src="@/assets/index/xx05.png" alt="" class="xx04">
                      <img src="@/assets/index/xx05.png" alt="" class="xx05">
                      总指数和一级指数
                  </div>
              </div>
              <div class="cubeMain">
                  <div class="cubeMains cubeMain01 ">
                      <div class="cube-box cube-box1" id="cube-box1">
                          <div class="cube1 cube"></div>
                          <div class="cube3 cube"></div>
                          <div class="cube5 cube"></div>
                      </div>
                      <div class="shadow">125.28</div>
                      <div class="text"><span class="hrs"></span>总指数</div>
                  </div>
                  <div class="cubeMains cubeMain02">
                      <div class="cube-box cube-box2" id="cube-box2">
                          <div class="cube1 cube"></div>
                          <div class="cube3 cube"></div>
                          <div class="cube5 cube"></div>
                      </div>
                      <div class="shadow">145.14</div>
                      <div class="text"><span class="hrs"></span>生态绿色化</div>
                  </div>
                  <div class="cubeMains cubeMain03">
                      <div class="cube-box cube-box3" id="cube-box3">
                          <div class="cube1 cube"></div>
                          <div class="cube3 cube"></div>
                          <div class="cube5 cube"></div>
                      </div>
                      <div class="shadow">134.98</div>
                      <div class="text"><span class="hrs"></span>要素高端化</div>
                  </div>
                  <div class="cubeMains cubeMain04">
                      <div class="cube-box cube-box4" id="cube-box4">
                          <div class="cube1 cube"></div>
                          <div class="cube3 cube"></div>
                          <div class="cube5 cube"></div>
                      </div>
                      <div class="shadow">113.44</div>
                      <div class="text"><span class="hrs"></span>治理现代化</div>
                  </div>
                  <div class="cubeMains cubeMain05">
                      <div class="cube-box cube-box5" id="cube-box5">
                          <div class="cube1 cube"></div>
                          <div class="cube3 cube"></div>
                          <div class="cube5 cube"></div>
                      </div>
                      <div class="shadow">107.38</div>
                      <div class="text"><span class="hrs"></span>生活智慧化</div>
                  </div>
                  <div class="cubeMains cubeMain06">
                      <div class="cube-box cube-box6" id="cube-box6">
                          <div class="cube1 cube"></div>
                          <div class="cube3 cube"></div>
                          <div class="cube5 cube"></div>
                      </div>
                      <div class="shadow">127.36</div>
                      <div class="text"><span class="hrs"></span>产业数字化</div>
                  </div>
              </div>
              <div class="cubeBottom">
                  <div class="cubeBottomLeft" style="margin-right: 8%;">
                      <div class="cubeBottomLeft01" style="float: right;">
                          <img src="@/assets/index/autoIcon04.png" alt="">
                          <img src="@/assets/index/autoIcon01.png" alt="" class="cubeBottomLeftImg01">
                          <img src="@/assets/index/autoIcon02.png" alt="" class="cubeBottomLeftImg02">
                          <img src="@/assets/index/autoIcon03.png" alt="" class="cubeBottomLeftImg03">
                          <div class="cubeBottomLeft02">
                              <p>134.98</p>
                              <p>指数</p>
                          </div>
                      </div>
                  </div>
                  <div class="cubeBottomLeft" >
                      <div class="cubeBottomLeft01" style="float: left;">
                          <img src="@/assets/index/autoIcon04.png" alt="">
                          <img src="@/assets/index/autoIcon01.png" alt="" class="cubeBottomLeftImg01">
                          <img src="@/assets/index/autoIcon02.png" alt="" class="cubeBottomLeftImg02">
                          <img src="@/assets/index/autoIcon06.png" alt="" class="cubeBottomLeftImg03">
                          <div class="cubeBottomLeft02">
                              <p>34.98%</p>
                              <p>增长幅度</p>
                          </div>
                      </div>
                  </div>
                  <div class="years">
                      <img src="@/assets/index/autoYear.png" alt="" class="yearsImg">
                      <img src="@/assets/index/xx05.png" alt="" class="xx001">
                      <img src="@/assets/index/xx05.png" alt="" class="xx002">
                      <img src="@/assets/index/xx05.png" alt="" class="xx003">
                  </div>
              </div>
          </div>
      </div>
      <div class="bodys" style="width:27.3%;">
              <div class="donghua" style="height:auto;margin-bottom: 23px;position: relative;" ref="element">
                  <img src="@/assets/index/rightTop.png" alt="" class="leftTopImg">
                  <div class="rightTop">
                      <div class="rightTop01">
                          <div class="rightTop01-img">
                              <img src="@/assets/index/icon-deng.png" alt="" class="dizhuo">
                              <img src="@/assets/index/icon-deng-1.png" alt="" class="icon-deng">
                          </div>
                          <div class="rightTop01-text">
                              <div class="rightTop01-text01"><countTo class="rightTop01-text-num" ref='example' :startVal='startVal' :endVal='endVal' :duration='10000'></countTo>万</div>
                              <div class="rightTop01-text02">数字乡村平台投入</div>
                          </div>
                      </div>
                      <img src="@/assets/index/hr.png" class="hr" alt="">
                      <div class="rightTop02">
                          <div class="rightTop02Left" >
                              <div class="rightTop02-img">
                                  <img src="@/assets/index/icon-deng.png" alt="" class="dizhuo">
                                  <img src="@/assets/index/icon-deng-2.png" alt="" class="icon-deng2">
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
                          <div class="rightTop02Left" >
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
              <div class="donghua3" style="height:auto;position: relative;">
                  <img src="@/assets/index/rightBottom.png" alt="" class="rightBottomImg">
                  <div class="rightBottomTitle">三林简介</div>
                  <div id="demo" class="rightBottomText">
                      <ul id="demo1">
                          <li>三林村地处禹越镇西北部，东临高桥村，南接夏东村，西靠新 安镇，北交新市镇，村委驻地与镇政府所在地相距8公里。村地域面 积5.8平方公里，拥有水田3070亩、桑地1291亩、鱼塘460亩。</li>
                          <li>创新传承在中华民族的血脉之中、蕴含在马克思主义基本原理 之中、印刻在我们“新农人”的基因之中。创新离我们很近，哪怕 是迈出一小步、想一个小点子也是创新，我们每一个人身上都有创 。</li>
                          <li>三林村地处禹越镇西北部，东临高桥村，南接夏东村，西靠新 安镇，北交新市镇，村委驻地与镇政府所在地相距8公里。村地域面 积5.8平方公里，拥有水田3070亩、桑地1291亩、鱼塘460亩。</li>
                          <li>创新传承在中华民族的血脉之中、蕴含在马克思主义基本原理 之中、印刻在我们“新农人”的基因之中。创新离我们很近，哪怕 是迈出一小步、想一个小点子也是创新，我们每一个人身上都有创 。</li>
                      </ul>
                      <div id="demo2"></div>
                  </div>

                  <!--<div class="rightBottomText rollCon" id="rollCon">-->
                      <!---->
                      <!---->
                      <!--<ul>-->
                          <!--<li>三林村地处禹越镇西北部，东临高桥村，南接夏东村，西靠新 安镇，北交新市镇，村委驻地与镇政府所在地相距8公里。村地域面 积5.8平方公里，拥有水田3070亩、桑地1291亩、鱼塘460亩。</li>-->
                          <!--<li>创新传承在中华民族的血脉之中、蕴含在马克思主义基本原理 之中、印刻在我们“新农人”的基因之中。创新离我们很近，哪怕 是迈出一小步、想一个小点子也是创新，我们每一个人身上都有创 。</li>-->
                          <!--<li>三林村地处禹越镇西北部，东临高桥村，南接夏东村，西靠新 安镇，北交新市镇，村委驻地与镇政府所在地相距8公里。村地域面 积5.8平方公里，拥有水田3070亩、桑地1291亩、鱼塘460亩。</li>-->
                          <!--<li>创新传承在中华民族的血脉之中、蕴含在马克思主义基本原理 之中、印刻在我们“新农人”的基因之中。创新离我们很近，哪怕 是迈出一小步、想一个小点子也是创新，我们每一个人身上都有创 。</li>-->
                      <!--</ul>-->
                  <!--</div>-->
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
          _inter:'',
          _select:'',
          timeOut:true,
          height:'400px',
        staImg1:require('@/assets/index/menu.png'),
        num: 0,
        numTween: 0,
        startVal: 0,
        endVal: 364,
        endVal2: 9,
        endVal3: 300,
        endVal4: 36867,
          percentage: [0,0,0,0],
          customColor: ['#cf830e','#21a692','#0d82db','#bb0004'],
        endVal5: 9.43, heights:['165px','240px','220px','135px','115px','175px'],
          selects:'',
          options: [
              {
              value: '0',
              label: '生态绿色化指数分析',
              data0:'145.14',
              data1:'45.14%',
              obj:[
                  {name:'生态绿色化指数',value:'145.14'},
                  {name:'环境保护指数',value:'178.57'},
                  {name:'污染防治指数',value:'166.37'},
                  {name:'资源利用指数',value:'135.63'},
              ]
          },
              {
                  value: '1',
                  label: '要素高端化指数分析',
                  data0:'134.98',
                  data1:'34.98%',
                  obj:[
                      {name:'要素高端化指数分析',value:'134.98'},
                      {name:'信息要素指数',value:'103.39'},
                      {name:'基础要素指数',value:'166.56'},
                  ]
                  // name:['要素高端化指数分析','信息要素指数','基础要素指数'],
                  // num:['134.98','103.39','166.56']
              },
              {
                  value: '2',
                  label: '治理现代化指数分析',
                  data0:'113.44',
                  data1:'13.44%',
                  obj:[
                      {name:'党建水平指数',value:'97.45'},
                      {name:'治理能力指数',value:'134.96'},
                      {name:'数字政务指数',value:'104.6'},
                  ]
              },
              {
                  value: '3',
                  label: '生活智慧化指数分析',
                  data0:'107.38',
                  data1:'7.38%',
                  obj:[
                      {name:'生活智慧化指数',value:'107.38'},
                      {name:'基础保障指数',value:'110.13'},
                      {name:'乡村人文指数',value:'106.94'},
                      {name:'智能生活指数',value:'104.68'},
                  ]
              },
              {
              value: '4',
              label: '产业数字化指数分析',
              data0:'127.36',
              data1:'27.36%',
              obj:[
                  {name:'产业数字化指数分析',value:'127.36'},
                  {name:'产业效益指数',value:'118.51'},
                  {name:'创新驱动指数',value:'150'},
                  {name:'人才资源指数',value:'106.03'},
              ]
          },
              {
                  value: '5',
                  label: '总指数分析',
                  data0:'134.98',
                  data1:'34.98%',
                  obj:[
                      {name:'总指数分析',value:'134.98'},
                      {name:'增长幅度',value:'34.98'},
                  ]
              }
          ],
          value: '要素高端化指数分析',
          num:0,
          type:0
      };
    },
      created(){
          // this.timer();
          this.select();
      },
    methods:{
        select(){
            let _that =this;
            this._select = setInterval(()=>{
                _that.selects = _that.options[_that.type];
                if(_that.type<5){
                    _that.type++;
                }else if(_that.type >=5){
                    _that.type = 0;
                }

                let boxs = document.getElementsByClassName('cubeMains');
                let _this= this;
                for(var i=0;i<boxs.length;i++){
                    for(var j=0;j<3;j++){
                        boxs[i].getElementsByClassName("cube")[j].classList.remove('red')
                        boxs[i].getElementsByClassName("shadow")[0].classList.remove('active')
                    }

                }
                if(_that.type == 0){
                    _that.value = '总指数分析'
                    document.querySelector('#cube-box1').getElementsByTagName("div")[0].classList.add('red')
                    document.querySelector('#cube-box1').getElementsByTagName("div")[1].classList.add('red')
                    document.querySelector('#cube-box1').getElementsByTagName("div")[2].classList.add('red')
                    document.querySelector('.cubeMain01').getElementsByTagName("div")[4].classList.add('active')
                }else if(_that.type == 1){
                    _that.value = '生态绿色化指数分析'
                    document.querySelector('#cube-box2').getElementsByTagName("div")[0].classList.add('red')
                    document.querySelector('#cube-box2').getElementsByTagName("div")[1].classList.add('red')
                    document.querySelector('#cube-box2').getElementsByTagName("div")[2].classList.add('red')
                    document.querySelector('.cubeMain02').getElementsByTagName("div")[4].classList.add('active')

                }else if(_that.type == 2){
                    _that.value = '要素高端化指数分析'
                    document.querySelector('#cube-box3').getElementsByTagName("div")[0].classList.add('red')
                    document.querySelector('#cube-box3').getElementsByTagName("div")[1].classList.add('red')
                    document.querySelector('#cube-box3').getElementsByTagName("div")[2].classList.add('red')
                    document.querySelector('.cubeMain03').getElementsByTagName("div")[4].classList.add('active')

                }else if(_that.type == 3){
                    _that.value = '治理现代化指数分析'
                    document.querySelector('#cube-box4').getElementsByTagName("div")[0].classList.add('red')
                    document.querySelector('#cube-box4').getElementsByTagName("div")[1].classList.add('red')
                    document.querySelector('#cube-box4').getElementsByTagName("div")[2].classList.add('red')
                    document.querySelector('.cubeMain04').getElementsByTagName("div")[4].classList.add('active')
                }else if(_that.type == 4){
                    _that.value = '生活智慧化指数分析'
                    document.querySelector('#cube-box5').getElementsByTagName("div")[0].classList.add('red')
                    document.querySelector('#cube-box5').getElementsByTagName("div")[1].classList.add('red')
                    document.querySelector('#cube-box5').getElementsByTagName("div")[2].classList.add('red')
                    document.querySelector('.cubeMain05').getElementsByTagName("div")[4].classList.add('active')

                }
                else if(_that.type == 5){
                    _that.value = '产业数字化指数分析'
                    document.querySelector('#cube-box6').getElementsByTagName("div")[0].classList.add('red')
                    document.querySelector('#cube-box6').getElementsByTagName("div")[1].classList.add('red')
                    document.querySelector('#cube-box6').getElementsByTagName("div")[2].classList.add('red')
                    document.querySelector('.cubeMain06').getElementsByTagName("div")[4].classList.add('active')
                }
            },5000)
        },
        onSelectedDrug(val){
            clearInterval(this._select)
            for(var i=0;i<this.options.length;i++){
                if(this.options[i].value == val){
                    this.selects = this.options[i]
                }
            }
            let boxs = document.getElementsByClassName('cubeMains');
            let _this= this;
            for(var i=0;i<boxs.length;i++){

                for(var j=0;j<3;j++){
                    boxs[i].getElementsByClassName("cube")[j].classList.remove('red')
                    boxs[i].getElementsByClassName("shadow")[0].classList.remove('active')
                }

            }
            if(val == 0){
                document.querySelector('#cube-box3').getElementsByTagName("div")[0].classList.add('red')
                document.querySelector('#cube-box3').getElementsByTagName("div")[1].classList.add('red')
                document.querySelector('#cube-box3').getElementsByTagName("div")[2].classList.add('red')
                document.querySelector('.cubeMain03').getElementsByTagName("div")[4].classList.add('active')
            }else if(val == 1){
                document.querySelector('#cube-box6').getElementsByTagName("div")[0].classList.add('red')
                document.querySelector('#cube-box6').getElementsByTagName("div")[1].classList.add('red')
                document.querySelector('#cube-box6').getElementsByTagName("div")[2].classList.add('red')
                document.querySelector('.cubeMain06').getElementsByTagName("div")[4].classList.add('active')
            }else if(val == 2){
                document.querySelector('#cube-box4').getElementsByTagName("div")[0].classList.add('red')
                document.querySelector('#cube-box4').getElementsByTagName("div")[1].classList.add('red')
                document.querySelector('#cube-box4').getElementsByTagName("div")[2].classList.add('red')
                document.querySelector('.cubeMain04').getElementsByTagName("div")[4].classList.add('active')
            }else if(val == 3){
                document.querySelector('#cube-box2').getElementsByTagName("div")[0].classList.add('red')
                document.querySelector('#cube-box2').getElementsByTagName("div")[1].classList.add('red')
                document.querySelector('#cube-box2').getElementsByTagName("div")[2].classList.add('red')
                document.querySelector('.cubeMain02').getElementsByTagName("div")[4].classList.add('active')
            }else if(val == 4){
                document.querySelector('#cube-box5').getElementsByTagName("div")[0].classList.add('red')
                document.querySelector('#cube-box5').getElementsByTagName("div")[1].classList.add('red')
                document.querySelector('#cube-box5').getElementsByTagName("div")[2].classList.add('red')
                document.querySelector('.cubeMain05').getElementsByTagName("div")[4].classList.add('active')
            }

        },
        zhu(){
            // setInterval(() => {
            //     for(i=0;i<7;i++)
            //     {
            //         console.log(i);
            //     }
            // }, 4000)
            let boxs = document.getElementsByClassName('cube-box');
            let _this= this;
            // for (var i = 0; i < boxs.length; i++) {
            //     console.log(boxs[i].getElementsByTagName('div'));
            // }
            // for (let item in boxs) {
            //     // let div = document.getElementsByClassName('cube')
            //     console.log(boxs[item].getElementsByTagName('div'))
            // }
            setInterval(() => {
                boxs[0].style.height = _this.heights[0];
                boxs[1].style.height = _this.heights[1];
                boxs[2].style.height = _this.heights[2];
                boxs[3].style.height = _this.heights[3];
                boxs[4].style.height = _this.heights[4];
                boxs[5].style.height = _this.heights[5];
                // for (let item in boxs) {
                //     if (boxs[item].style) {
                //         boxs[0].style.height = '165px';
                //         boxs[1].style.height = '240px';
                //     }
                // }
            }, 1000)
        },
      change () {
        this.num = 500
      },
      changeImageSrc(index){
        console.log(index)
        index == 2?this.staImg1 = require('@/assets/index/menu.png') :this.staImg1 = require('@/assets/index/active.png')
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
                    name: '访问来源',
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
                        {value: 35.72, name: '生态绿色化',itemStyle:{color:'#1172e1'}},
                        {value: 20.76, name: '要素高端化',itemStyle:{color:'#f0d22d'}},
                        {value: 10.62, name: '治理现代化',itemStyle:{color:'#57e0cb'}},
                        {value: 5.84, name: '生活智慧化',itemStyle:{color:'#31b9e4'}},
                        {value: 27.06, name: '产业数字化',itemStyle:{color:'#d87017'}},
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
          startSelectAnimate(myChart, '生态绿色化', ['生态绿色化', '要素高端化', '治理现代化', '生活智慧化' ,'产业数字化'])



          function startSelectAnimate(myChart, firstSelectName, names) {
              myChart.dispatchAction({
                  type: 'highlight',
                  // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
                  name: firstSelectName
              });
              let selectIndex = 1;
              setInterval(() => {
                  myChart.dispatchAction({
                      type: 'downplay',
                      seriesIndex: 1,
                  });
                  myChart.dispatchAction({
                      type: 'highlight',
                      // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
                      name: names[selectIndex]
                  });
                  selectIndex++
                  if (selectIndex >= names.length) {
                      selectIndex = 0;
                  }
              }, 5000);
          }
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
      },
        increase() {
            let that = this;
            setTimeout(function () {
               that.percentage = 50
               that.percentage1 = 70
               that.percentage2 = 30
            },8000);
            // this.percentage += 10;
            // if (this.percentage > 100) {
            //     this.percentage = 100;
            // }
        },
        timer(){
            let _that = this;
            this._inter = setInterval(()=>{

                    if(_that.num<5){
                        _that.num++;
                    }else if(_that.num >=5){
                        _that.num = 0;
                    }
                    let boxs = document.getElementsByClassName('cubeMains');
                    let _this= this;
                    for(var i=0;i<boxs.length;i++){
                        for(var j=0;j<3;j++){
                            boxs[i].getElementsByClassName("cube")[j].classList.remove('red')
                            boxs[i].getElementsByClassName("shadow")[0].classList.remove('active')
                        }

                    }
                    if(_that.num == 0){
                        document.querySelector('#cube-box1').getElementsByTagName("div")[0].classList.add('red')
                        document.querySelector('#cube-box1').getElementsByTagName("div")[1].classList.add('red')
                        document.querySelector('#cube-box1').getElementsByTagName("div")[2].classList.add('red')
                        document.querySelector('.cubeMain01').getElementsByTagName("div")[4].classList.add('active')
                    }else if(_that.num == 1){
                        document.querySelector('#cube-box2').getElementsByTagName("div")[0].classList.add('red')
                        document.querySelector('#cube-box2').getElementsByTagName("div")[1].classList.add('red')
                        document.querySelector('#cube-box2').getElementsByTagName("div")[2].classList.add('red')
                        document.querySelector('.cubeMain02').getElementsByTagName("div")[4].classList.add('active')
                    }else if(_that.num == 2){
                        document.querySelector('#cube-box3').getElementsByTagName("div")[0].classList.add('red')
                        document.querySelector('#cube-box3').getElementsByTagName("div")[1].classList.add('red')
                        document.querySelector('#cube-box3').getElementsByTagName("div")[2].classList.add('red')
                        document.querySelector('.cubeMain03').getElementsByTagName("div")[4].classList.add('active')
                    }else if(_that.num == 3){
                        document.querySelector('#cube-box4').getElementsByTagName("div")[0].classList.add('red')
                        document.querySelector('#cube-box4').getElementsByTagName("div")[1].classList.add('red')
                        document.querySelector('#cube-box4').getElementsByTagName("div")[2].classList.add('red')
                        document.querySelector('.cubeMain04').getElementsByTagName("div")[4].classList.add('active')
                    }else if(_that.num == 4){
                        document.querySelector('#cube-box5').getElementsByTagName("div")[0].classList.add('red')
                        document.querySelector('#cube-box5').getElementsByTagName("div")[1].classList.add('red')
                        document.querySelector('#cube-box5').getElementsByTagName("div")[2].classList.add('red')
                        document.querySelector('.cubeMain05').getElementsByTagName("div")[4].classList.add('active')
                    }
                    else if(_that.num == 5){
                        document.querySelector('#cube-box6').getElementsByTagName("div")[0].classList.add('red')
                        document.querySelector('#cube-box6').getElementsByTagName("div")[1].classList.add('red')
                        document.querySelector('#cube-box6').getElementsByTagName("div")[2].classList.add('red')
                        document.querySelector('.cubeMain06').getElementsByTagName("div")[4].classList.add('active')
                    }
            },5000)

        }
    },
    mounted(){

      this.drawLine();
      // this.auto();
      this.$refs.example.start();
        this.zhu();
        this.increase();
        // window.onload = function() {
        //     setTimeout(start, 200);
        // };
        function start() {

            //Helpers
            function lineToAngle(x1, y1, length, radians) {
                var x2 = x1 + length * Math.cos(radians),
                    y2 = y1 + length * Math.sin(radians);
                return {
                    x: x2,
                    y: y2
                };
            }

            function randomRange(min, max) {
                return min + Math.random() * (max - min);
            }

            function degreesToRads(degrees) {
                return degrees / 180 * Math.PI;
            }

            //Particle
            var particle = {
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                radius: 0,

                create: function(x, y, speed, direction) {
                    var obj = Object.create(this);
                    obj.x = x;
                    obj.y = y;
                    obj.vx = Math.cos(direction) * speed;
                    obj.vy = Math.sin(direction) * speed;
                    return obj;
                },

                getSpeed: function() {
                    return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                },

                setSpeed: function(speed) {
                    var heading = this.getHeading();
                    this.vx = Math.cos(heading) * speed;
                    this.vy = Math.sin(heading) * speed;
                },

                getHeading: function() {
                    return Math.atan2(this.vy, this.vx);
                },

                setHeading: function(heading) {
                    var speed = this.getSpeed();
                    this.vx = Math.cos(heading) * speed;
                    this.vy = Math.sin(heading) * speed;
                },

                update: function() {
                    this.x += this.vx;
                    this.y += this.vy;
                }
            };

            //Canvas and settings
            var canvas = document.getElementById("canvas"),
                context = canvas.getContext("2d"),
                width = canvas.width = window.innerWidth,
                height = canvas.height = window.innerHeight,
                stars = [],
                shootingStars = [],
                layers = [{
                    speed: 0.015,
                    scale: 0.2,
                    count: 320
                }, {
                    speed: 0.03,
                    scale: 0.5,
                    count: 50
                }, {
                    speed: 0.05,
                    scale: 0.75,
                    count: 30
                }],
                starsAngle = 145,
                shootingStarSpeed = {
                    min: 15,
                    max: 20
                },
                shootingStarOpacityDelta = 0.01,
                trailLengthDelta = 0.01,
                shootingStarEmittingInterval = 2000,
                shootingStarLifeTime = 500,
                maxTrailLength = 300,
                starBaseRadius = 2,
                shootingStarRadius = 3,
                paused = false;
                let c=canvas.getContext("2d");
                c.globalAlpha=1;

            //Create all stars
            for (var j = 0; j < layers.length; j += 1) {
                var layer = layers[j];
                for (var i = 0; i < layer.count; i += 1) {
                    var star = particle.create(randomRange(0, width), randomRange(0, height), 0, 0);
                    star.radius = starBaseRadius * layer.scale;
                    star.setSpeed(layer.speed);
                    star.setHeading(degreesToRads(starsAngle));
                    stars.push(star);
                }
            }

            function createShootingStar() {
                var shootingStar = particle.create(randomRange(width / 2, width), randomRange(0, height / 2), 0, 0);
                shootingStar.setSpeed(randomRange(shootingStarSpeed.min, shootingStarSpeed.max));
                shootingStar.setHeading(degreesToRads(starsAngle));
                shootingStar.radius = shootingStarRadius;
                shootingStar.opacity = 0;
                shootingStar.trailLengthDelta = 0;
                shootingStar.isSpawning = true;
                shootingStar.isDying = false;
                shootingStars.push(shootingStar);
            }

            function killShootingStar(shootingStar) {
                setTimeout(function() {
                    shootingStar.isDying = true;
                }, shootingStarLifeTime);
            }

            function update() {
                if (!paused) {
                    context.clearRect(0, 0, width, height);
                    context.fillStyle = "rgba(255,255,255,0)";
                    context.fillRect(0, 0, width, height);
                    context.fill();

                    for (var i = 0; i < stars.length; i += 1) {
                        var star = stars[i];
                        star.update();
                        drawStar(star);
                        if (star.x > width) {
                            star.x = 0;
                        }
                        if (star.x < 0) {
                            star.x = width;
                        }
                        if (star.y > height) {
                            star.y = 0;
                        }
                        if (star.y < 0) {
                            star.y = height;
                        }
                    }

                    for (i = 0; i < shootingStars.length; i += 1) {
                        var shootingStar = shootingStars[i];
                        if (shootingStar.isSpawning) {
                            shootingStar.opacity += shootingStarOpacityDelta;
                            if (shootingStar.opacity >= 1.0) {
                                shootingStar.isSpawning = false;
                                killShootingStar(shootingStar);
                            }
                        }
                        if (shootingStar.isDying) {
                            shootingStar.opacity -= shootingStarOpacityDelta;
                            if (shootingStar.opacity <= 0.0) {
                                shootingStar.isDying = false;
                                shootingStar.isDead = true;
                            }
                        }
                        shootingStar.trailLengthDelta += trailLengthDelta;

                        shootingStar.update();
                        if (shootingStar.opacity > 0.0) {
                            drawShootingStar(shootingStar);
                        }
                    }

                    //Delete dead shooting shootingStars
                    for (i = shootingStars.length - 1; i >= 0; i--) {
                        if (shootingStars[i].isDead) {
                            shootingStars.splice(i, 1);
                        }
                    }
                }
                requestAnimationFrame(update);
            }

            function drawStar(star) {
                context.fillStyle = "rgb(255, 221, 157)";
                context.beginPath();
                context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
                context.fill();
            }

            function drawShootingStar(p) {
                var x = p.x,
                    y = p.y,
                    currentTrailLength = (maxTrailLength * p.trailLengthDelta),
                    pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());

                context.fillStyle = "rgba(255, 255, 255, " + p.opacity + ")";
                // context.beginPath();
                // context.arc(x, y, p.radius, 0, Math.PI * 2, false);
                // context.fill();
                var starLength = 5;
                context.beginPath();
                context.moveTo(x - 1, y + 1);

                context.lineTo(x, y + starLength);
                context.lineTo(x + 1, y + 1);

                context.lineTo(x + starLength, y);
                context.lineTo(x + 1, y - 1);

                context.lineTo(x, y + 1);
                context.lineTo(x, y - starLength);

                context.lineTo(x - 1, y - 1);
                context.lineTo(x - starLength, y);

                context.lineTo(x - 1, y + 1);
                context.lineTo(x - starLength, y);

                context.closePath();
                context.fill();

                //trail
                context.fillStyle = "rgba(255, 221, 157, " + p.opacity + ")";
                context.beginPath();
                context.moveTo(x - 1, y - 1);
                context.lineTo(pos.x, pos.y);
                context.lineTo(x + 1, y + 1);
                context.closePath();
                context.fill();
            }

            //Run
            update();

            //Shooting stars
            setInterval(function() {
                if (paused) return;
                createShootingStar();
            }, shootingStarEmittingInterval);

            window.onfocus = function() {
                paused = false;
            };

            window.onblur = function() {
                paused = true;
            };

        };
        start();
        var speed=80
        // 向上滚动
        var demo=document.getElementById("demo");
        var demo2=document.getElementById("demo2");
        var demo1=document.getElementById("demo1");
        demo2.innerHTML=demo1.innerHTML
        function Marquee(){
            if(demo.scrollTop>=demo1.offsetHeight){
                demo.scrollTop=0;
            }
            else{
                demo.scrollTop=demo.scrollTop+1;
            }
        }
        var MyMar=setInterval(Marquee,speed)
        demo.onmouseover=function(){clearInterval(MyMar)}
        demo.onmouseout=function(){MyMar=setInterval(Marquee,speed)}

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @-webkit-keyframes bigAssButtonPulse {
        from { background-color: #749a02; -webkit-box-shadow: 0 0 25px #333; }
        50% { background-color: #91bd09; -webkit-box-shadow: 0 0 50px #91bd09; }
        to { background-color: #749a02; -webkit-box-shadow: 0 0 25px #333; }
    }

    @-webkit-keyframes greenPulse {
        from { background-color: #749a02; -webkit-box-shadow: 0 0 9px #333; }
        50% { background-color: #91bd09; -webkit-box-shadow: 0 0 18px #91bd09; }
        to { background-color: #749a02; -webkit-box-shadow: 0 0 9px #333; }
    }

    @-webkit-keyframes bluePulse {
        from { background-color: #007d9a; -webkit-box-shadow: 0 0 9px #333; }
        50% { background-color: #2daebf; -webkit-box-shadow: 0 0 18px #2daebf; }
        to { background-color: #007d9a; -webkit-box-shadow: 0 0 9px #333; }
    }

    @-webkit-keyframes redPulse {
        from { -webkit-box-shadow: 0 0 9px #333; }
        50% { -webkit-box-shadow: 0 0 18px #e33100; }
        to {  -webkit-box-shadow: 0 0 9px #333; }
    }

    @-webkit-keyframes magentaPulse {
        from { background-color: #630030; -webkit-box-shadow: 0 0 9px #333; }
        50% { background-color: #a9014b; -webkit-box-shadow: 0 0 18px #a9014b; }
        to { background-color: #630030; -webkit-box-shadow: 0 0 9px #333; }
    }

    @-webkit-keyframes orangePulse {
        from { background-color: #d45500; -webkit-box-shadow: 0 0 9px #333; }
        50% { background-color: #ff5c00; -webkit-box-shadow: 0 0 18px #ff5c00; }
        to { background-color: #d45500; -webkit-box-shadow: 0 0 9px #333; }
    }

    @-webkit-keyframes orangellowPulse {
        from { background-color: #fc9200; -webkit-box-shadow: 0 0 9px #333; }
        50% { background-color: #ffb515; -webkit-box-shadow: 0 0 18px #ffb515; }
        to { background-color: #fc9200; -webkit-box-shadow: 0 0 9px #333; }
    }

    .btnss.button {
        -webkit-animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
    }

    .green.button { -webkit-animation-name: greenPulse; -webkit-animation-duration: 3s; }
    .blue.button { -webkit-animation-name: bluePulse; -webkit-animation-duration: 4s; }
    .red  { -webkit-animation-name: redPulse;
        -webkit-animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
    }
    .magenta.button { -webkit-animation-name: magentaPulse; -webkit-animation-duration: 2s; }
    .orange.button { -webkit-animation-name: orangePulse; -webkit-animation-duration: 3s; }
    .orangellow.button { -webkit-animation-name: orangellowPulse; -webkit-animation-duration: 5s; }

    #demo{
        overflow:hidden;
        position:relative;
    }
    #demo1{
        height:auto;
        text-align:left;
    }
    #demo2{
        height:auto;
        text-align:left;
    }
    #demo1 li{
        list-style-type:none;
    }
    #demo2 li{
        list-style-type:none;
    }

    canvas {
        display: block;
        width: 100%;
        height: 100%;
        position:absolute;
        left:0;
        top:-50%;
    }
    .donghua {
        animation: fade-in;
        animation-duration: 10s;
        animation-delay: 1s;
        -webkit-animation:fade-in 10s;
    }
    .donghua2 {
        animation: fade-in;
        animation-duration: 12s;
        animation-delay: 1s;
        -webkit-animation:fade-in 12s;
    }
    .donghua3 {
        animation: fade-in;
        animation-duration: 14s;
        animation-delay: 1s;
        -webkit-animation:fade-in 14s;
    }
    .leftBottomBg {
        position: relative;width: 90%;height:306px;margin:8px auto 0;
        background-image: url("../assets/index/leftBottombg.png");
        background-repeat: no-repeat;
        background-size: 100% 306px;
    }
    .leftBottomBg01 {width: 96%;position: relative;margin: 0 auto 22px ;}
    .leftBottomBg01 >>> .el-progress-bar__outer {background-color: #121c3f;}
    .leftBottomBg01 >>> .el-progress-bar__inner {top:15%;height:70%;}
    .leftBottomBg01 >>> .el-progress-bar {padding-right: 0;}
    .jdt >>> .el-select-dropdown {background-color: #071327 !important; color: #1cd7ff !important;}
    .jdt >>> .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {background-color: #030813 !important;}
    .jdt >>> .el-select-dropdown {border: 1px solid #071327 !important;}
    .jdt >>> .el-select-dropdown__item {color: #1cd7ff !important;}
    .leftBottomBg01 >>> .el-progress-bar__inner::after {
        height: 100%;
        content: '';
        position: absolute;
        width: 20px;
        background: rgba(255,255,255,.2);
        border-radius: 50%;
        right:0;
    }
    .leftBottomBg01 >>> .el-progress__text {    position: absolute;
        top: 0;
        right: 0;
        line-height: 27px;
        display: none;
        font-size: 18px !important;
        color: #48e3ff;}
    .leftBottomTitle {position: relative;width: 90%;height:61px;margin:28px auto 0;
    background-image: url("../assets/index/leftTtile.png");
        background-repeat: no-repeat;
        background-size: 100% 61px;
        line-height: 61px;
        font-size: 16px;color: #fff;
    }
    .leftBottomTitle img {width: 36px;height:36px;vertical-align: middle;margin-left: 10px;}
    .leftBottomTitle span  {color: #ffae00;font-size: 24px;font-family: 'jsq';}
    .leftBottomTitle01 {width: 50%;float:left;}
    .leftBottomTitle02 {width: 50%;float:left;}
    .leftYear {position: absolute;top:10px;right:20px;}
    .jdt >>> .el-select {width: 45%;top:10px;left:20px;}
    .jdt >>> .el-input__inner {font-size: 16px;height:35px;color: #00c5fe;background: #071327;border: transparent;}
    .years {text-align: center;position: absolute;height:51px;bottom:-40px;left:50%;margin-left: -63px;}
    .yearsImg {height:51px;width: 126px;}
    .xx001{
        width: 6px;height:6px;
        -webkit-transform: rotate(360deg);
        animation: rotation 3s linear infinite;
        -moz-animation: rotation 3s linear infinite;
        -webkit-animation: rotation 3s linear infinite;
        -o-animation: rotation 3s linear infinite;
        position: absolute;
        bottom:5px;
        left:-10px;
    }
    .xx002{
        width: 8px;height:8px;
        -webkit-transform: rotate(360deg);
        animation: rotation 3s linear infinite;
        -moz-animation: rotation 3s linear infinite;
        -webkit-animation: rotation 3s linear infinite;
        -o-animation: rotation 3s linear infinite;
        position: absolute;
        top:-10px;
        left:35%;
    }
    .xx003{
        width: 8px;height:8px;
        -webkit-transform: rotate(360deg);
        animation: rotation 3s linear infinite;
        -moz-animation: rotation 3s linear infinite;
        -webkit-animation: rotation 3s linear infinite;
        -o-animation: rotation 3s linear infinite;
        position: absolute;
        top:17px;
        right:6px;
    }

    .cubeBottom {position: absolute;bottom:25%;left:0;width: 100%;}
    .cubeBottomLeft01 {width: 264px;height:131px;position: relative;}
    .cubeBottomLeftImg01 {position: absolute;top:14px;left:12px;
        -webkit-transform: rotate(360deg);
        animation: rotation 3s linear infinite;
        -moz-animation: rotation 3s linear infinite;
        -webkit-animation: rotation 3s linear infinite;
        -o-animation: rotation 3s linear infinite;
    }
    .cubeBottomLeftImg02 {position: absolute;top:24px;left:23px;
        -webkit-transform: rotate(360deg);
        animation: rotations 3s linear infinite;
        -moz-animation: rotations 3s linear infinite;
        -webkit-animation: rotations 3s linear infinite;
        -o-animation: rotations 3s linear infinite;
    }
    .cubeBottomLeftImg03 {position: absolute;top:32px;left:32px;
    }
    .cubeBottomLeft {width:42%;float:left;}
    .cubeBottomLeft02 {width: 145px;position: absolute;top:45px;right:0;text-align: center;}
    .cubeBottomLeft02 p:first-child {font-size: 34px;color: #ffae00;font-family: 'jsq';}
    .cubeBottomLeft02 p:last-child {font-size: 20px;color: #fff;}







    .autoBg {width: 806px;height:642px;position: absolute;top:130px;left:0;}
    .cubeTop01 {width:357px;height:67px;text-align: center;line-height: 67px;font-size: 30px;color: #fff;
        background-image: url("../assets/index/autoTitle.png");
        background-repeat: no-repeat;
        background-size: 357px 67px;
        position: relative;
        margin: auto ;
    }
    .cubeTop {position: relative;padding-top: 20px;}

    .cube-warper {
        position: relative;
        width: 822px;
        height: 100%;
    }
    .xx01{
        -webkit-transform: rotate(360deg);
        animation: rotation 3s linear infinite;
        -moz-animation: rotation 3s linear infinite;
        -webkit-animation: rotation 3s linear infinite;
        -o-animation: rotation 3s linear infinite;
        position: absolute;
        top:0;
        left:-20px;
    }
    .xx02{
        width: 6px;height:6px;
        -webkit-transform: rotate(360deg);
        animation: rotation 3s linear infinite;
        -moz-animation: rotation 3s linear infinite;
        -webkit-animation: rotation 3s linear infinite;
        -o-animation: rotation 3s linear infinite;
        position: absolute;
        top:20px;
        left:-40px;
    }
    .xx03{
        width: 6px;height:6px;
        -webkit-transform: rotate(360deg);
        animation: rotation 3s linear infinite;
        -moz-animation: rotation 3s linear infinite;
        -webkit-animation: rotation 3s linear infinite;
        -o-animation: rotation 3s linear infinite;
        position: absolute;
        bottom:10px;
        left:-13px;
    }
    .xx04{
        -webkit-transform: rotate(360deg);
        animation: rotation 3s linear infinite;
        -moz-animation: rotation 3s linear infinite;
        -webkit-animation: rotation 3s linear infinite;
        -o-animation: rotation 3s linear infinite;
        position: absolute;
        bottom:0;
        right:-13px;
    }
    .xx05{
        width: 6px;height:6px;
        -webkit-transform: rotate(360deg);
        animation: rotation 3s linear infinite;
        -moz-animation: rotation 3s linear infinite;
        -webkit-animation: rotation 3s linear infinite;
        -o-animation: rotation 3s linear infinite;
        position: absolute;
        top:10px;
        right:-33px;
    }
    @-webkit-keyframes rotations{
        from {-webkit-transform: rotate(360deg);}
        to {-webkit-transform: rotate(0deg);}
    }
    @-webkit-keyframes rotation{
        from {-webkit-transform: rotate(0deg);}
        to {-webkit-transform: rotate(360deg);}
    }
    .cubeMain {width: 700px;height:420px;position: relative;margin: auto;text-align: center;}
    .cube-box {
        transition: .5s all;
        transform-style: preserve-3d;
        transform: rotateX(40deg) rotateY(35deg);
    }
    .cubeMain01 .shadow {transform: none;
        width: 86px;
        height: 150px;
        position: absolute;
        left: 5px;
        bottom: 120px;
        background-image: linear-gradient(rgba(255,0,0,0), rgba(101,58,173,.2));
        z-index: 0;
        font-size: 20px;
        line-height: 130px;
        text-align: center;
        color: #fff;
        animation: fade-in;/*动画名称*/animation-duration: 2.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 2.5s;/*针对webkit内核*/
    }
    .cubeMains .shadow.active {color: #ffae00;font-size: 30px;}

    .cubeMain02 .shadow {transform: none;
        width: 126px;
        height: 150px;
        position: absolute;
        left: -1px;
        bottom: 250px;
        background-image: linear-gradient(rgba(255,0,0,0), rgba(12,97,231,.2));
        z-index: 0;
        font-size: 20px;
        line-height: 130px;
        text-align: center;
        color: #fff;
        animation: fade-in;/*动画名称*/animation-duration: 2.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 2.5s;/*针对webkit内核*/
    }
    .cubeMain03 .shadow {transform: none;
        width: 98px;
        height: 150px;
        position: absolute;
        left: 6px;
        bottom: 190px;
        background-image: linear-gradient(rgba(255,0,0,0), rgba(65,155,164,.2));
        font-size: 20px;
        line-height: 130px;
        text-align: center;
        color: #fff;
        z-index: 3;
        animation: fade-in;/*动画名称*/animation-duration: 2.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 2.5s;/*针对webkit内核*/
    }
    .cubeMain04 .shadow {transform: none;
        width: 77px;
        height: 150px;
        position: absolute;
        left: 5px;
        bottom: 98px;
        background-image: linear-gradient(rgba(255,0,0,0), rgba(65,155,164,.2));
        font-size: 20px;
        line-height: 130px;
        text-align: center;
        color: #fff;
        z-index: 1;
        animation: fade-in;/*动画名称*/animation-duration: 2.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 2.5s;/*针对webkit内核*/
    }
    .cubeMain05 .shadow {transform: none;
        width: 62px;
        height: 150px;
        position: absolute;
        left: 5px;
        bottom: 31px;
        background-image: linear-gradient(rgba(255,0,0,0), rgba(225,217,155,.2));
        font-size: 18px;
        line-height: 130px;
        text-align: center;
        color: #fff;
        z-index: 3;
        animation: fade-in;/*动画名称*/animation-duration: 2.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 2.5s;/*针对webkit内核*/
    }
    .cubeMain06 .shadow {transform: none;
        width: 93px;
        height: 150px;
        position: absolute;
        left: 5px;
        bottom: 130px;
        background-image: linear-gradient(rgba(255,0,0,0), rgba(225,217,155,.2));
        font-size: 20px;
        line-height: 130px;
        text-align: center;
        color: #fff;
        z-index: 3;
        animation: fade-in;/*动画名称*/animation-duration: 2.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 2.5s;/*针对webkit内核*/
    }
    @keyframes fade-in {
        0% {opacity: 0;}/*初始状态 透明度为0*/
        40% {opacity: 0;}/*过渡状态 透明度为0*/
        100% {opacity: 1;}/*结束状态 透明度为1*/
    }
    .cubeMains {display: inline-block;position: relative;}
    .cubeMain01 {width: 90px;height:100%;}
    .cubeMain02 {width: 125px;height:100%;}
    .cubeMain03 {width: 125px;height:100%;left: -30px;}
    .cubeMain04 {width: 80px;height:100%;left: -50px;}
    .cubeMain05 {width: 80px;height:100%;left: -72px;}
    .cubeMain06 {width: 80px;height:100%;left: -85px;}
    .cube-box1 {
        width: 60px;
        height: 0;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
    }
    .cube-box2 {
        left: -9px;bottom:35px;z-index: 1;
        width: 90px;
        height: 0;
        position: absolute;
    }
    .cube-box3 {
        left: 0;bottom: -22px;z-index: 4;
        width: 70px;
        height: 0;
        position: absolute;
    }
    .cube-box4 {
        left: 0;bottom: 0;z-index: 3;
        width: 55px;
        height: 0;
        position: absolute;
    }
    .cube-box5 {
        left: 0;bottom: -36px;z-index: 4;
        width: 45px;
        height: 0;
        position: absolute;
    }
    .cube-box6 {left: 0;bottom: -10px;z-index: 4;
        width: 65px;
        height: 0;
        position: absolute;
    }

    .cubeMain01 .text {position: absolute;bottom:-20%;left:0;width: 90px;text-align: center;color: #fff;font-size: 18px;
        animation: fade-in;/*动画名称*/animation-duration: 3.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 3.5s;/*针对webkit内核*/}
    .cubeMain01 .text .hrs {display: block;height:110px;border-right: 2px dashed rgba(101,58,173,.2);width: 2px;margin: 0 auto 8px;}
    .cubeMain02 .text {position: absolute;bottom:-29%;left:0;width: 90px;text-align: center;color: #fff;font-size: 18px;
        animation: fade-in;/*动画名称*/animation-duration: 3.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 3.5s;/*针对webkit内核*/}
    .cubeMain02 .text .hrs {display: block;height:210px;border-right: 2px dashed rgba(12,97,231,.2);width: 2px;margin: 0 auto 8px;}
    .cubeMain03 .text {position: absolute;bottom:-20%;left:0;width: 90px;text-align: center;color: #fff;font-size: 18px;
        animation: fade-in;/*动画名称*/animation-duration: 3.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 3.5s;/*针对webkit内核*/}
    .cubeMain03 .text .hr {display: block;height:105px;border-right: 2px dashed rgba(65,155,164,.2);width: 2px;margin: 0 auto 8px;}

    .cubeMain04 .text {position: absolute;bottom:-26%;left:0;width: 90px;text-align: center;color: #fff;font-size: 18px;
        animation: fade-in;/*动画名称*/animation-duration: 3.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 3.5s;/*针对webkit内核*/}
    .cubeMain04 .text .hrs {display: block;height:202px;border-right: 2px dashed rgba(65,155,164,.2);width: 2px;margin: 0 auto 8px;}

    .cubeMain05 .text {position: absolute;bottom:-20%;left:0;width: 90px;text-align: center;color: #fff;font-size: 18px;
        animation: fade-in;/*动画名称*/animation-duration: 3.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 3.5s;/*针对webkit内核*/}
    .cubeMain05 .text .hrs {display: block;height:105px;border-right: 2px dashed rgba(225,217,155,.2);width: 2px;margin: 0 auto 8px;}

    .cubeMain06 .text {position: absolute;bottom:-26%;left:0;width: 90px;text-align: center;color: #fff;font-size: 18px;
        animation: fade-in;/*动画名称*/animation-duration: 3.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 3.5s;/*针对webkit内核*/}
    .cubeMain06 .text .hrs {display: block;height:165px;border-right: 2px dashed rgba(225,217,155,.2);width: 2px;margin: 0 auto 8px;}

    .cube {
        position: absolute;
        left: 0;
        top: 0;
    }

    .cube1 {width: 100%;height: 100%;background-image: linear-gradient(#653aad, #b660e3);}
    .cube3 {width: 100%;height: 100%;background-image: linear-gradient(#5a45bf, #ae78e9);transform-origin: right top;transform: rotateY(90deg);}
    .cube5 {width: 100%;padding-top: 100%;background-image: linear-gradient(#684ec7, #9868d9);transform-origin: left top;transform: rotateX(90deg);}
    #cube-box2 .cube1 {width: 100%;height: 100%;background-image: linear-gradient(#0c61e7, #139df4);}
    #cube-box2 .cube3 {width: 100%;height: 100%;background-image: linear-gradient(#316fe4, #51cff7);transform-origin: right top;transform: rotateY(90deg);}
    #cube-box2 .cube5 {width: 100%;padding-top: 100%;background-image: linear-gradient(#2760b6, #4ba7fb);transform-origin: left top;transform: rotateX(90deg);}
    #cube-box3 .cube1 {width: 100%;height: 100%;background-image: linear-gradient(#419ba4, #6ddce0);z-index: 3;}
    #cube-box3 .cube3 {width: 100%;height: 100%;background-image: linear-gradient(#56c5d1, #a8ebef);transform-origin: right top;transform: rotateY(90deg);}
    #cube-box3 .cube5 {width: 100%;padding-top: 100%;background-image: linear-gradient(#64d2dc, #94e1e7);transform-origin: left top;transform: rotateX(90deg);}
    #cube-box4 .cube1 {width: 100%;height: 100%;background-image: linear-gradient(#2c7ebc, #47cfe5);}
    #cube-box4 .cube3 {width: 100%;height: 100%;background-image: linear-gradient(#4ea0df, #97dcf3);transform-origin: right top;transform: rotateY(90deg);}
    #cube-box4 .cube5 {width: 100%;padding-top: 100%;background-image: linear-gradient(#5bafe6, #7cc5ed);transform-origin: left top;transform: rotateX(90deg);}
    #cube-box5 .cube1 {width: 100%;height: 100%;background-image: linear-gradient(#e1d99b, #caccbf);z-index: 5;}
    #cube-box5 .cube3 {width: 100%;height: 100%;background-image: linear-gradient(#f0e4d0, #faf5ee);transform-origin: right top;transform: rotateY(90deg);}
    #cube-box5 .cube5 {width: 100%;padding-top: 100%;background-image: linear-gradient(#f3e8d7, #f7eee2);transform-origin: left top;transform: rotateX(90deg);}
    #cube-box6 .cube1 {width: 100%;height: 100%;background-image: linear-gradient(#c57517, #eace27);z-index: 5;}
    #cube-box6 .cube3 {width: 100%;height: 100%;background-image: linear-gradient(#dda65b, #f3dfb3);transform-origin: right top;transform: rotateY(90deg);}
    #cube-box6 .cube5 {width: 100%;padding-top: 100%;background-image: linear-gradient(#e4b469, #edcb96);transform-origin: left top;transform: rotateX(90deg);}
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
  .leftTopImg {
      width: 100%;height:auto;position: relative;top:0;left:0;z-index: 0;
      animation: fade-in;
      animation-duration: 7s;
      animation-delay: 1s;
      -webkit-animation:fade-in 7s;
  }
  .leftText {
      position: absolute;top:40px;left:0;width: 100%;height:auto;
      animation: fade-in;
      animation-duration: 9s;
      animation-delay: 1s;
      -webkit-animation:fade-in 9s;
  }
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
  .rightBottomTitle {
      animation: fade-in;
      animation-duration: 8s;
      animation-delay: 1s;
      -webkit-animation:fade-in 8s;
      width: 100%;line-height: 55px;color: #fff;font-size: 20px;position: relative;margin-left: 28px;padding-bottom: 5%;}
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
<style scoped>
    .button {
    }

    button::-moz-focus-inner {
        border: 0;
        padding: 0
    }

    .button:hover {
        background-color: #111;
        color: #fff
    }

    .button:active {
        /*-webkit-transform: translateY(1px);*/
        /*-moz-transform: translateY(1px)*/
    }

    .small.button {
        font-size: 11px
    }

    .large.button {
    }

    .green.button {
        background-color: #91bd09
    }

    .green.button:hover {
        background-color: #749a02
    }

    .blue.button {
        background-color: #2daebf
    }

    .blue.button:hover {
        background-color: #007d9a
    }

    .red.button {
        /*background-color: #e33100*/
    }

    .red.button:hover {
        background-color: #872300
    }

    .magenta.button {
        background-color: #a9014b
    }

    .magenta.button:hover {
        background-color: #630030
    }

    .orange.button {
        background-color: #ff5c00
    }

    .orange.button:hover {
        background-color: #d45500
    }

    .orangellow.button {
        background-color: #ffb515
    }

    .orangellow.button:hover {
        background-color: #fc9200
    }

    .white.button {
        background-color: #fff;
        border: 1px solid #ccc;
        color: #666 !important;
        font-weight: 400;
        text-shadow: 0 1px 1px #fff
    }

    .white.button:hover {
        background-color: #eee
    }

    .strike.button {
        background-color: #4adfc1
    }

    .strike.button:hover {
        background-color: #39ceb0
    }

    .secondary.button {
        color: #555 !important;
        text-shadow: 0 1px 1px rgba(255, 255, 255, .5);
        border: 1px solid #bbb;
        -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .1)
    }

    .secondary.button:hover {
        background-color: #eee;
        color: #444 !important;
        border-color: #999
    }

    .super.button {
        font-size: 13px;
        padding: 0;
        border: 1px solid rgba(0, 0, 0, .25);
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px
    }

    .super.button span {
        display: block;
        padding: 4px 15px 6px;
        -webkit-border-radius: 14px;
        -moz-border-radius: 14px;
        border-top: 1px solid rgba(255, 255, 255, .2);
        line-height: 1
    }

    .small.super.button {
        font-size: 11px;
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px
    }

    .small.super.button span {
        padding: 2px 12px 6px;
        -webkit-border-radius: 11px;
        -moz-border-radius: 11px
    }

    .small.white.super.button span {
        padding: 3px 12px 5px
    }

    .large.super.button {
        background-position: left bottom;
        -webkit-border-radius: 18px;
        -moz-border-radius: 18px
    }

    .large.super.button span {
        font-size: 14px;
        padding: 7px 20px 9px;
        -webkit-border-radius: 17px;
        -moz-border-radius: 17px
    }
</style>
