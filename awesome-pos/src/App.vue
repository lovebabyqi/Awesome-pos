<template>
    <div id="app">
        <Header></Header>
        <left-nav></left-nav>
        <div class="container">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from "./components/header/Header";
    import LeftNav from "./components/left-nav/LeftNav";
    import Footer from "./components/footer/Footer";

    export default {
        name: 'App',
        components: {
            LeftNav,
            Footer,
            Header
        }
    }

</script>
<style>
    #app {
        overflow: hidden;
    }

    .container {
        position: absolute;
        left: 100px;
        right: 0;
        top: 40px;
        bottom: 0;
        padding: 0 10px;
    }
</style>
