<script lang="ts">
import Experience from "./components/Experience.vue";
import ExperienceDetails from "./components/ExperienceDetails.vue";

export default {
  name: "App",
  components: {
    Experience,
    ExperienceDetails,
  }
};
</script>

<template>
  <nav>
    <a href="#experience">/Experience</a>
    <a href="#projects">/Projects</a>
    <a href="#contact">/Contact</a>
  </nav>
  <header>
    <div>
      <h1>Nazar</h1>
      <p>Frontend Developer</p>
      <address>
        <p>Porto, Portugal <img src="/assets/pt.png" alt="Portugal flag" title="Portugal flag"></p>
        <p>nazar@example.com <button title="Copy email">Copy</button></p>
      </address>
    </div>
    <div>
      <a href="https://github.com/totdy" target="_blank">
        <img src="/assets/github.png" alt="GitHub" title="GitHub">
      </a>
      <a href="https://www.duyle.dev/" target="_blank">
        <img src="/assets/github.png" alt="GitHub" title="GitHub">
      </a>
      <a href="https://tedawf.com/" target="_blank">
        <img src="/assets/github.png" alt="GitHub" title="GitHub">
      </a>
    </div>
  </header>
  <main>
    <fieldset id="experience">
      <legend>Experience</legend>
      <Experience at="iS Intelligent Solutions" atLink="https://is-intelligentsolutions.com" logo="is.png">
        <ExperienceDetails
          title="Full Stack Developer"
          :intern="false"
          when="May 2021 - Sep 2023"
          what="Improved system security by implementing two-factor authentication (2FA). Developed calendar management tools for the support team, allowing clear visualization of schedule and improved coordination of daily workforce activities. Built automation scripts to collect, transform, and import data from multiple sources and formats including CSV, XLSX files and REST/SOAP APIs into a centralized database, improving data integration and reducing manual processin."
          skills="Web Development,PHP,MySQL,API (REST & SOAP),Automations,Database Management,2FA Implementation"
        />
        <ExperienceDetails 
          title="Computer Assistant"
          :intern="true"
          when="Feb 2019 - Jun 2019"
          what="Designed and implemented dynamic, responsive web pages with a focus on usability and performance. Contributed to the development of interactive dashboards that enabled clear and efficient data visualization."
          skills="Computer management,Data Backup Solutions,HTML,CSS,JavaScript"
        />
      </Experience>
      <Experience at="Porto Business School" atLink="https://www.pbs.up.pt" logo="pbs.png" >
        <ExperienceDetails 
          title="Technical Support"
          :intern="true"
          when="Feb 2016 - Jun 2016" 
          what="Responded to help desk tickets, diagnosing software and hardware problems. Guided users through step-by-step solutions. Helped onboarding new users by seting up their accounts and granting the necessary system accesses."
          skills="Problem olving,Communication,Help desk,Linux,Windows,MacOS"
        />
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
address {
  img {
    width: 1.5rem;
    vertical-align: middle;
    border-radius: 1rem;
  }

  button {
    display: inline-block;
  }
}

header,
main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

nav {
  display: block;
  flex-direction: row;
  position: sticky;
  top: 0;
  z-index: 100;
}

fieldset,
legend {
  border: 0.1rem solid #eee;
  border-radius: 1rem;
  padding: 1rem;
}

fieldset {
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

legend {}
</style>