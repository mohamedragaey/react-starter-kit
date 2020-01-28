/**
 * Talent Services class
 * Responsible for
 *
 * * getTalentData
 * * postTalentData
 * * ...
 */
import RestClient from '../Client/RestClient'

class TalentServices {

  static getTalentData () {
    return RestClient.getRequest('/users', { param: 'auth' })
  }

  static postTalentData () {
    return RestClient.postRequest('/users', { param: 'auth' })
  }
}

export default TalentServices
