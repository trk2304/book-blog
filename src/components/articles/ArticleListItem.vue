<template>
    <li>
        <BaseCard>
            <img :src="'https://picsum.photos/seed/' + id + '/1600/900'">
            
            <div class="article-item-content">
                <h3 class="article-title">{{ title }}</h3>
                <p class="article-date">{{ date }}</p>
                <p class="article-preview-text">{{ showStrippedContent }}</p>
                <router-link :to="'/article/'+ id" class="article-link">Read More...</router-link>
            </div>
            
        </BaseCard>
    </li>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';

export default {
    props: {
        title: String,
        content: String,
        date: String,
        id: String
    },
    components: { BaseCard },
    computed: {
        showStrippedContent() {
            return this.content.replace(/<(.|\n)*?>/g, '')
        }
    }
}
</script>

<style scoped>
li {
    list-style: none;
}

.article-item-content {
    padding: 0.5rem 1rem;
    margin: 0;
    text-align: left;
}

.article-preview-text {
    max-height: 150px;
    overflow-y: hidden;
}

.article-title {
    margin-top: 0.4rem;
    margin-bottom: 0.8rem;
}

.article-link {
    color: lightskyblue;
    text-decoration: none;
}

.article-link:hover {
    color: black;
    text-decoration: underline;
}

img {
    object-fit: cover;
    width: 100%;
    margin: 0;
    border-bottom: 1px solid black;
    max-height: 300px;
}
</style>