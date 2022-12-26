<template>
    <p>ReactionTime{{ score }}</p>
    <p>rank: {{ rank }}</p>
</template>
<script>
export default {
    props: ["score"],
    data() {
        return {
            rank: null,
        };
    },
    mounted() {
        if (this.score < 250) {
            this.rank = "250이하";
        } else if (this.score < 400) {
            this.rank = "400이하";
        } else {
            this.rank = "그 외";
        }
    },
};
</script>
