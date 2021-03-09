function handleIntersection(entries, o) {
  entries.map((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    } else {
      entry.target.classList.remove('visible')
    }
  });
}

let options = {
  root: null, // relative to document viewport 
  rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
  threshold: 1.0 // visible amount of item shown in relation to root
};
 
let observer = new IntersectionObserver(handleIntersection)

window.addEventListener("load", (event) => {
  let frames = document.querySelectorAll('.sentinel')

  frames.forEach(frame => observer.observe(frame))

  console.log(frames)
}, false);