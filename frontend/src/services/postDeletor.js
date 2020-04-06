import axios from 'axios'
import config from '../utils/config'
const baseUrl = config.backendURL + '/api/post'

const deletePost = async (id) => {
  const response = await axios.delete(baseUrl + '/' + id)
  return response.data
}

const deleteReply = async (id) => {
  const response = await axios.delete(baseUrl + '/reply/' + id)
  return response.data
}


export default { deletePost, deleteReply }