<template>
    <h1>router연습</h1>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <!-- <router-link to="/about">about</router-link> -->
        <router-link :to="{ name: 'About' }">about</router-link> |
        <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
    </div>

    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button><Br />
    <router-view />
</template>
<script>
export default {
    methods: {
        redirect() {
            this.$router.push({ name: "Home" });
        },
        back() {
            this.$router.go(-1);
        },
        forward() {
            this.$router.go(+1);
        },
    },
};
</script>

<style>
#app {
    margin-top: 60px;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    text-align: center;
    color: #2c3e50;
}
body {
    margin: 0;
    background-color: #eee;
}
#nav {
    padding: 30px;
}
#nav a {
    padding: 10px;
    font-weight: bold;
    text-align: center;
    color: #2c3e50;
    text-decoration: none;
    border-radius: 10px;
}

#nav a.router-link-exact-active {
    color: #fff;
    background-color: crimson;
}
</style>
