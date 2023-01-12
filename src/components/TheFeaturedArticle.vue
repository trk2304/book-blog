<template>
    <section>
        <BaseBigCard 
        :big-card-title="featuredArticle.title"
        :big-card-text="featuredArticle.content"
        :id="articleId"
        image-link="https://picsum.photos/seed/rand/600/600"
        :date="featuredArticle.date"
        class="featured-article"
        >
        
        </BaseBigCard>
    </section>
</template>

<script>
/*

This component is meant to be a segue between a large card component and the HomeView component.

*/

import BaseBigCard from '@/components/UI/BaseBigCard.vue';
import db from '@/firebaseInit';
import { query, collection, limit, orderBy, getDocs } from 'firebase/firestore';

export default {
    components: { BaseBigCard },
    data() {
        return {
            featuredArticle: '',
            articleId: ''
        }
    },

    // Grab the most recent article and its respective information. Don't worry about images yet.
    async beforeMount() {
        const postsRef = collection(db, 'posts');
        const q = query(postsRef, orderBy("date", "desc"), limit(1));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach( (document) => {
            console.log(document.data());

            this.featuredArticle = document.data();
            this.articleId = document.id;
        })
    }
}
</script>
