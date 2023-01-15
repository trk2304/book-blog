<template>
    <form class="login-form" @submit.prevent="submitForm">

        <h1>Login</h1>

        <div class="form-control">
            <input name="email" id="email" type="email" v-model.trim="enteredEmail" placeholder="Email Address"  class="text-input" required />
        </div>
        
        <div class="form-control">
            <input name="password" id="password" type="password" v-model.trim="enteredPassword" placeholder="Password" class="text-input" required />    
        </div>

        <BaseButton text="Login"></BaseButton>

        <div class="test"></div>
    </form>

    <BaseButton text='Sign Out' @click="logOff"></BaseButton>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export default {
    components: { BaseButton },
    data() {
        return {
            enteredEmail: '',
            enteredPassword: '',
            invalidInput: false
        }
    },
    methods: {
        async submitForm() {
            const email = this.enteredEmail;
            const pass = this.enteredPassword;
            const auth = getAuth();
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, pass)
                const user = userCredential.user;
                console.log(user);

                this.enteredEmail = this.enteredPassword = '';

                this.$router.push('/admin');
            }
            catch(error) {
                console.error(error);
            }
        },

        logOff() {
            const auth = getAuth();
            signOut(auth)
            .then( () => {
                console.log("Sign Out Successful");
            })
            .catch( (error) => {
                console.error(error);
            });
        }
    }
}
</script>

<style scoped>

.flex-template {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

h1 {
    font-family: 'Times New Roman', Times, serif;
    margin-top: 0;
}

.login-form {
    width: 60%;
    margin: 0 auto;
    border: 1px solid black;
    padding: 2rem;
}

.text-input {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding: 7px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid black;
}

.text-input:focus {
    outline: none;
    border-bottom: 1px solid lightskyblue;
}


.form-control + .form-control {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.form-control {
    width: 70%;
    margin: 0 auto;
}
</style>