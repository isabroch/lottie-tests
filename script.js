/* Get all Lottie animations on page */
const animationContainers = document.querySelectorAll('.lottie-animation');

/* Initialize each lottie animation */
for (const container of animationContainers) {

  const animation = container.querySelector('.lottie-animation__svg');
  lottie.loadAnimation({
    container: animation,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animation.dataset.animPath,
    name: animation.dataset.name
  })

}

