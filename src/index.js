import './assets/index.css'
import axios from 'axios'

var photos = []
var i = 0

function getPhotos() {
  axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(function (response) {
      photos = response.data.slice(0, 5)
      console.log(photos)
    })
    .catch(function (error) {
      console.log(error)
    })
}

getPhotos()

//Next Photo
function increment() {
  i = +i
  console.log(i)
}

//Previous photo
document.getElementById("prev").addEventListener("click", decrement);
function decrement() {
  if (i > 0){
    i = --i
    console.log(i)
  }else {
    i = 5
    console.log(i)
  }
}

const carouselImg = () => {
  var img = document.createElement('img')
  img.src = 'https://via.placeholder.com/600/771796'
  img.className = 'carousel-img'
  return img
}

document.getElementById('carousel').appendChild(carouselImg())