<template>

    <!-- Figure out how to access the document's id. -->
    <ul class="article-container" v-if="!(articles.length <= 0)">
        <ArticleListItem 
        v-for="article in articles" :key="article.id"
        :title="article.title"
        :content="article.content"
        :date="article.date"
        :id="article.id"
        >

        </ArticleListItem>
    </ul>
    
    <!-- Be aware that this is not the only case for an empty list. Be sure to account for errors in the future -->
    <p v-else>Loading...</p>

</template>

<script>
import ArticleListItem from './ArticleListItem.vue';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebaseInit';

export default {
    components: { ArticleListItem },

    data() {
        return {
            articles: [],
            db: db
        }
    },

    // Grab all articles before mounting this component.
    // Put each article in the stored articles array.
    async created() {
        try {
            const articleSnapshot = await getDocs(collection(db, 'posts'));
            articleSnapshot.forEach( (doc) => {
            let obj = doc.data();
            obj.id = doc.id;
            this.articles.push(obj);
            });
        }
        catch (error) {
            console.error(error);
        }
    }
}
</script>

<style scoped>
ul.article-container {
    padding: 0;
    width: 60%;
    max-width: 1200px;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;
}
</style>