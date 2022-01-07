import './assets/index.css'
import axios from 'axios'

photos = []

export default function getPhotos() {
  axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(function (response) {
      photos = response.data
      console.log(photos)
    })
    .catch(function (error) {
      console.log(error)
    })
}