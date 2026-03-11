<template>
    <article>
        <h1>{{ name }}</h1>
        <p>{{ description }}</p>
        <img :src="'/assets/screenshots/' + screens[0]">
        <ol>
            <li v-for="skill in stack" :key="skill">{{ skill }}</li>
        </ol>        
    </article>
</template>

<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stack: {
        type: Array<string>,
        required: true
    },
    screens: {
        type: Array<string>,
        required: true
    },
})
</script>

<style scoped>

.title{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;      
    align-items: center;  
}

ul{
    padding-left: 1rem;
}

ol {
    list-style: none;
    padding-left: 0;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;

    li {
        background-color: rgba(255, 255, 255, 0.2);
        padding: 0.25rem 0.5rem;
        border-radius: 1rem;
        font-size: 0.8rem;
    }
}
</style>
