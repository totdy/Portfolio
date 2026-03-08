<template>
    <div>
        <h2>{{ title }} <span v-if="intern">(Intern)</span></h2>
        <p>{{ when }} <wbr> {{ experienceTime }}</p>     
        <div>
            {{ what }}
            <ul>
                <li v-for="skill in skillsArray" :key="skill">{{ skill }}</li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "ExperienceDetails",
    props: {
        intern: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        when: {
            type: String,
            required: true
        },
        what: {
            type: String,
            required: true
        },
        skills: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const skillsArray = props.skills.split(",");

        const [experienceStart, experienceEnd] = props.when.split(" - ");
        const start = new Date(experienceStart || "");
        const end = new Date(experienceEnd || "");
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

        return { skillsArray, experienceTime };
    }
}
</script>
<style scoped>
</style>