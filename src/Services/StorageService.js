/**
 * LocalStorage Service
 *
 *  To handle {setItem,getItem,removeItem} after validating the value.
 *
 *** NOTICE ***
 * use {localStorage} for web
 * use {AsyncStorage} for mobile
 * **************************************
 */
export class StorageService {
  static data = []
  static set = async (field, value) => {
    StorageService.data[field] = value
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    return localStorage.setItem(field, value)
  }

  static setMultiple = (data) => {
    Object.keys(data).forEach(async (key) => {
      let value = data[key]
      await this.set(key, value)
    })
  }

  static get = async (key) => {
    if (StorageService.data[key] === undefined) {
      StorageService.data[key] = await localStorage.getItem(key)
    }

    return StorageService.data[key]
  }

  static removeItem = async (key) => {
    delete StorageService.data[key]
    return localStorage.removeItem(key)
  }
}
