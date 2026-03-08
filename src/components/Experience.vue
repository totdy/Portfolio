<template>
    <article>
        <a :href="atLink" target="_blank">
            <img :src="'/assets/' +  logo " :title="at + ' logo'">
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
}
</style>
