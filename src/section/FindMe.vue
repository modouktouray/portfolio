<template>
  <div class="main-container">
    <h1 class="text-white">Find Me</h1>
    <div class="find-me-container">
      <img
        ref="img"
        src="../assets/images/mkt.jpeg"
        alt="Portrait photo of Ayushman"
        @mouseenter="imagePopup"
        @mouseleave="imagePopdown"
      />
      <div class="icons text-white">
        <FindMeIcons
          class="email"
          title="email"
          content="touraymodouk11@gmail.com.com"
        />
        <FindMeIcons
          title="github"
          content="Modou K Touray"
          link="https://github.com/modouktouray/portfolio"
        />
        <FindMeIcons
          title="instagram"
          content="engineerktouray"
          link="http://instagram.com/engineerktouray"
        />
        <FindMeIcons
          title="linkedin"
          content="Modou K Touray"
          link="https://www.linkedin.com/in/modou-k-touray-304786162/"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineLite } from "gsap/dist/gsap";

import FindMeIcons from "../components/FindMeIcons";
export default {
  name: "FindMe",
  components: {
    FindMeIcons,
  },
  methods: {
    imagePopup() {
      const img = this.$refs.img;
      const tl = new TimelineLite();

      tl.to(img, {
        boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.55)",
        scale: 1.1,
      });
    },
    imagePopdown() {
      const img = this.$refs.img;
      const tl = new TimelineLite();

      tl.to(img, {
        scale: 1,
      });
    },
  },
};
</script>

<style scoped>
.main-container {
  padding-bottom: 20em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: url("../assets/pattern/tic-tac-toe.svg");
}
h1 {
  margin-top: 1em;
  text-align: center;
}
img {
  border: 10px solid white;
  border-radius: 50%;
  width: clamp(200px, 20vw, 20vw);
}
.find-me-container {
  margin-top: 3em;
  width: 80vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}
.icons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
}

@media (max-width: 700px) {
  img {
    margin-bottom: 2em;
  }
  .icons {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.2em;
  }
}
</style>