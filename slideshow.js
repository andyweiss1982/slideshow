document.addEventListener('keydown', function(e){
  if (e.target !== this.body) return
  const slides = [...document.querySelectorAll('.slide')]
  const pastSlide = document.querySelector('.slide.past')
  const prevSlide = document.querySelector('.slide.prev')
  const currentSlide = document.querySelector('.slide.current')
  const nextSlide = document.querySelector('.slide.next')
  const futureSlide = document.querySelector('.slide.future')
  let index = slides.indexOf(currentSlide)
  if (e.keyCode === 37 && index > 0) index--
  if (e.keyCode === 39 && index < slides.length - 1) index ++
  const newPastSlide = slides[index - 2]
  const newPrevSlide = slides[index - 1]
  const newCurrentSlide = slides[index]
  const newNextSlide = slides[index + 1]
  const newFutureSlide = slides[index + 2]
  if (pastSlide) pastSlide.classList.remove('past')
  if (prevSlide) prevSlide.classList.remove('prev')
  if (currentSlide) currentSlide.classList.remove('current')
  if (nextSlide) nextSlide.classList.remove('next')
  if (futureSlide) futureSlide.classList.remove('future')
  if (newPastSlide) newPastSlide.classList.add('past')
  if (newPrevSlide) newPrevSlide.classList.add('prev')
  if (newCurrentSlide) newCurrentSlide.classList.add('current')
  if (newNextSlide) newNextSlide.classList.add('next')
  if (newFutureSlide) newFutureSlide.classList.add('future')
})

document.querySelector('.material-icons.left').addEventListener('click', function(){
  const slides = [...document.querySelectorAll('.slide')]
  const pastSlide = document.querySelector('.slide.past')
  const prevSlide = document.querySelector('.slide.prev')
  const currentSlide = document.querySelector('.slide.current')
  const nextSlide = document.querySelector('.slide.next')
  const futureSlide = document.querySelector('.slide.future')
  let index = slides.indexOf(currentSlide)
  if (index < slides.length - 1) index++
  const newPastSlide = slides[index - 2]
  const newPrevSlide = slides[index - 1]
  const newCurrentSlide = slides[index]
  const newNextSlide = slides[index + 1]
  const newFutureSlide = slides[index + 2]
  if (pastSlide) pastSlide.classList.remove('past')
  if (prevSlide) prevSlide.classList.remove('prev')
  if (currentSlide) currentSlide.classList.remove('current')
  if (nextSlide) nextSlide.classList.remove('next')
  if (futureSlide) futureSlide.classList.remove('future')
  if (newPastSlide) newPastSlide.classList.add('past')
  if (newPrevSlide) newPrevSlide.classList.add('prev')
  if (newCurrentSlide) newCurrentSlide.classList.add('current')
  if (newNextSlide) newNextSlide.classList.add('next')
  if (newFutureSlide) newFutureSlide.classList.add('future')
})

document.querySelector('.material-icons.right').addEventListener('click', function(){
  const slides = [...document.querySelectorAll('.slide')]
  const pastSlide = document.querySelector('.slide.past')
  const prevSlide = document.querySelector('.slide.prev')
  const currentSlide = document.querySelector('.slide.current')
  const nextSlide = document.querySelector('.slide.next')
  const futureSlide = document.querySelector('.slide.future')
  let index = slides.indexOf(currentSlide)
  if (index < slides.length - 1) index++
  const newPastSlide = slides[index - 2]
  const newPrevSlide = slides[index - 1]
  const newCurrentSlide = slides[index]
  const newNextSlide = slides[index + 1]
  const newFutureSlide = slides[index + 2]
  if (pastSlide) pastSlide.classList.remove('past')
  if (prevSlide) prevSlide.classList.remove('prev')
  if (currentSlide) currentSlide.classList.remove('current')
  if (nextSlide) nextSlide.classList.remove('next')
  if (futureSlide) futureSlide.classList.remove('future')
  if (newPastSlide) newPastSlide.classList.add('past')
  if (newPrevSlide) newPrevSlide.classList.add('prev')
  if (newCurrentSlide) newCurrentSlide.classList.add('current')
  if (newNextSlide) newNextSlide.classList.add('next')
  if (newFutureSlide) newFutureSlide.classList.add('future')
})
