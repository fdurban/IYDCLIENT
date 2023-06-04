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

    getCardsByOwner(owner) {
        return this.api.get(`/${owner}`)
    }

    getCardsBySubject(subject) {
        return this.api.get(`/${subject}`)
    }

    editCards(cardID, data) {
        return this.api.put(`/${cardID}`, data)
    }
}



const cardsService = new CardsService()

export default cardsService 