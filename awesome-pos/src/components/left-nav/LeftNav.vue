<template>
    <div id="left-nav">
        <el-menu
                default-active="/homePos"
                class="el-menu-vertical-demo"
                router
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
        >
            <el-menu-item
                    v-for="(item) in menusConfig"
                    :index="item.path"
                    :key="item.path"
            >
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import {routes} from '../../router';

    export default {
        name: "LeftNav",
        data() {
            return {
                menusConfig: []
            }
        },
        created() {
            this.initNav()
        },
        methods: {
            initNav() {
                this.menusConfig = routes.slice(1);
            }
        }
    }
</script>

<style scoped lang="less">
    #left-nav {
        position:fixed;
        top:40px;
        bottom:40px;
        width: 100px;
        /*height: 100%;*/
        background-color: #545c64;
        .el-menu-vertical-demo{
            width:100%
        }
    }
</style>