import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/users/',
})

export function getGithubUser(search) {
  return api.get(search)
}

export default api
