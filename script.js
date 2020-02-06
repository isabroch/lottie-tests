/*
http://airbnb.io/lottie/#/web
http://scrollmagic.io/docs/
*/


/* Get all Lottie animations on page */
const animations = document.querySelectorAll('.lottie-animation');

/* An array that will hold the information of each animation */
let animationsArray = [];

/* Initialize each lottie animation */
for (const animation of animations) {
  const lottieInstance = lottie.loadAnimation({
    container: animation,
    // renderer: 'svg',
    loop: false,
    autoplay: false,
    path: animation.dataset.animPath,
    name: animation.dataset.name
  })

  animationsArray.push(lottieInstance);
}

/* Initialize ScrollMagic */
const controller = new ScrollMagic.Controller();

/* Build ScrollMagic Scene */
animationsArray.forEach(anim => {
  new ScrollMagic.Scene({
      /* Animation will be linked to the scroll progress of its container, starting when the top of container is halfway through viewport and ending when bottom of container is halfway through viewport */
      triggerElement: anim.wrapper.parentElement,
      triggerHook: 0.5,
      duration: anim.wrapper.parentElement.offsetHeight
    })
    .addTo(controller)
    // .addIndicators() /* Debugging tool to see where and when animations occur */
    .on("progress", function (e) {
      const scrollFrame = e.progress * anim.totalFrames;
      anim.goToAndStop(scrollFrame, true);
    });
})