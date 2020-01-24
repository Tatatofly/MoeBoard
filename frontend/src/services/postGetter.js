  
import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/post'

const getFirst = async () => {
  const response = await axios.get(baseUrl)
  return response.data[0]
}

export default { getFirst }