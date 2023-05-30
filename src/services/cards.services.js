import axios from 'axios'

class CardsService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cards`

        })
    }

    getCards() {
        return this.api.get('/all')
    }
}

const cardsService = new CardsService()

export default cardsService 