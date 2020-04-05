import axios from 'axios'
import config from '../utils/config'
const baseUrl = config.backendURL + '/api/post'

// TODO: Something to prevent malicious posts 
const postNew = async (newPostObj) => {
  await axios.post(baseUrl, newPostObj)
  .then(function (response) {
    window.location.reload(false)
  })
  .catch(function (error) {
    console.log(error)
  })
}

const replyNew = async (newPostObj, id) => {
  const url = baseUrl + '/' + id
  await axios.post(url, newPostObj)
  .then(function (response) {
    window.location.reload(false)
  })
  .catch(function (error) {
    console.log(error)
  })
}

export default { postNew, replyNew }