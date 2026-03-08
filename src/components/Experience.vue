<template>
    <article>
        <a :href="atLink" target="_blank">
            <span>
                <img :src="'/assets/' + logo" :title="at + ' logo'">
            </span>
        </a>
        <div>
            <a :href="atLink" target="_blank">
                <h1>{{ at }}<img src="/assets/link.svg"></h1>
            </a>            
            <slot></slot>
        </div>
    </article>
</template>

<script lang="ts">

export default {
    name: "Experience",
    props: {
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
    },

};
</script>

<style scoped>

article {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

a{
    height: fit-content;
}

span {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(255, 255, 255, 0.2);

    padding: 0.6rem;
    width: 3rem;
    height: 3rem;
    border-radius: 1000rem;

    img {
        width: -webkit-fill-available;
        aspect-ratio: 1/1;
    }
}
</style>
