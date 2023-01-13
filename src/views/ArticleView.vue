<template>

    <TheHero />

    <span class="section-divider"></span>

    
    <div class="article-container" v-if="title !== '' && content !== ''">
        <p class="date">{{date}}</p>
        <h1 class="title">{{title}}</h1>
        
        <div class="image-container">
            <img :src="'https://picsum.photos/seed/' + $route.params.id + '/1600/900'">
        </div>

        <div class="content" ref="contentElement" v-html="content"></div>
    </div>
</template>

<script>
import TheHero from '@/components/TheHero.vue';
import { doc, getDoc } from 'firebase/firestore';
import  db  from '../firebaseInit';



export default {
    components: { TheHero },
    data() {
        return {
            title: '',
            date: '',
            content: '',
        }
    },

    async created() {
        try {
            const docRef = doc(db, 'posts', this.$route.params.id);
            let docSnapshot = await getDoc(docRef);
            this.title = docSnapshot.data().title;
            this.date = docSnapshot.data().date;
            this.content = docSnapshot.data().content;
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
    border: 1px solid black;
    padding: 1rem 3rem;
    margin: 2rem auto;
    text-align: left;
}

.article-container .content,
.article-container .title {
    width: 80%;
    max-width: 1200px;
    margin: 1rem auto;
}

.date {
    font-weight: 300;
    font-size: 14px;
    display: block;
    width: 80%;
    max-width: 1200px;
    margin: 1rem auto;
}

.content {
    margin-top: 3rem;
}

.image-container {
    width: 80%;
    margin: 0 auto;
}

img {
    object-fit: contain;
    width: 100%;
    max-width: 1200px;
}

.section-divider {
    display: block;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 3em;
    border-top: 1px solid black;
    background-color: black;
}
</style>