<script lang="ts">
import Experience from "./components/Experience.vue";

export default {
  name: "App",
  components: {
    Experience,
  }
};
</script>

<template>
  <aside>
    <div>
      <h1>Nazar</h1>
      <p>Frontend Developer</p>
      <address>
        <p>Porto, Portugal <img src="/assets/pt.png" alt="Portugal flag" title="Portugal flag"></p>
        <p>nazar@example.com <button title="Copy email">Copy</button></p>
      </address>
    </div>
    <div>
      <a href="https://github.com/totdy">
        <img src="/assets/github.png" alt="GitHub" title="GitHub">
      </a>
      <a href="https://github.com/totdy">
        <img src="/assets/github.png" alt="GitHub" title="GitHub">
      </a>
      <a href="https://github.com/totdy">
        <img src="/assets/github.png" alt="GitHub" title="GitHub">
      </a>
    </div>
    <div>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </aside>
  <main>
    <section id="experience">
      <h1>Experience</h1>
      <Experience title="Full Stack Developer" at="iS Intelligent Solutions" where="Maia, Portugal"
        when="May 2021 - Sep 2023"
        what="I designed and implemented dynamic, responsive web pages with a focus on usability and performance. I contributed to the development of interactive dashboards that enabled clear and efficient data visualization. I improved system security by implementing two-factor authentication (2FA), strengthening protection against unauthorized access. I also developed calendar management tools for the support team, allowing clear visualization of working hours and more effective coordination of daily workforce activities. Additionally, I built automation scripts to collect, transform, and import data from multiple sources and formats including FTP files, CSV, XLSX, and REST/SOAP APIs into a centralized database, improving data integration and reducing manual processing."
        skills="HTML,CSS,JavaScript,PHP,MySQL,API (REST & SOAP),Automations,Database Management,2FA Implementation" />
      <Experience title="Computer Assistant" at="iS Intelligent Solutions" where="Maia, Portugal"
        when="Feb 2019 - Jun 2019" what="Curricular Internship"
        skills="Computer Management,Data Backup Solutions,Web Development,HTML,CSS,JavaScript" />
      <Experience title="Technical Support" at="Porto Business School" where="Porto, Portugal"
        when="Feb 2016 - Jun 2016" what="Curricular Internship"
        skills="Problem-solving,Communication,Technical Support,Linux,Windows,MacOS" />
    </section>
    <section id="projects">
      <h1>Projects</h1>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur. Sed
          at felis a enim efficitur bibendum. Curabitur ac ligula a odio efficitur tincidunt. Nulla facilisi.</p>
      </article>
    </section>
    <section id="contact">
      <h1>Contact</h1>
      <article>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur. Sed
          at felis a enim efficitur bibendum. Curabitur ac ligula a odio efficitur tincidunt. Nulla facilisi.</p>
      </article>
    </section>
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

aside,
main {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
}

aside {
  align-items: end;
  min-width: 15rem;
  width: 30%;
  background-color: rgb(165, 165, 255);
}

main {
  align-items: start;
  min-width: 15rem;
  width: 70%;
  background-color: rgb(200, 200, 255);
  overflow: auto;
  scroll-behavior: smooth;
}

section {
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    text-align: center;
    border-bottom: 0.1rem solid black;
  }
}
</style>