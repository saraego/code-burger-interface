import axios from "axios"

const apiCodeBurgue = axios.create({
    baseURL:'http://localhost:3001'
})

apiCodeBurgue.interceptors.request.use(async config => {
    const userData = await localStorage.getItem('codeburgue:userData')
    const token = userData && JSON.parse(userData).token

    config.headers.Authorization = `Bearer ${token}`
   
    return config
})

export default apiCodeBurgue