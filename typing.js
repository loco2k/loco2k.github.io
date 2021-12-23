const h2 = document.querySelector('h2')
// h1.innerHTML = h1.textContent.replace(/\S/g, "<span>$&</span>")

// Support Space:
h2.innerHTML = h2.textContent
  .replace(/\S/g, "<span>$&</span>")
  .replace(/\s/g, "<span>&nbsp;</span>")

let delay = 0
document.querySelectorAll('span').forEach((span, index) => {
  delay += 0.1
  
  if (index === 6) delay += 0.3
  
  span.style.setProperty('--delay', `${delay}s`)
})

h2.addEventListener('animationend', (e) => {
  if (e.target === document.querySelector('h2 span:last-child')) {
    h2.classList.add('ended')
  }
})