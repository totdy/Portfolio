<template>
    <article>        
        <img class="cover" :src="'/assets/screenshots/' + cover">        
        <div class="details">
            <h1>{{ name }}</h1>
            <p>{{ description }}</p>
            <ol>
                <li v-for="skill in stack" :key="skill">{{ skill }}</li>
            </ol>
            <a v-if="source" :href="source" target="_blank">
                <h3>Source<img src="/assets/icons/link.svg"></h3>
            </a>
            <a v-if="visit" :href="visit" target="_blank">
                <h3>Visit<img src="/assets/icons/link.svg"></h3>
            </a>
        </div>
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
    visit: String,
    source: String
})

const cover = props.screens[Math.floor(Math.random()*props.screens.length)];

</script>

<style scoped>

article{    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 1rem;    
}

@media (max-width: 900px) {

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

.details{
    overflow: hidden;

    border: 0.2rem solid var(--bg2);
    border-radius: 1rem;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.cover{
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;

    border-radius: 1rem;
}

</style>
