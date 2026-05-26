<template>
    <article>
        <div class="carousel">
            <img :class="{ ignoreTheme: true, bigBoy: IsPresented }" ref="presenter" @click="IsPresented = !IsPresented"
                :src="baseUrl + 'assets/screenshots/' + screens[index]" />
            <div>
                <button @click="prev">←</button>
                <button @click="next">→</button>
            </div>
        </div>
        <div class="details">
            <h2>{{ name }}</h2>
            <p>{{ description }}</p>
            <BubbleList :list="stack" />
            <a v-if="source" :href="source" target="_blank">
                <h3>
                    Source code
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" class="tabler-icon tabler-icon-external-link ">
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                    </svg>
                </h3>
            </a>
            <a v-if="visit" :href="visit" target="_blank">
                <h3>
                    Visit
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" class="tabler-icon tabler-icon-external-link ">
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                    </svg>
                </h3>
            </a>
        </div>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BubbleList from './BubbleList.vue';

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

const baseUrl = import.meta.env.BASE_URL

const index = ref(0)
const IsPresented = ref(false)

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
    article {
        grid-template-columns: 1fr;
    }

    .details {
        margin-bottom: 2rem;
    }
}

h3 {
    display: flex;

    padding: 0.5rem;
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

    button {
        padding: 0.4rem 1rem;

        background-color: var(--bg1);

        font-size: 2rem;

        align-self: center;

        pointer-events: auto;
    }

    div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 5px;

        display: none;

        z-index: 1;

        padding: 0 1rem;

        pointer-events: none;
    }

    img {
        width: 100%;
        height: auto;
        aspect-ratio: 16/9;

        z-index: 0;
        position: relative;

        border-radius: 1rem;

        cursor: zoom-in;
    }
}

.bigBoy {
    position: fixed !important;
    top: 50%;
    left: 50%;
    z-index: 1000 !important;

    transform: translate(-50%, -50%);

    width: auto;
    max-width: 90vw;
    max-height: 90vh;

    box-shadow: 0px 10px 20px 5px #888;

    cursor: zoom-out !important;
}

@media print {
    .carousel {
        display: none !important;
    }

    .details,
    h3 {
        margin: 0;
        padding: 0;
    }
}
</style>
