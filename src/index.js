import './assets/index.css'
import axios from 'axios'

var photos = []
var index = 0
var Url = null

function getPhotos() {
  axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      photos = response.data.slice(0, 5)
      console.log(photos)
    })
    .catch((error) => {
      alert(error)
    })
}

function carouselImg () {
  var img = document.createElement('img')
  Url = photos[index]
  console.log(Url)
  img.src = "https://via.placeholder.com/600/92c952" //photos[index].url
  img.className = 'carousel-img'
  return img
}
document.getElementById('carousel').appendChild(carouselImg())

/*
window.onload = () => {
  getPhotos() 
}
*/
//Next Photo
document.getElementById('next').addEventListener('click', increment)
function increment() {
  if ( index < 4) {
    index = index + 1
    console.log(index)
  } else {
    index = 0
    console.log(index)
  }
}

//Previous photo
document.getElementById("prev").addEventListener('click', decrement);
function decrement() {
  if (index > 0){
    index = --index
    carouselImg()
  } else {
    index = 4
    carouselImg()
  }
}