import './assets/index.css'
import axios from 'axios'

var photos = []
var index = 0
var img = null
var renderedPhoto = null

function getPhotos () {
  axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      photos = response.data
      carouselImg()
      renderPhoto()
    })
    .catch((error) => {
      alert(error)
    })
}

function carouselImg () {
  img = document.createElement('img')
  img.src = photos[index].url
  img.className = 'carousel-img'
  console.log(img)
  return img
}

function renderPhoto() {
  img.innerHTML = ''
  document.getElementById('carousel').appendChild(carouselImg())
}

getPhotos()

//Next Photo
document.getElementById('next').addEventListener('click', increment)
function increment() {
  if ( index < 4) {
    index = index + 1
    renderPhoto()
  } else {
    index = 0
    renderPhoto()
  }
}

//Previous photo
document.getElementById("prev").addEventListener('click', decrement);
function decrement() {
  if (index > 0){
    index = --index
  } else {
    index = 0
  }
}