<template>
    <div class="wrapper">
        <!-- Make sure that the src attribute is dynamic eventually using ':' -->
        <img :src="imageLink" alt="" class="thumbnail">

        <div class="big-card-content">
            <p class="big-card-date">{{ date }}</p>
            <h2 class="big-card-title">{{ bigCardTitle }}</h2>
            <p class="big-card-text">{{ bigCardText }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bigCardTitle: String,
        bigCardText: String,
        imageLink: String,
        date: String
    }
}
</script>

<style scoped>
.wrapper {
    border: 1px solid black;
    width: 60%;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.big-card-content {
    padding: 0.5rem 1rem;
}

.big-card-title,
.big-card-text {
    text-align: left;
}

img {
    width: 100%;
    height: 300px;
}
</style>