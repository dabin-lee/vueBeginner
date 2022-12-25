<template>
    <div v-if="showBlock" class="greenBox" @click="endTimer">click me</div>
</template>
<script>
export default {
    props: ["delay"],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0,
        };
    },
    mounted() {
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer();
        }, this.delay);
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10);
        },
        endTimer() {
            clearInterval(this.timer);
            this.$emit("end", this.reactionTime);
        },
    },
};
</script>
<style>
.greenBox {
    width: 200px;
    height: 200px;
    margin: 100px auto;
    background-color: green;
    text-align: center;
}
</style>
