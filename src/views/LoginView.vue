<template>
    <div class="container">
        <LoginForm class="login-form"></LoginForm>
    </div>    
</template>

<script>
import LoginForm from '@/components/login/LoginForm.vue';

export default {
    components: { LoginForm },
    mounted() {
        console.log(this.$route.path.toString());
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
}

.login-form {
    margin-top: 2rem;
    margin-bottom: 20rem;
}
</style>