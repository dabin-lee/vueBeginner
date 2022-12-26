<template>
    <h1>Forms & inputs</h1>
    <SignupFormVue />
</template>
<script>
import SignupFormVue from "../2.froms.Inputs/SignupForm.vue";
export default {
    name: "App",
    components: { SignupFormVue },
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
</style>
