<template>
    <h1>compotition</h1>
    <div id="nav"><router-link to="/">Home</router-link> |</div>
    <router-view />
</template>
<script>
export default {};
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
