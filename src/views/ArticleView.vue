<template>
    <div class="article-container">
        <h1 class="title">{{title}}</h1>
        <p class="date">{{date}}</p>
        <p class="content">{{content}}</p>
    </div>
</template>

<script>
import { doc, getDoc } from 'firebase/firestore';
import  db  from '../firebaseInit';

export default {
    data() {
        return {
            title: '',
            date: '',
            content: '',
            db: db
        }
    },

    async beforeMount() {
        const docRef = doc(db, 'posts', this.$route.params.id);
        let docSnapshot = await getDoc(docRef);
        console.log(docSnapshot.data());
        this.title = docSnapshot.data().title;
        this.date = docSnapshot.data().date;
        this.content= docSnapshot.data().content;
    }
}
</script>

<style scoped>
.article-container {
    width: 80%;
    max-width: 1200px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding: 1rem 3rem;
    margin: 2rem auto;
    text-align: left;
}
</style>