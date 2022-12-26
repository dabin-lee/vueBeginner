<template>
    <form @submit.prevent="handleSumbmit">
        <label>email</label>
        <input type="email" required v-model="email" />

        <label>password</label>
        <input type="password" required v-model="password" />
        <p class="error">{{ passwordError }}</p>

        <label>role: </label>
        <select v-model="role">
            <option value="designer">web designer</option>
            <option value="developer">web developer</option>
        </select>

        <label>skills:</label>
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
        <div v-for="skill in skills" :key="skill" class="skillBox">
            <!-- 항상 고유한 key값이 있어야한다. key값도 바인딩해줌 -->
            <p>{{ skill }}</p>
            <button @click="deleteSKill(skill)">x</button>
        </div>

        <div class="terms">
            <input type="checkbox" required v-model="terms" />
            <label>Accept terms and conditions </label>
        </div>

        <div class="submit">
            <button>Create Account</button>
        </div>
    </form>

    <p>{{ email }}</p>
    <p>{{ password }}</p>
    <p>{{ role }}</p>
    <p>{{ terms }}</p>
    <p>{{ skills }}</p>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            role: "designer",
            terms: false,
            tempSkill: "",
            skills: [],
            passwordError: "",
        };
    },
    methods: {
        addSkill(e) {
            if (e.key === "," && this.tempSkill) {
                // this.tempSkill 빈값 false
                // keyboard가 ,이 눌렸을 때만 실행되는 구문
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill);
                }
                this.tempSkill = "";
            }
        },
        deleteSKill(skill) {
            this.skills = this.skills.filter((item) => item !== skill);
        },
        handleSumbmit() {
            this.passwordError =
                this.password.length > 5 ? "" : "5글자 이상 입력하세요";
            if (!this.passwordError) {
                console.log("submit");
            }
        },
    },
};
</script>

<style>
form {
    min-width: 420px;
    margin: 30px auto;
    background-color: #fff;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input,
select {
    display: block;
    width: 100%;
    padding: 10px 6px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checked"] {
    width: 16px;
    position: relative;
    top: 0;
    display: inline-block;
    margin: 0 10px 0 0;
}
.skillBox {
    display: flex;
    justify-content: space-between;
}
.skillBox p {
    margin: 5px 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
}
.skillBox button {
    border: none;
    background: none;
    cursor: pointer;
}
.submit {
    text-align: center;
}
.submit button {
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #0b6dff;
    border: 0;
    color: #fff;
    border-radius: 20px;
}
.error {
    margin-top: 10px;
    color: #ff0062;
    font-size: 0.8em;
    font-weight: bold;
}
</style>
