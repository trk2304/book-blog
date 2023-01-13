<template>
    <div class="background">
        <dialog open>
            <slot></slot>
        </dialog>
    </div> 
</template>

<style scoped>
.background {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

dialog {
    border: 1px solid black;
    z-index: 99;
    padding: 2rem;
    width: 50%;
    max-width: 1200px;
}
</style>
