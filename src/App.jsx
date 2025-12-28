import { useState } from "react";
import data from "./data/properties.json";
import SearchForm from "./assets/SearchForm";

function App() {
    // 🔹 Search state lives here now
    const [searchValues, setSearchValues] = useState({});

    // 🔹 Filter logic
    const filteredProperties = data.properties.filter((property) => {
        const {
            type,
            minPrice,
            maxPrice,
            minBeds,
            maxBeds,
            postcode,
        } = searchValues;

        return (
            (!type || property.type === type) &&
            (!minPrice || property.price >= Number(minPrice)) &&
            (!maxPrice || property.price <= Number(maxPrice)) &&
            (!minBeds || property.bedrooms >= Number(minBeds)) &&
            (!maxBeds || property.bedrooms <= Number(maxBeds)) &&
            (!postcode ||
                property.location
                    .toLowerCase()
                    .includes(postcode.toLowerCase()))
        );
    });

    return (
        <div>
            <h1>Property Search</h1>

            {/* Pass function to child */}
            <SearchForm onSearch={setSearchValues} />

            <hr />

            <h2>Search Results</h2>

            {filteredProperties.map((property) => (
                <div key={property.id}>
                    <img src={property.picture} alt="property" width="200" />
                    <h3>£{property.price}</h3>
                    <p>Bedrooms: {property.bedrooms}</p>
                    <p>{property.location}</p>
                </div>
            ))}
        </div>
    );
}

export default App;