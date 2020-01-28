/**
 * Configuration Class
 * Responsible for All The Api Configuration for the Application
 */
import axios from 'axios'

class Configuration {
  BASE_URL = 'https://jsonplaceholder.typicode.com'
}

let config = new Configuration()

axios.defaults.baseURL = config.BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default Configuration
