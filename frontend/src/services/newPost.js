import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/post'

// TODO: Something to prevent malicious posts 
const postNew = async (newPostObj) => {
  console.log(newPostObj)
  await axios.post(baseUrl, newPostObj)
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
}

export default { postNew }