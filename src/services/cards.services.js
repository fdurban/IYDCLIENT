import axios from 'axios'

class CardsService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cards`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getCards() {
        return this.api.get('/all')
    }

    getCardsByOwner(owner) {
        return this.api.get(`/owner/${owner}`)
    }

    getCardsBySubject(subject) {
        return this.api.get(`/subject/${subject}`)
    }

    getCardById(id) {
        return this.api.get(`details/${id}`)
    }

    editCards(cardID, cardData) {
        return this.api.put(`/${cardID}/edit`, cardData)
    }
    createCard(cardData) {
        return this.api.post(`/save`, cardData)
    }

}

const cardsService = new CardsService()

export default cardsService 