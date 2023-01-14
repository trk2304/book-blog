<template>
    <div class="wrapper">
        <!-- Make sure that the src attribute is dynamic eventually using ':' -->
        <router-link :to="'/article/' + id">    
            <img :src="imageLink" alt="" class="thumbnail">

        
            <div class="big-card-content">
                <p class="big-card-date">{{ date }}</p>
                <h2 class="big-card-title">{{ bigCardTitle }}</h2>
                <p class="big-card-text">{{ bigCardText }}</p>
            </div>
        </router-link>
        
    </div>
</template>

<script>

// This component will mainly be used to house the featured article, but can be repurposed for other large card uses.

export default {
    props: {
        bigCardTitle: String,
        bigCardText: String,
        imageLink: String,
        date: String,
        id: String
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
    position: relative;
}

.wrapper::before {
    content: 'Featured Post';
    text-transform: uppercase;
    letter-spacing: 6px;
    font-size: 21px;
    border: 1px solid black;
    width: 50%;
    padding: 1rem;
    position: absolute;
    background-color: white;
    top: -28px;
    left: -1px;
}

.big-card-content {
    padding: 0.5rem 1rem;
}

.big-card-text {
    max-height: 100px;
    overflow-y: hidden;
}

.big-card-title,
.big-card-text,
.big-card-date {
    text-align: left;
}

img {
    width: 100%;
    height: 350px;
    object-fit: cover;
}

a {
    color: black;
    text-decoration: none;
}

a:hover {
    color: lightblue;
}
</style>