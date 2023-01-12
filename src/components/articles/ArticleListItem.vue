<template>
    <li>
        <BaseCard>
            <img :src="'https://picsum.photos/seed/' + id + '/1600/900'">
            
            <div class="article-item-content">
                <h3 class="article-title">{{ title }}</h3>
                <p class="article-date">{{ date }}</p>
                <p class="article-preview-text">{{ content }}</p>
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
}
</script>

<style scoped>
li {
    list-style: none;
}

.article-item-content {
    padding: 1rem;
    margin: 0;
    text-align: left;
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