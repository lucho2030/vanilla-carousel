import './assets/main.css'
import axios from 'axios'

var images = []
var index = 0
var img = null

window.onload = getPhotos()
function getPhotos () {
  axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      images = response.data.slice(0, 5)
      for (index = 0; index < 5; index ++) {
        img = document.createElement('img')
        img.src = images[index].url
        img.className = 'carousel-image'
        document.getElementById('carousel').appendChild(img)
      }
    })
    .catch((error) => {
      alert(error)
    })
}   

//Next Photo
document.getElementById('next').addEventListener('click', increment)
function increment() {
  if ( index < 4) {
    index = index + 1
  } else {
    index = 0
  }
}

//Previous photo
document.getElementById("prev").addEventListener('click', decrement);
function decrement() {
  if (index > 0){
    index = index - 1
  } else {
    index = 4
  }
}