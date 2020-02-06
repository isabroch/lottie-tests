/*
http://airbnb.io/lottie/#/web
http://scrollmagic.io/docs/
*/


/* Get all Lottie animations on page */
const animations = document.querySelectorAll('.lottie-animation');

let animationsObject = {};

/* Initialize each lottie animation */
for (const animation of animations) {
  const lottieInstance = lottie.loadAnimation({
    container: animation,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animation.dataset.animPath,
    name: animation.dataset.name
  })

  const container = animation.parentElement;

  animationsObject[animation.dataset.name] = {instance: lottieInstance, container: container};
}

/* Initialize ScrollMagic */
const controller = new ScrollMagic.Controller();