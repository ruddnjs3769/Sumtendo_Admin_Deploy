import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net',
  headers: {
    'Content-Type': 'application/json',
    masterKey: 'true',
    apikey: 'KDT5_nREmPe9B',
    username: 'KDT5_Team6',
  },
})

export const authenticateAdmin = async (username: string, password: string) => {
  try {
    const { data } = await axios({
      url: `/api/handler?id=${username}&password=${password}`,
      method: 'GET',
    })
    return data.isAdmin
  } catch (error) {
    console.error(error)
    return false
  }
}
