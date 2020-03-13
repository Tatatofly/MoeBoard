import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/post'

// TODO: Something to prevent malicious posts 
const postNew = async (newPostObj) => {
  await axios.post(baseUrl, newPostObj)
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
}

const replyNew = async (newPostObj, id) => {
  const url = baseUrl + '/' + id
  await axios.post(url, newPostObj)
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
}

export default { postNew, replyNew }