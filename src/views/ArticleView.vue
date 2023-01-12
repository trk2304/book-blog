<template>
    <img :src="'https://picsum.photos/seed/' + $route.params.id + '/1600/900'">
    <div class="article-container" v-if="title !== '' && content !== ''">
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

    async created() {
        try {
            const docRef = doc(db, 'posts', this.$route.params.id);
            let docSnapshot = await getDoc(docRef);
            this.title = docSnapshot.data().title;
            this.date = docSnapshot.data().date;
            this.content= docSnapshot.data().content;
        }
        catch(error) {
            console.error(error);
        }
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

img {
    width: 80%;
    position: relative;
}

img::before {
    content: 'Blog Post';
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    z-index: 80;
}
</style>