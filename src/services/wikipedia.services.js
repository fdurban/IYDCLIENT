import axios from "axios";

class WikiAPIHandler {
    constructor() {
        this.baseURL = 'https://en.wikipedia.org/w/api.php';
    }

    async searchOnWiki(searchTerm) {
        const params = {
            action: "opensearch",
            search: searchTerm,
            limit: "5",
            namespace: "0",
            format: "json"
        };

        try {
            const response = await axios.get(this.baseURL, {
                params: {
                    ...params,
                    origin: "*"
                }
            });

            return response.data; // Devuelve los datos de la respuesta
        } catch (error) {
            console.error(error);
            throw new Error('Error fetching data from Wikipedia API');
        }
    }
}

export default WikiAPIHandler;

