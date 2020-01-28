/**
 * Rest Client class
 * Responsible for consuming Api endpoints
 *
 * * getRequest
 * * postRequest
 * * putRequest
 * * deleteRequest
 */
import axios from 'axios'
import Configuration from '../Api/Configuration'

class RestClient {
  constructor () {
    this.config = new Configuration()
  }

  static getRequest (url, param) {
    return axios.get(url, param)
      .then(response => {return response })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('getRequest data:', error.response.data)
          console.log('getRequest status:', error.response.status)
          console.log('getRequest headers:', error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('getRequest request:', error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('getRequest Error Message:', error.message)
        }
        console.log('getRequest config:', error.config)
      })
  }

  static postRequest (url, param) {
    return axios.post(url, param)
      .then(response => {return response })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('postRequest data:', error.response.data)
          console.log('postRequest status:', error.response.status)
          console.log('postRequest headers:', error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('postRequest request:', error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('postRequest Error Message:', error.message)
        }
        console.log('postRequest config:', error.config)
      })
  }

  static putRequest (url, param) {
    return axios.put(url, param)
      .then(response => {return response })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('putRequest data:', error.response.data)
          console.log('putRequest status:', error.response.status)
          console.log('putRequest headers:', error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('putRequest request:', error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('putRequest Error Message:', error.message)
        }
        console.log('putRequest config:', error.config)
      })
  }

  static deleteRequest (url, param) {
    return axios.delete(url, param)
      .then(response => {return response })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('deleteRequest data:', error.response.data)
          console.log('deleteRequest status:', error.response.status)
          console.log('deleteRequest headers:', error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('deleteRequest request:', error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('deleteRequest Error Message:', error.message)
        }
        console.log('deleteRequest config:', error.config)
      })
  }
}

export default RestClient
