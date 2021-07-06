gsap.registerPlugin(ScrollTrigger);

let idx = 1;

function changePage(nowIdx) {
  $('.sec').removeClass('active');
  $('.sec' + nowIdx).addClass('active');
}
gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "center center",
    end: "bottom top",
    scrub: true,
    pin: true,
    onToggle: (self) => {
      if (!self.isActive) {
        changePage(1);
      }
    },
  },
}).to('.sec1', {
  rotate: -45,
  x: innerWidth * -1.5,
  onUpdate: () => {
    idx = 2;
    changePage(idx);
  },
}).to('.sec2', {
  rotate: -180,
  x: innerWidth * -1.5,
  onUpdate: () => {
    idx = 3;
    changePage(idx);
  },
}).to('.sec3', {
  rotate: -180,
  x: innerWidth * -1.5,
  onUpdate: () => {
    idx = 4;
    changePage(idx);
  },
}).to('.sec4', {
  rotate: -180,
  x: innerWidth * -1.5,
  onUpdate: () => {
    idx = 5;
    changePage(idx);
  },
}).to('.sec5', {
  rotate: -180,
  x: innerWidth * -1.5,
  onUpdate: () => {
    idx = 6;
    changePage(idx);
  },
}).to('.sec6', {
  rotate: -180,
  x: innerWidth * -1.5,
});