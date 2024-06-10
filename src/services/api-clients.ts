import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b7cab14f11844969af543b16da5de64b'
    }
})