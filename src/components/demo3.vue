<template>
    <div>
        <div class="ellipse">
        </div>
    </div>

</template>

<script>
    export default {
        name: 'demo11',
        data() {
            return {
            }
        },
        mounted() {
        },
    }
</script>
<style scoped>
    .ellipse{
        margin-left: 100px;
        width:100px;
        height:100px;
        border:solid 0.5px black;
        background: deepskyblue;
        border-radius: 50px;
        transform: rotateX(70deg) rotateY(70deg);
    }
    .ellipse:after{
        content: '';
        display:inline-block;
        width:100px;
        height: 140px;
        position:relative;
        opacity: 0.6;
        background: deepskyblue;
        top:50%;
        left:-0.5px;
        border-left:black 0.5px solid;
        border-right:black 0.5px solid;
        border-bottom: black 0.5px solid;
        border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    }
</style>