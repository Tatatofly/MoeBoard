import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/post/'

const getAll = async () => {
  const response = await axios.get(baseUrl + "reply")
  return response.data
}

const getAllFromPost = async (postID) => {
  const response = await axios.get(baseUrl + postID + "/reply")
  return response.data
}

export default { getAll, getAllFromPost }