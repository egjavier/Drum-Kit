const a = document.querySelector('#a')
const s = document.querySelector('#s')
const d = document.querySelector('#d')
const f = document.querySelector('#f')
const g = document.querySelector('#g')
const h = document.querySelector('#h')
const j = document.querySelector('#j')
const k = document.querySelector('#k')
const l = document.querySelector('#l')
const clap = new Audio('./sounds/clap.wav')
const hihat = new Audio('./sounds/hihat.wav')
const kick = new Audio('./sounds/kick.wav')
const openhat = new Audio('./sounds/openhat.wav')
const boom = new Audio('./sounds/boom.wav')
const ride = new Audio('./sounds/snare.wav')
const snare = new Audio('./sounds/clap.wav')
const tom = new Audio('./sounds/tom.wav')
const tink = new Audio('./sounds/tink.wav')

play(a, clap, 'a')
play(s, hihat, 's')
play(d, kick, 'd')
play(f, openhat, 'f')
play(g, boom, 'g')
play(h, ride, 'h')
play(j, snare, 'j')
play(k, tom, 'k')
play(l, tink, 'l')

function play(letter, sound, string) {
  letter.addEventListener('click', () => {
    sound.cloneNode().play()
    letter.style.boxShadow = '2px 2px 5px white , -2px -2px 5px white'
    setTimeout(() => {
      letter.style.boxShadow = 'none'
    }, 50)
  })

  document.body.addEventListener('keypress', (e) => {
    if (e.key === string) {
      sound.cloneNode().play()
      letter.style.boxShadow = '2px 2px 5px white , -2px -2px 5px white'
      setTimeout(() => {
        letter.style.boxShadow = 'none'
      }, 50)
    }
  })



}


