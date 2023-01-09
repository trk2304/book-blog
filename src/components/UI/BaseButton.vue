<template>
    <button>{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true 
        }
    }
}
</script>

<style scoped>
button {
    border: 1px solid black;
    border-radius: none;
    background-color: white;
    color: black;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    padding: 1rem 1.5rem;
    transition: 250ms ease-in-out all;
}

button:hover {
    background-color: lightblue;
    color: white;
}
</style>