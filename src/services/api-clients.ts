import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '392f73b6ac234910b30fc9ac0f3bf7e6'
    }
})