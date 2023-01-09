<template>
    <section>
        <BaseBigCard 
        big-card-title="I am a big card"
        big-card-text="This is big card text."
        image-link="https://picsum.photos/id/237/200/300"
        :date="date"
        >
        </BaseBigCard>
    </section>
</template>

<script>
import BaseBigCard from '@/components/UI/BaseBigCard.vue';
export default {
    components: { BaseBigCard },
    data() {
        return {
            date: new Date().toString()
        }
    }
}
</script>

<style scoped>

</style>