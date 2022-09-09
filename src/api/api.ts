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
  }
}

export const profileAPI = {
  getUserProfile(id: number) {
    return instance.get(`profile/${id}`).then((response) => response.data)
  },
  getUserStatus(id: number) {
    return instance
      .get(`profile/status/${id}`)
      .then((response) => response.data)
  },
  setUserStatus(status: string) {
    return instance
      .put(`profile/status`, {status})
      .then((response) => response.data)
  },
  savePhoto(photo: any) {
    const formData = new FormData()
    formData.append('image', photo)
    return instance
      .put('profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => response.data)
  },
  saveProfile(profile: any) {
    return instance.put('profile', profile).then((response) => response.data)
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => response.data)
  },
  login(
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string = ''
  ) {
    return instance
      .post('/auth/login', {email, password, rememberMe, captcha})
      .then((response) => response.data)
  },
  logout() {
    return instance.delete('/auth/login').then((response) => response.data)
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance
      .get('security/get-captcha-url')
      .then((response) => response.data)
  }
}
