import axios from 'axios';
// constants
import { BASE_STAGING, BASE_LOCAL, BASE_PROD } from 'lib/endpoints';

if (process.env.APP_ENV === 'staging') {
  axios.defaults.baseURL = BASE_STAGING;
} else if (process.env.APP_ENV === 'production') {
  axios.defaults.baseURL = BASE_PROD;
} else {
  axios.defaults.baseURL = BASE_LOCAL;
}
