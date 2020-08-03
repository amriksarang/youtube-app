//const KEY = 'AIzaSyBpK_cmthdbSjdnzu50qCuWG8lnnDuDUUw';
import axios from "axios";
 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
