import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import data from "./data/properties.json";
import SearchForm from "./assets/SearchForm";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
    // Search state
    const [searchValues, setSearchValues] = useState({});

    // Filter properties
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
        <Routes>
            {/* SEARCH PAGE */}
            <Route
                path="/"
                element={
                    <div>
                        <h1>Property Search</h1>

                        <SearchForm onSearch={setSearchValues} />

                        <hr />

                        <h2>Search Results</h2>

                        {filteredProperties.map((property) => (
                            <div key={property.id} style={{ marginBottom: "20px" }}>
                                <Link to={`/property/${property.id}`}>
                                    <img
                                        src={property.picture}
                                        alt="property"
                                        width="200"
                                    />
                                    <h3>£{property.price}</h3>
                                </Link>

                                <p>Bedrooms: {property.bedrooms}</p>
                                <p>{property.location}</p>
                            </div>
                        ))}
                    </div>
                }
            />

            {/* PROPERTY DETAILS PAGE */}
            <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
    );
}

export default App;