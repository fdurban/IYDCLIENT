import axios from 'axios'

class UserService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`

        })
    }

    getUsers() {
        return this.api.get('/getAllUsers')
    }

    getUsersById(id) {
        return this.api.get(`/${id}`)
    }
}

const userService = new UserService()

export default userService 