import axios from 'axios';

const KEY = 'AIzaSyCerN6u4XUcblzK35BnEkex5Ou2F5XMdug';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

