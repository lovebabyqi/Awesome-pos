<template>
    <div id="footer">
        @2020 ClearLove7 <a href="http:beian.miitbeian.gov.cn">工信部   (蜀)</a>  ICP备 19037529号
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="less">
    #footer{
        position:fixed;
        left:0;
        right:0;
        bottom:0;
        height:40px;
        text-align: center;
        color:#fff;
        line-height:40px;
        z-index: 20;
        background-color: rgba(0,0,0,0.7);
        a{
            text-decoration: none;
            color:#fff;
        }
    }
</style>