<script setup lang="ts">
import Experience from "./components/Experience.vue";
import ExperienceDetails from "./components/ExperienceDetails.vue";
import LabeledImage from "./components/LabeledImage.vue";
import Project from "./components/Project.vue";
import ThemeToggle from "./components/ThemeToggle.vue";

const stack = {
  php: "PHP",
  mysql: "MySQL",  
  vuejs: "VUE",
  html: "HTML",
  typescript: "TS",
  css: "CSS",
}

function Print(){
  window.print();
}

</script>

<template>
  <main>    
    <section id="intro">
      <h1>Hey! I'm Nazar Poritskiy <ThemeToggle/></h1>
      <p>I am a Full Stack Developer based in Porto, Portugal <img class="flag ignoreTheme" src="/assets/icons/pt.png" alt="Portugal flag" title="Portugal flag"> always looking for new challenges. If you have a project that you would like to work on, feel free to contact me.</p>      
      <ul class="socials">
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
        <li class="portfolioLink">
          <a href="https://totdy.github.io/Portfolio" target="_blank">
            <LabeledImage img="mail.png" title="Portfolio" />
          </a>
        </li>
        <li class="printBtn">
          <button @click="Print">
            <LabeledImage img="cv.png" title="CV" />
          </button>
        </li>
      </ul>
    </section>    
    <section id="stack">
      <h4 class="title">My Stack</h4>
      <div class="stack"> 
        <div v-for=" (val, key) in stack">
          <LabeledImage :img="key + '.png'" :title="val" />
        </div>
      </div>      
    </section>
    <section id="work">
      <h4 class="title">Work Experience</h4>
      <Experience at="iS Intelligent Solutions" atLink="https://is-intelligentsolutions.com" logo="is.png">
        <ExperienceDetails 
          title="Full Stack Developer" 
          :when="['May 2021', 'Sep 2023']"
          :whats="[
            'Improved system security by implementing two-factor authentication (2FA)',
            'Developed calendar management tools for the support team, allowing clear visualization of schedules and improved coordination of daily workforce activities',
            'Built automation scripts to collect, transform, and import data from multiple sources and formats, including CSV and XLSX files and REST/SOAP APIs, into a centralized database, improving data integration and reducing manual processing'
          ]"
          :skills="['HTML•CSS•JS', 'PHP', 'MySQL', 'API (REST & SOAP)', 'Automations', 'Database Management', '2FA']" />
        <ExperienceDetails 
          title="Computer Assistant Internship" 
          :when="['Feb 2019', 'Jun 2019']"
          :whats="[
            'Designed and implemented dynamic, responsive web pages with a focus on usability and performance',
            'Contributed to the development of interactive dashboards that enabled clear and efficient data visualization'
          ]"
          :skills="['Computer management', 'Data Backup Solutions', 'HTML', 'CSS', 'JavaScript']" />
      </Experience>
      <Experience at="Porto Business School" atLink="https://www.pbs.up.pt" logo="pbs.png">
        <ExperienceDetails 
          title="Technical Support Internship" 
          :when="['Feb 2016', 'Jun 2016']"
          :whats="[
            'Responded to help desk tickets, diagnosing software and hardware problems',
            'Guided users through step-by-step solutions', 
            'Helped onboard new users by setting up their accounts and granting the necessary system access'
          ]"
          :skills="['Problem solving', 'Communication', 'Help desk', 'Linux', 'Windows', 'MacOS']" />
      </Experience>
    </section>
    <section id="projects">
      <h4 class="title">Projects</h4>
      <Project 
        name="Home Away" 
        description="Developed a simple Airbnb clone as my final project."
        :stack="['PHP', 'HTML', 'CSS', 'MySQL']"
        :screens="['homeAway1.png','homeAway2.png','homeAway3.png']"
        source="https://github.com/totdy/HomeAway"
      />
    </section>
  </main>
</template>

<style scoped>

#intro { grid-area: intro;}
#stack { grid-area: stack;}
#work { grid-area: work;}
#projects { grid-area: projects;}
#contact { grid-area: contact;}

.portfolioLink{
  display: none;
}

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
  word-break: keep-all;
}

.stack {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  align-content: space-evenly;  
}

#intro h1{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

main {
  max-width: 60rem;

  display: grid;
  gap: 1rem;
  grid-template: 
      "intro intro stack"
      "work work work"
      "projects projects projects";
  grid-template-rows: auto;  
}

@media (max-width: 900px) {
  main {
    grid-template: 
      "intro"
      "stack"
      "work"
      "projects";
  }
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

  h4{    
    font-size: 0.9rem;
  }
}

.socials {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 1rem;
}

@media print {
  #projects{
    display: none;
  }

  .socials {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding-top: 0.5rem;

    *{
      padding: 0;
    }
  }

  .portfolioLink{
    display: block;
  }
  
  .printBtn{
    display: none;
  }

  .title {
    padding: 0;
  }
  section {
    gap: 0rem;
    padding: 0rem;
  }
}

</style>