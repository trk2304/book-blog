<template>
<!-- Despite the name, this component will just content the contents of a row in the form of table cells. -->
    <td>{{post.id}}</td>
    <td>{{post.title}}</td>
    <td>{{post.date}}</td>
    <td>{{post.content}}</td>
    <td>
        <BaseButton text="Delete Post" @click="handleClick('delete', post.id)"></BaseButton> 
        <BaseButton text="Edit Post" @click="handleClick('edit', post.id)"></BaseButton> 
        <BaseButton text="View" @click="handleClick('view', post.id)"></BaseButton>
    </td>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';
export default {
    components: { BaseButton },
    props: {
        post: Object
    },
    emits: ['button-clicked'],
    methods: {
        handleClick(buttonType, id) {
            this.$emit('button-clicked', buttonType, id);
        }
        
    }
}
</script>

<style scoped>
td {
    margin: 1rem;
    border: 1px solid black;
    padding: 1rem;
}
</style>