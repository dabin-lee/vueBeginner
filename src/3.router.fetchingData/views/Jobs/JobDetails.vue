<template>
    <div v-if="job">
        <h1>{{ job.title }}</h1>
        <p>아이디: {{ id }}</p>
        <p>{{ job.details }}</p>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
export default {
    props: ["id"],
    data() {
        return {
            // job의 시작이 null이기에 job의 속성을 액세스 할 수 없기 때문에 발생하는 문제 해결 방법

            job: null,
            // 초기 mounted됐을 때 job이 null로 표기가 되어있기에 error가 뜨는 상황이 발생했다.
            // api를 이용해서 데이터를 가져올 때 mounted안에서 페이지를 로드하는데 1초정도 걸린다.
            // then에서 data는 작업에 대한 값이 있을 때만 가능하다.
            // 그 안에서 null의 값을 해석하려고 할 것이다.
            // 이럴 때는 조건부로 항목을 출력할 수 있는 방법을 찾아야 한다.
        };
    },
    mounted() {
        fetch("http://localhost:3000/jobs/" + this.id)
            .then((res) => res.json())
            .then((data) => {
                this.job = data;
            })
            .catch((err) => console.log(err));
    },
};
</script>

<style></style>
