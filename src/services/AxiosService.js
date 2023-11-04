import Axios from 'axios'
import { baseURL } from '../env'
import { logger } from '../utils/Logger.js'

export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const yogaApi = Axios.create({
  baseURL: 'https://yoga-api-nzy4.onrender.com/v1/',
  timeout: 8000,
  // params: {
  //   include_adult: false,
  //   api_key: '545c6ef058e65396849dfbbf381cbca3',
  //   language: 'en-US',
  //   sort_by: 'popularity.desc',
  //   certification_country: 'US',
  //   'certification.gte': 'G',
  //   'certification.lte': 'PG-13'
  // }
})

api.interceptors.request.use(config => config, handleAxiosError)
api.interceptors.response.use(response => response, handleAxiosError)

function handleAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    logger.warn('[📡 AXIOS_ERROR_RESPONSE_DATA]', error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    logger.warn('[📡 AXIOS_ERROR_NO_RESPONSE]', error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    logger.warn('[📡 AXIOS_ERROR_INVALID_REQUEST]', error.message)
  }
  return Promise.reject(error)
}
