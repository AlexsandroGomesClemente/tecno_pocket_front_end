import axios from "axios";

export default axios.create({
    baseURL: 'https://tecno-pocket-backend.onrender.com/',
    headers: {
        'Content-Type': 'application/json'
        //'Accept-Encoding': '*',
    },
    timeout: 80000,
});
