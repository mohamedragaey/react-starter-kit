/**
 * Fan Services class
 * Responsible for
 *
 * * getFanData
 * * postFanData
 * * ...
 */
import RestClient from '../Client/RestClient'

class FanServices {

  static getFanData () {
    return RestClient.getRequest('/users', { param: 'auth' })
  }

  static postFanData (data) {
    return RestClient.postRequest('/users', { param: data })
  }
}

export default FanServices
