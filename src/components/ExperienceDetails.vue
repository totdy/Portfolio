<template>
    <div>
        <div class="title">
            <h1>{{ title }} <span v-if="intern"> Intern</span></h1>
            <p :title="experienceTime">{{ when[0] }} - {{ when[1] }}</p>
        </div>        
        <ul>
            <li v-for="what in whats" :key="what">{{ what }}</li>
        </ul>
        <ol>
            <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ol>
    </div>
</template>
<script setup lang="ts">
const props = defineProps(
    {
        intern: {
            type: Boolean,
            required: true
        },
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