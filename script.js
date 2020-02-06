/* Get all Lottie animations on page */
const animationContainers = document.querySelectorAll('.lottie-animation__svg');
let anim;
let currentScroll = 0;


/* Create a threshold list that will call animationObserver's callback at every point */
function buildThresholdList() {
  let thresholds = [];
  let steps = 100;

  for (let i = 1; i < steps; i++) {
    let ratio = i / steps;
    thresholds.push(ratio)
  }

  thresholds.unshift(0)

  return thresholds;
}

const animationObserver = new IntersectionObserver(animationObserverCallback, {
  threshold: buildThresholdList()
});


function animationObserverCallback(entries, observer) {
  /* How much of the element should be visible before it acts */
  const ratio = 0.5

  entries.forEach(entry => {
    if (entry.intersectionRatio >= ratio) {
      anim = entry.target.dataset.name;
      console.log(currentScroll);
      lottie.goToAndStop(10, true, anim);
    }
  })

}

/* Initialize each lottie animation */
for (const el of animationContainers) {
  lottie.loadAnimation({
    container: el,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: el.dataset.animPath,
    name: el.dataset.name
  })

  animationObserver.observe(el);
}

window.addEventListener('scroll', (e) => {
  currentScroll = document.documentElement.scrollTop;
})