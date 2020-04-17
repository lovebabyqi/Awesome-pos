<template>
    <div id="header">
        <div class="title">ClearLove7 收银系统</div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="less">
    #header{
        position:fixed;
        left:0;
        right:0;
        top:0;
        height:40px;
        color:#fff;
        line-height:40px;
        z-index: 20;
        background-color: rgba(0,0,0,0.7);
        .title{
            margin-left: 100px;
        }
    }
</style>