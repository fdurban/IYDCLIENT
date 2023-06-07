import axios from 'axios'

class UserService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getUsers() {
        return this.api.get('/getAllUsers')
    }

    getUserById(id) {
        return this.api.get(`/${id}`)
    }

    addFavoriteCard(id) {
        return this.api.put(`/${id}/favoriteCard/add`)
    }

    removeFavoriteCard(id) {
        return this.api.put(`/${id}/favoriteCard/remove`)
    }
}

const userService = new UserService()

export default userService 