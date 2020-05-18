<template>
    <div class="cube-warper">
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
            <div class="cubeMains cubeMain01">
                <div class="cube-box cube-box1" id="cube-box1">
                    <div class="cube1 cube"></div>
                    <div class="cube3 cube"></div>
                    <div class="cube5 cube"></div>
                </div>
                <div class="shadow">125.28%</div>
                <div class="text"><span class="hr"></span>总指数</div>
            </div>
            <div class="cubeMains cubeMain02">
                <div class="cube-box cube-box2" id="cube-box2">
                    <div class="cube1 cube"></div>
                    <div class="cube3 cube"></div>
                    <div class="cube5 cube"></div>
                </div>
                <div class="shadow">145.14%</div>
                <div class="text"><span class="hr"></span>生态绿色化</div>
            </div>
            <div class="cubeMains cubeMain03">
                <div class="cube-box cube-box3" id="cube-box3">
                    <div class="cube1 cube"></div>
                    <div class="cube3 cube"></div>
                    <div class="cube5 cube"></div>
                </div>
                <div class="shadow">134.98%</div>
                <div class="text"><span class="hr"></span>要素高端化</div>
            </div>
            <div class="cubeMains cubeMain04">
                <div class="cube-box cube-box4" id="cube-box4">
                    <div class="cube1 cube"></div>
                    <div class="cube3 cube"></div>
                    <div class="cube5 cube"></div>
                </div>
                <div class="shadow">113.44%</div>
                <div class="text"><span class="hr"></span>治理现代化</div>
            </div>
            <div class="cubeMains cubeMain05">
                <div class="cube-box cube-box5" id="cube-box5">
                    <div class="cube1 cube"></div>
                    <div class="cube3 cube"></div>
                    <div class="cube5 cube"></div>
                </div>
                <div class="shadow">107.38%</div>
                <div class="text"><span class="hr"></span>生活智慧化</div>
            </div>
            <div class="cubeMains cubeMain06">
                <div class="cube-box cube-box6" id="cube-box6">
                    <div class="cube1 cube"></div>
                    <div class="cube3 cube"></div>
                    <div class="cube5 cube"></div>
                </div>
                <div class="shadow">127.36%</div>
                <div class="text"><span class="hr"></span>产业数字化</div>
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
                        <p>134.98%</p>
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
</template>

<script>
    export default {
        data() {
            return {
                heights:['165px','240px','220px','135px','115px','175px']
            };
        },
        mounted(){
            let boxs = document.getElementsByClassName('cube-box');
            let _this= this;
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
        }
    }
</script>
<style scoped>
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

    .cubeBottom {position: absolute;bottom:15%;left:0;width: 100%;}
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

        background: #0a152b;
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
    .cubeMain {width: 700px;height:400px;position: relative;margin: auto;text-align: center;}
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
    .cubeMain02 .shadow {transform: none;
        width: 126px;
        height: 150px;
        position: absolute;
        left: -1px;
        bottom: 250px;
        background-image: linear-gradient(rgba(255,0,0,0), rgba(12,97,231,.2));
        z-index: 0;
        font-size: 30px;
        line-height: 130px;
        text-align: center;
        color: #ffae00;
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
        bottom: 100px;
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
    .cubeMain01 .text .hr {display: block;height:110px;border-right: 2px dashed rgba(101,58,173,.2);width: 2px;margin: 0 auto 8px;}
    .cubeMain02 .text {position: absolute;bottom:-29%;left:0;width: 90px;text-align: center;color: #fff;font-size: 18px;
        animation: fade-in;/*动画名称*/animation-duration: 3.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 3.5s;/*针对webkit内核*/}
    .cubeMain02 .text .hr {display: block;height:210px;border-right: 2px dashed rgba(12,97,231,.2);width: 2px;margin: 0 auto 8px;}
    .cubeMain03 .text {position: absolute;bottom:-20%;left:0;width: 90px;text-align: center;color: #fff;font-size: 18px;
        animation: fade-in;/*动画名称*/animation-duration: 3.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 3.5s;/*针对webkit内核*/}
    .cubeMain03 .text .hr {display: block;height:105px;border-right: 2px dashed rgba(65,155,164,.2);width: 2px;margin: 0 auto 8px;}

    .cubeMain04 .text {position: absolute;bottom:-26%;left:0;width: 90px;text-align: center;color: #fff;font-size: 18px;
        animation: fade-in;/*动画名称*/animation-duration: 3.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 3.5s;/*针对webkit内核*/}
    .cubeMain04 .text .hr {display: block;height:202px;border-right: 2px dashed rgba(65,155,164,.2);width: 2px;margin: 0 auto 8px;}

    .cubeMain05 .text {position: absolute;bottom:-20%;left:0;width: 90px;text-align: center;color: #fff;font-size: 18px;
        animation: fade-in;/*动画名称*/animation-duration: 3.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 3.5s;/*针对webkit内核*/}
    .cubeMain05 .text .hr {display: block;height:105px;border-right: 2px dashed rgba(225,217,155,.2);width: 2px;margin: 0 auto 8px;}

    .cubeMain06 .text {position: absolute;bottom:-26%;left:0;width: 90px;text-align: center;color: #fff;font-size: 18px;
        animation: fade-in;/*动画名称*/animation-duration: 3.5s;/*动画持续时间*/animation-delay: 1s;-webkit-animation:fade-in 3.5s;/*针对webkit内核*/}
    .cubeMain06 .text .hr {display: block;height:165px;border-right: 2px dashed rgba(225,217,155,.2);width: 2px;margin: 0 auto 8px;}

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
</style>
