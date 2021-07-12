gsap.registerPlugin(ScrollTrigger);

let idx = 1;

function changePage(nowIdx) {
  $('.sec').removeClass('active');
  $('.sec' + nowIdx).addClass('active');
}
const wordAni = gsap.timeline();
const mouseAni = gsap.timeline();
const penAni = gsap.timeline();
if ($(window).width() >= 768) {
  wordAni.from('.w-r', {
    x: -innerWidth,
    rotate: 720,
  }).from('.w-e', {
    x: innerWidth,
    rotate: 720,
    duration: .5,
  }).from('.w-s', {
    y: -innerHeight,
    rotate: 720,
    duration: .25,
  }).from('.w-u', {
    x: innerWidth,
    rotate: 480,
  }).from('.w-m', {
    y: innerHeight,
    rotate: 720,
  }).from('.w-e2', {
    x: -innerWidth,
    rotate: 720,
    duration: .5,
  });

  mouseAni.from('.mouse', {
    xPercent: 200,
    rotate: 8,
    duration: 3,
  })

  penAni.from('.pen', {
    xPercent: -200,
    rotate: 8,
    duration: 3,
    delay: 1
  })

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

}

var picIdx = 0;
setInterval(function () {
  if ($('.sec1').hasClass('active') && picIdx < 6) {
    $('.pic img').attr('src', 'images/210708-' + (picIdx + 1) + '.png');
    picIdx++;
  } else if ($('.sec1').hasClass('active') && picIdx >= 6) {
    picIdx = 6;
  } else {
    picIdx = 0;
    $('.pic img').attr('src', 'images/210708-' + (picIdx + 1) + '.png');
  }
}, 500);