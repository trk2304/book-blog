<template>
    <div class="newsletter-section">
        <div class="sign-up-text">
            <h2>Sign up. Stay in the Loop.</h2>
        </div>

        <div class="sign-up-action">
            <div class="flex-item-wrapper">
                <form @submit.prevent="handleEmail">
                    <input type="email" name="email" id="email" placeholder="Email Address..." v-model="enteredEmail" required>
                    <BaseButton text="Subscribe"></BaseButton>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';
import db from '@/firebaseInit';
import { collection, addDoc } from '@firebase/firestore';

export default {
    components: { BaseButton },

    data() {
        return {
            enteredEmail: '',
            invalidInput: false
        }
    },

    methods: {
        // This method will eventually post this to some data store that would send intermittent updates to users.
        async handleEmail() {

            // Validate Input 
            if(!this.enteredEmail.includes('@') || this.enteredEmail === '')
                this.invalidInput = true;

            // Pop Up if input is invalid.
            if(this.invalidInput) {
                alert('Sorry, but you did not enter a valid email address. Please try again.');
                this.invalidInput = false;
                return;
            }

            const docRef = await addDoc(collection(db, 'newsletter_emails'), {
                email: this.enteredEmail
            });

            // Remove this later.
            console.log(docRef);

            alert('Congrats! You\'ve been added to our email list. Check your inbox daily for a newsletter update.');
            this.enteredEmail = '';
            this.invalidInput = false;
        }
    }
}
</script>

<style scoped>

.newsletter-section {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 95%;
    margin: 0 auto;
}

.sign-up-text,
.sign-up-action {
    width: 50%;
    padding: 1rem;
}

.sign-up-text {
    border-right: 1px solid black;
    font-family: 'Times New Roman', Serif;
    font-size: 21px;
}

.sign-up-action {
    display: flex;
    justify-content: center;
    align-items: center;
}

form {
    display: flex;
}

.sign-up-action input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid lightskyblue;
    padding-bottom: 8px;
    font-size: 18px;
    margin-right: 2rem;
    transition: 250ms ease-in-out all;
    margin-top: auto;
}

.sign-up-action input:focus {
    background-color: lightblue;
    outline: none;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
}

</style>