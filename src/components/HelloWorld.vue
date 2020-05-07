<template>
  <div>
    <ul>
      <li :class="{'number-item': !isNaN(item) }" v-for="(item,index) in computeNumber" :key="index"><span
        v-if="!isNaN(item)">       <i ref="numberItem">0123456789</i>     </span> <span v-else>{{item}}</span></li>
    </ul>

  </div>
</template>

<script>
  const MAX_LEN = 8;
  export default {
    name: 'HelloWorld',
    props: {   number: {     type: Number,     default: 0   } },

    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        computeNumber:['0','9','6','9','4','3','3','2','6']
    }
    },
    methods: {
      increaseNumber() {
        function getRandomNumber (min, max) {   return Math.floor(Math.random() * (max - min + 1) + min) };
        let self = this
        this.timer = setInterval(() => {
          self.newNumber = self.newNumber + getRandomNumber(1, 100)
          self.setNumberTransform()
        }, 3000)
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
    mounted() {
      this.increaseNumber();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .number-item {
    width: 50px;
    /*background: url(./number-bg.png) no-repeat center center;*/
    background-size: 100% 100%;height:30px;
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
  }


  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
