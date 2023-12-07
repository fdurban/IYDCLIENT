import React, { useState, useEffect } from "react";
import WikiAPIHandler from '../../services/wikipedia.services';

const Wikipedia = () => {
    const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda
    const [searchResults, setSearchResults] = useState([]); // Estado para almacenar los resultados de la búsqueda

    const handleSearch = async () => {
        const wikiService = new WikiAPIHandler();
        try {
            const response = await wikiService.searchOnWiki(searchTerm);
            if (Array.isArray(response)) {
                setSearchResults(response); // Establecer los resultados en el estadoç
            } else {
                console.error('Unexpected data structure received from Wikipedia API');
            }
        } catch (error) {
            console.error('Error fetching Wikipedia data:', error);
        }
    };

    useEffect(() => {
        handleSearch();
    }, []); // Ejecutar solo una vez al montar el componente

    return (
        <div>
            <h1>Wikipedia Search</h1>
            <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter search term"
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <ul>
                {searchResults[1] && searchResults[1].map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
}

export default Wikipedia;


