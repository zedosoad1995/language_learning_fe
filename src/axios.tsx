import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/'

const authorization = localStorage.getItem('access_token')
                        ? 'JWT ' + localStorage.getItem('access_token')
                        : null

let axiosInfo: any = {
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
}

if(authorization){
    axiosInfo.headers['Authorization'] = authorization
}


export const axiosInstance = axios.create(axiosInfo)
