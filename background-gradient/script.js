var css = document.querySelector('h3')
var color1 = document.querySelector('.color1')
var color2 = document.querySelector('.color2')
var body = document.getElementById('gradient')
var button = document.getElementById('button')

function initColors () {
  color1.value = '#ff0000'
  color2.value = '#ffff00'
  setGradient();
}

function setGradient () {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')'

  setTextContent()
}

function setTextContent () {
  css.textContent = body.style.background + ';'
}

function getRandomColor () {
  var values = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color = color + values[Math.floor(Math.random() * 16)]
  }
  return color;
}

function setRandomGradient () {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	
	setGradient ();
}

color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)
button.addEventListener('click', setRandomGradient)

// init
initColors()
setTextContent()
