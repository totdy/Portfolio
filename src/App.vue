<script setup lang="ts">
import Experience from "./components/Experience.vue";
import ExperienceDetails from "./components/ExperienceDetails.vue";
import LabeledImage from "./components/LabeledImage.vue";
import Map from "./components/Map.vue";

const stack = {
  php: "PHP",
  mysql: "MySQL",
  javascript: "JS",
  html: "HTML",
  css: "CSS",
}

</script>

<template>
  <nav>
    <a href="#experience">/Experience</a>
    <a href="#projects">/Projects</a>
    <a href="#contact">/Contact</a>
  </nav>
  <header>
    <div id="intro">
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
    </div>
    <fieldset>
      <legend id="based">
         Based in Porto, Portugal 
        <img src="/assets/pt.png" alt="Portugal flag" title="Portugal flag">
      </legend>
      <Map />
    </fieldset>
    <fieldset id="stack">
      <legend>My Stack</legend>
      <div v-for=" (val, key) in stack">
        <LabeledImage :img="key + '.png'" :title="val" />
      </div>
    </fieldset>
  </header>
  <main>
    <fieldset id="experience">
      <legend>Work Experience</legend>
      <Experience at="iS Intelligent Solutions" atLink="https://is-intelligentsolutions.com" logo="is.png">
        <ExperienceDetails 
          title="Full Stack Developer" 
          :intern="false" 
          :when="['May 2021', 'Sep 2023']"
          :whats="['Improved system security by implementing two-factor authentication (2FA)', 'Developed calendar management tools for the support team, allowing clear visualization of schedule and improved coordination of daily workforce activities', 'Built automation scripts to collect, transform, and import data from multiple sources and formats including CSV, XLSX files and REST/SOAP APIs into a centralized database, improving data integration and reducing manual processin']"
          :skills="['Web Development', 'PHP', 'MySQL', 'API (REST & SOAP)', 'Automations', 'Database Management', '2FA Implementation']" />
        <ExperienceDetails 
          title="Computer Assistant" 
          :intern="true" 
          :when="['Feb 2019', 'Jun 2019']"
          :whats="['Designed and implemented dynamic, responsive web pages with a focus on usability and performance', 'Contributed to the development of interactive dashboards that enabled clear and efficient data visualization']"
          :skills="['Computer management', 'Data Backup Solutions', 'HTML', 'CSS', 'JavaScript']" />
      </Experience>
      <Experience at="Porto Business School" atLink="https://www.pbs.up.pt" logo="pbs.png">
        <ExperienceDetails 
          title="Technical Support" 
          :intern="true" 
          :when="['Feb 2016', 'Jun 2016']"
          :whats="['Responded to help desk tickets, diagnosing software and hardware problems', 'Guided users through step-by-step solutions', 'Helped onboarding new users by seting up their accounts and granting the necessary system accesses']"
          :skills="['Problem olving', 'Communication', 'Help desk', 'Linux', 'Windows', 'MacOS']" />
      </Experience>
    </fieldset>
    <fieldset id="projects">
      <legend>Projects</legend>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur. Sed
          at felis a enim efficitur bibendum. Curabitur ac ligula a odio efficitur tincidunt. Nulla facilisi.</p>
      </article>
    </fieldset>
    <fieldset id="contact">
      <legend>Contact</legend>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur. Sed
          at felis a enim efficitur bibendum. Curabitur ac ligula a odio efficitur tincidunt. Nulla facilisi.</p>
      </article>
    </fieldset>
  </main>
</template>

<style scoped>

#intro{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#based{
  img {
    width: 1.5rem;
    vertical-align: middle;
    border-radius: 0.2rem;
  }
}

#stack {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(auto, 1fr);
  gap: 1rem;
  align-items: center;
}

header,
main,
nav {
  max-width: 60rem;
}

@media (max-width: 900px) {
  header {
    grid-template-columns: 1fr !important;
  }
}

header {
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(1, 1fr);
  gap: 1rem;
}

main {
  display: flex;
  flex-direction: column;
  gap: 1rem;

}

nav {
  display: none;
  flex-direction: row;
  position: sticky;
  top: 0;
  z-index: 100;
}

fieldset,
legend {
  /*border: 0.1rem solid #eee;
  border-style: outset;*/
  border: none;
  border-radius: 1rem;  
  background-color: #cfcfff
}

fieldset {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1rem;
}

legend{
  margin-inline: auto -1rem;
  padding: 0.5rem 1rem;
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