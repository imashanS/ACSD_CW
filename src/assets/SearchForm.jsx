import { useState } from "react";

function SearchForm() {
    const [type, setType] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minBeds, setMinBeds] = useState("");
    const [maxBeds, setMaxBeds] = useState("");
    const [dateAdded, setDateAdded] = useState("");
    const [postcode, setPostcode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            type,
            minPrice,
            maxPrice,
            minBeds,
            maxBeds,
            dateAdded,
            postcode,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Search Properties</h2>

            {/* Property Type */}
            <label>
                Type:
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">Any</option>
                    <option value="House">House</option>
                    <option value="Flat">Flat</option>
                </select>
            </label>

            <br />

            {/* Price */}
            <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />

            <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />

            <br />

            {/* Bedrooms */}
            <input
                type="number"
                placeholder="Min Bedrooms"
                value={minBeds}
                onChange={(e) => setMinBeds(e.target.value)}
            />

            <input
                type="number"
                placeholder="Max Bedrooms"
                value={maxBeds}
                onChange={(e) => setMaxBeds(e.target.value)}
            />

            <br />

            {/* Date */}
            <input
                type="date"
                value={dateAdded}
                onChange={(e) => setDateAdded(e.target.value)}
            />

            <br />

            {/* Postcode */}
            <input
                type="text"
                placeholder="Postcode area (e.g. BR5)"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
            />

            <br />

            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;