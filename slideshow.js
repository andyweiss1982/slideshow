document.addEventListener('keydown', function(e){
  if (e.target !== this.body) return
  const slides = [...document.querySelectorAll('.slide')]
  const pastSlides = [...document.querySelectorAll('.slide.past')]
  const prevSlide = document.querySelector('.slide.prev')
  const currentSlide = document.querySelector('.slide.current')
  const nextSlide = document.querySelector('.slide.next')
  let index = slides.indexOf(currentSlide)
  if (prevSlide) prevSlide.classList.remove('prev')
  if (currentSlide) currentSlide.classList.remove('current')
  if (nextSlide) nextSlide.classList.remove('next')
  if (e.keyCode === 37 && index > 0) {
    index --
    const lastPast = pastSlides[pastSlides.length - 1]
    if(lastPast) lastPast.classList.remove('past')
  }
  if (e.keyCode === 39 && index < slides.length - 1) {
    index ++
    if (prevSlide) prevSlide.classList.add('past')
  }
  const newPrevSlide = slides[index - 1]
  const newCurrentSlide = slides[index]
  const newNextSlide = slides[index + 1]
  if (newPrevSlide) newPrevSlide.classList.add('prev')
  if (newCurrentSlide) newCurrentSlide.classList.add('current')
  if (newNextSlide) newNextSlide.classList.add('next')
})

document.querySelector('.material-icons.left').addEventListener('click', function(){
  const slides = [...document.querySelectorAll('.slide')]
  const pastSlides = [...document.querySelectorAll('.slide.past')]
  const prevSlide = document.querySelector('.slide.prev')
  const currentSlide = document.querySelector('.slide.current')
  const nextSlide = document.querySelector('.slide.next')
  let index = slides.indexOf(currentSlide)
  if (prevSlide) prevSlide.classList.remove('prev')
  if (currentSlide) currentSlide.classList.remove('current')
  if (nextSlide) nextSlide.classList.remove('next')
  if (index > 0) {
    index --
    const lastPast = pastSlides[pastSlides.length - 1]
    if(lastPast) lastPast.classList.remove('past')
  }
  const newPrevSlide = slides[index - 1]
  const newCurrentSlide = slides[index]
  const newNextSlide = slides[index + 1]
  if (newPrevSlide) newPrevSlide.classList.add('prev')
  if (newCurrentSlide) newCurrentSlide.classList.add('current')
  if (newNextSlide) newNextSlide.classList.add('next')
})

document.querySelector('.material-icons.right').addEventListener('click', function(){
  const slides = [...document.querySelectorAll('.slide')]
  const prevSlide = document.querySelector('.slide.prev')
  const currentSlide = document.querySelector('.slide.current')
  const nextSlide = document.querySelector('.slide.next')
  let index = slides.indexOf(currentSlide)
  if (prevSlide) prevSlide.classList.remove('prev')
  if (currentSlide) currentSlide.classList.remove('current')
  if (nextSlide) nextSlide.classList.remove('next')
  if (index < slides.length - 1) {
    index ++
    if (prevSlide) prevSlide.classList.add('past')
  }
  const newPrevSlide = slides[index - 1]
  const newCurrentSlide = slides[index]
  const newNextSlide = slides[index + 1]
  if (newPrevSlide) newPrevSlide.classList.add('prev')
  if (newCurrentSlide) newCurrentSlide.classList.add('current')
  if (newNextSlide) newNextSlide.classList.add('next')
})

function navigateToSlideFromFragment(){
  if (!window.location.hash) return
  const slideNum = parseInt(window.location.hash.substring(1))
  if (isNaN(slideNum)) return
  const slides = [...document.querySelectorAll('.slide')]
  const slide = slides[slideNum - 1]
  if (!slide) return
  const prevSlide = document.querySelector('.slide.prev')
  const currentSlide = document.querySelector('.slide.current')
  const nextSlide = document.querySelector('.slide.next')
  if (prevSlide) prevSlide.classList.remove('prev')
  if (currentSlide) currentSlide.classList.remove('current')
  if (nextSlide) nextSlide.classList.remove('next')
  const index = slides.indexOf(slide)
  for (let i = 0; i < index - 1; i ++) slides[i].classList.add('past')
  const newPrevSlide = slides[index - 1]
  const newCurrentSlide = slides[index]
  const newNextSlide = slides[index + 1]
  if (newPrevSlide) newPrevSlide.classList.add('prev')
  if (newCurrentSlide) newCurrentSlide.classList.add('current')
  if (newNextSlide) newNextSlide.classList.add('next')
}

navigateToSlideFromFragment()
