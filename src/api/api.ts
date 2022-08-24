import axios from 'axios'

const instance = axios.create({
  // withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = {
  getUsers(pageSize: number, currentPage: number) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data)
  },
  unfollowUser(id: number) {
    return instance.delete(`follow/${id}`).then((response) => response.data)
  },
  followUser(id: number) {
    return instance.post(`follow/${id}`).then((response) => response.data)
  },
  getUserProfile(id: number) {
    return instance.get(`profile/${id}`).then((response) => response.data)
  }
}
