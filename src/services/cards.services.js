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

<<<<<<< HEAD
    editCards(cardID, data) {
        return this.api.put(`/${cardID}`, data)
    }
=======
    getCardsById(id) {
        return this.api.get(`/${id}`)
    }

    editCards(id, cardData) {
        return this.api.put(`/${id}/edit`, cardData)
    }

>>>>>>> cristian
}



const cardsService = new CardsService()

export default cardsService 