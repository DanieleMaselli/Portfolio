VanillaTilt.init(document.querySelector(".img"), {
  max: 35,
  speed: 10,
});

VanillaTilt.init(document.querySelectorAll(".img"));

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

const revealTypes = document.querySelectorAll(".reveal-type");
const revealLink = document.querySelectorAll(".reveal-link");

revealTypes.forEach((element, i) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        toggleActions: "play play reverse reverse",
      },
    }
  );
});

revealLink.forEach((element, i) => {
  gsap.fromTo(
    element,
    {
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        toggleActions: "play play reverse reverse",
      },
    }
  );
});
