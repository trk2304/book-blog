<template>

    <div v-if="!(articles.length <= 0)">
        <!-- Figure out how to access the document's id. -->
        <ul v-for="article in articles" :key="article.title" class="article-container">
            <ArticleListItem 
            :title="article.title"
            :content="article.content"
            :date="article.date"
            :id="article.id"
            >

            </ArticleListItem>
        </ul>
    </div>
    
        

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
    async beforeMount() {
        const articleSnapshot = await getDocs(collection(db, 'posts'));
        articleSnapshot.forEach( (doc) => {
            let obj = doc.data();
            obj.id = doc.id;
            this.articles.push(obj);
        });

    }
}
</script>

<style scoped>
ul.article-container {
    padding: 0;
    width: 50%;
    max-width: 600px;
    margin: 1rem auto;
}
</style>