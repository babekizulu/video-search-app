//libraries
import axios from 'axios';
//variables & constants
const KEY = 'AIzaSyBPmn9yJNeXvWDWNc22x_mSYhwpDNePVxI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})