<template>
    <section>
        <BaseBigCard 
        big-card-title="I am a big card"
        big-card-text="This is big card text."
        image-link="https://picsum.photos/seed/rand/600/600"
        :date="date"
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
export default {
    components: { BaseBigCard },
    data() {
        return {
            date: new Date().toDateString()
        }
    }
}
</script>
