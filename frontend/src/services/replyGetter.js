import axios from 'axios'
import config from '../utils/config'
const baseUrl = config.backendURL + '/api/post/'

const getAll = async () => {
  const response = await axios.get(baseUrl + "reply")
  return response.data
}

const getAllFromPost = async (postID) => {
  const response = await axios.get(baseUrl + postID + "/reply")
  return response.data
}

export default { getAll, getAllFromPost }