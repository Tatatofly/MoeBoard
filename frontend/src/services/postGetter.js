import axios from 'axios'
import config from '../utils/config'
const baseUrl = config.backendURL + '/api/post'

const getFirst = async () => {
  const response = await axios.get(baseUrl)
  return response.data[0]
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getSingle = async (id) => {
  const response = await axios.get(baseUrl + '/' + id)
  return response.data
}

export default { getFirst, getAll, getSingle }