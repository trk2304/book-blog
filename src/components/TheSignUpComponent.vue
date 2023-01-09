<template>
    <div class="newsletter-section">
        <div class="sign-up-text">
            <h2>Sign up. Stay in the Loop.</h2>
        </div>

        <div class="sign-up-action">
            <div class="flex-item-wrapper">
                <form @submit.prevent="handleEmail"></form>
                <input type="email" name="email" id="email" placeholder="Email Address..." v-model="enteredEmail" required>
                <BaseButton text="Submit" @click="handleEmail"></BaseButton>
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
    components: { BaseButton },

    data() {
        return {
            enteredEmail: '',
            test: false
        }
    },

    methods: {
        handleEmail() {
            console.log("Hello world, the entered value was " + this.enteredEmail);
            this.enteredEmail = '';
        }
    }
}
</script>

<style scoped>

.newsletter-section {
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.sign-up-text,
.sign-up-action {
    width: 50%;
    padding: 1rem;
}

.sign-up-text {
    border-right: 1px solid black;
}

.sign-up-action {
    display: flex;
    justify-content: center;
    
    align-items: center;
}

.sign-up-action input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid lightskyblue;
    font-size: 16px;
    margin-right: 2rem;
    transition: 250ms ease-in-out all;
}

.sign-up-action input:focus {
    background-color: lightblue;
    outline: none;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
}

</style>