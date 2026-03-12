<script setup lang="ts">
import Experience from "./components/Experience.vue";
import ExperienceDetails from "./components/ExperienceDetails.vue";
import LabeledImage from "./components/LabeledImage.vue";
import Map from "./components/Map.vue";
import Project from "./components/Project.vue";

const stack = {
  php: "PHP",
  mysql: "MySQL",
  javascript: "JS",
  html: "HTML",
  typescript: "TS",
  css: "CSS",
}

</script>

<template>
  <nav>
    <a href="#work">/Experience</a>
    <a href="#projects">/Projects</a>
    <a href="#contact">/Contact</a>
  </nav>
  <main>    
    <section id="intro">
      <h1>Hey! I'm Nazar</h1>
      <p>I am a Full Stack Developer always looking for new challenges. If you have a project that you would like to work on, feel free to contact me.</p>
      <ul>
        <li>
          <a href="https://github.com/totdy" target="_blank">
            <LabeledImage img="github.png" title="GitHub" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/nazar-poritskiy-7b8a04230" target="_blank">
            <LabeledImage img="linkedin.png" title="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="mailto:nazarslim@gmail.com" target="_blank">
            <LabeledImage img="mail.png" title="Email" />
          </a>
        </li>
      </ul>
    </section>
    <section id="map">
      <div>Based in Porto, Portugal <img class="flag" src="/assets/icons/pt.png" alt="Portugal flag" title="Portugal flag"></div>
      <Map />
    </section>
    <section id="stack">
      <div class="title">My Stack</div>
      <div class="stack"> 
        <div v-for=" (val, key) in stack">
          <LabeledImage :img="key + '.png'" :title="val" />
        </div>
      </div>      
    </section>
    <section id="work">
      <div class="title">Work Experience</div>
      <Experience at="iS Intelligent Solutions" atLink="https://is-intelligentsolutions.com" logo="is.png">
        <ExperienceDetails 
          title="Full Stack Developer" 
          :intern="false" 
          :when="['May 2021', 'Sep 2023']"
          :whats="['Improved system security by implementing two-factor authentication (2FA)', 'Developed calendar management tools for the support team, allowing clear visualization of schedule and improved coordination of daily workforce activities', 'Built automation scripts to collect, transform, and import data from multiple sources and formats including CSV, XLSX files and REST/SOAP APIs into a centralized database, improving data integration and reducing manual processin']"
          :skills="['HTML|CSS|JS', 'PHP', 'MySQL', 'API (REST & SOAP)', 'Automations', 'Database Management', '2FA']" />
        <ExperienceDetails 
          title="Computer Assistant Internship" 
          :intern="true" 
          :when="['Feb 2019', 'Jun 2019']"
          :whats="['Designed and implemented dynamic, responsive web pages with a focus on usability and performance', 'Contributed to the development of interactive dashboards that enabled clear and efficient data visualization']"
          :skills="['Computer management', 'Data Backup Solutions', 'HTML', 'CSS', 'JavaScript']" />
      </Experience>
      <Experience at="Porto Business School" atLink="https://www.pbs.up.pt" logo="pbs.png">
        <ExperienceDetails 
          title="Technical Support Internship" 
          :intern="true" 
          :when="['Feb 2016', 'Jun 2016']"
          :whats="['Responded to help desk tickets, diagnosing software and hardware problems', 'Guided users through step-by-step solutions', 'Helped onboarding new users by seting up their accounts and granting the necessary system accesses']"
          :skills="['Problem solving', 'Communication', 'Help desk', 'Linux', 'Windows', 'MacOS']" />
      </Experience>
    </section>
    <section id="projects">
      <div class="title">Projects</div>
      <Project 
        name="Home Away" 
        description="A simple AirBnB clone made for my CTeSP final project in 2019"
        :stack="['PHP', 'HTML', 'CSS', 'MySQL']"
        :screens="['homeAway1.png','homeAway2.png','homeAway3.png']"
        source="https://github.com/totdy/HomeAway"
      />
      <Project 
        name="Home Away" 
        description="A simple AirBnB clone made for my CTeSP final project in 2019"
        :stack="['PHP', 'HTML', 'CSS', 'MySQL']"
        :screens="['homeAway1.png','homeAway2.png','homeAway3.png']"
        visit="https://github.com/totdy/HomeAway"
      />
    </section>
  </main>
</template>

<style scoped>

#intro { grid-area: intro;}
#map { grid-area: map;}
#stack { grid-area: stack;}
#work { grid-area: work;}
#projects { grid-area: projects;}
#contact { grid-area: contact;}

.flag {
  width: 1.5rem;
  vertical-align: middle;
  border-radius: 0.2rem;
}

.title{
  background-color: var(--bg2);
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: bold;
  word-break: keep-all;
}

.stack {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  align-content: space-evenly;
  row-gap: 1rem;
}

main {
  max-width: 60rem;

  display: grid;
  gap: 1rem;
  grid-template: 
      "intro map stack"
      "work work work"
      "projects projects projects";
}

@media (max-width: 900px) {
  main {
    grid-template: 
      "intro"
      "map" 
      "stack"
      "work"
      "projects";
  }
}

nav {
  display: none;
  flex-direction: row;
  position: sticky;
  top: 0;
  z-index: 100;
}

section{
  border: none;
  border-radius: 1rem;    

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1rem;
  
  padding: 1rem;
  
  background-color: var(--bg1);

  position: relative;
}

ul{
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 1rem;
}

</style>