<template>
    <div class="details">
        <div class="title">
            <h2>{{ title }}</h2>
            <p :title="experienceTime">{{ when[0] }} - {{ when[1] }}</p>
        </div>
        <ul>
            <li v-for="what in whats" :key="what">{{ what }}</li>
        </ul>
        <BubbleList :list="skills" />
    </div>
</template>
<script setup lang="ts">
import BubbleList from './BubbleList.vue';

const props = defineProps(
    {
        title: {
            type: String,
            required: true
        },
        when: {
            type: Array<string>,
            required: true
        },
        whats: {
            type: Array<string>,
            required: true
        },
        skills: {
            type: Array<string>,
            required: true
        }
    });

const start = new Date(props.when[0]!);
const end = new Date(props.when[1]!);
let years = end.getFullYear() - start.getFullYear();
let months = end.getMonth() - start.getMonth();

if (months < 0) {
    years--;
    months += 12;
}
months++;

let experienceTime = "";
if (years > 0) {
    experienceTime += years + " year";
    if (years > 1) experienceTime += "s";
}
experienceTime += " ";
if (months > 0) {
    experienceTime += months + " month";
    if (months > 1) experienceTime += "s";
}

</script>
<style scoped>
.title {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

ul {
    padding-left: 1rem;
}
</style>