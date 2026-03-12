<template>
    <article>
        <div class="carousel">
            <img :src="'/assets/screenshots/' + screens[index]">
            <div>
                <button @click="prev">←</button>
                <button @click="next">→</button>
            </div>            
        </div>
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
import { ref } from 'vue';

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

const index = ref(0)

function prev() {
    index.value--

    if (index.value < 0) index.value = props.screens.length - 1;
}

function next() {
    index.value++

    if (index.value >= props.screens.length) index.value = 0;
}

</script>

<style scoped>
article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 0.5rem;

    &:nth-child(even) {
        direction: rtl;
        
        * {
            direction: ltr;
        }
    }
}

@media (max-width: 900px) {
    article{
        grid-template-columns: 1fr;        
    }
    .details{
        margin-bottom: 2rem;
    }
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

.details {
    overflow: hidden;

    border: 0.2rem solid var(--bg2);
    border-radius: 1rem;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
}

.carousel {
    position: relative;

    &:hover {
        div {
            display: flex;
            justify-content: space-between;
        }
    }

    button{
        padding: 0.4rem 1rem;
        border: none;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 1rem;
        cursor: pointer;
        font-size: 2rem;

        &:hover{
            filter: invert();
        }
    }

    div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 5px;
        
        display: none;
        
        z-index: 1;
    }

    img {
        width: 100%;
        height: auto;
        aspect-ratio: 16/9;

        z-index: 0;

        border-radius: 1rem;
    }
}
</style>
