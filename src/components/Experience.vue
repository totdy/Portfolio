<template>
    <article>        
        <span>
            <img :src="baseUrl + '/assets/icons/' + logo" :title="at + ' logo'" :alt="at + ' logo'">
        </span>
        <div>
            <a :href="atLink" target="_blank">
                <h2>
                    {{ at }}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link ">
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                    </svg>
                </h2>
            </a>
            <slot></slot>
        </div>
    </article>
</template>

<script setup lang="ts">
const props = defineProps(
    {
        at: {
            type: String,
            required: true
        },
        atLink: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        }
    })

const baseUrl = import.meta.env.BASE_URL
</script>

<style scoped>

article {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

h2{
    padding: 0.5rem;
}

div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

span {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--bg2);

    padding: 0.6rem;
    width: 3rem;
    height: 3rem;
    border-radius: 1000rem;

    img {
        min-width: 1.5rem;
        width: -webkit-fill-available;
        height: -webkit-fill-available;
        aspect-ratio: 1/1;
    }
}

@media print {
    span {
        width: 0rem;
        height: 0rem;
    }
    article {    
        flex-direction: column;
        gap: 0rem;
    }
    h2{
        padding: 0;
    }
}
</style>
