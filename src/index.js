import './assets/index.css'
import axios from 'axios'

var photos = []
var index = 0
var img = null

window.onload = getPhotos()
function getPhotos () {
  axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      photos = response.data
      img = document.createElement('img')
      carouselImg()
    })
    .catch((error) => {
      alert(error)
    })
}

function carouselImg () {
  img.src = photos[index].url
  img.className = 'carousel-img'
  document.getElementById('carousel').appendChild(img)
}

//Next Photo
document.getElementById('next').addEventListener('click', increment)
function increment() {
  if ( index < 4) {
    index = index + 1
    carouselImg()
  } else {
    index = 0
    carouselImg()
  }
}

//Previous photo
document.getElementById("prev").addEventListener('click', decrement);
function decrement() {
  if (index > 0){
    index = index - 1
    console.log(index)
    carouselImg()
  } else {
    index = 4
    console.log(index)
    carouselImg()
  }
}