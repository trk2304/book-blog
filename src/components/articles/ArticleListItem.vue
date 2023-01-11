<template>
    <li>
        <BaseCard>
            <h3 class="article-title">{{ title }}</h3>
            <p class="article-date">{{ date }}</p>
            <p class="article-preview-text">{{ content }}</p>
            <router-link to="/about">Read More...</router-link>
        </BaseCard>
    </li>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';
export default {
    props: {
        title: String,
        content: String,
        date: String
    },
    components: { BaseCard },
}
</script>

<style scoped>

</style>