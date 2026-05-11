<template>
    <ol>
        <li v-for="item in list" :key="item">{{ item }}</li>
    </ol>
</template>
<script setup lang="ts">
const props = defineProps({
    list: {
        type: Array<string>,
        required: true
    }
})
</script>
<style scoped>
ol {
    list-style: none;
    padding-left: 0;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;

    li {
        /*background-color: oklch(from var(--bg2) calc(l/2 + 0.5) c h);*/
        background-color: var(--bg2);
        padding: 0.25rem 0.5rem;
        border-radius: 1rem;
        font-size: 0.8rem;

        @media print {
            padding: 0;

            &::after {
                content: ",";
            }

            &:last-child::after {
                content: none;
            }
        }
    }
}
</style>