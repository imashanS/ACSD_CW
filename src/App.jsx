import data from "./data/properties.json";
import SearchForm from "./assets/SearchForm.jsx";

function App() {
    return (
        <div>
            <h1>Property Search</h1>
            {/* Search Form */}
            <SearchForm />

            <hr/>
            <h2> All properties</h2>

            {data.properties.map((property) => (
                <div key={property.id}>
                    <img
                        src={property.picture}
                        alt="property"
                        width="200"
                    />
                    <h3>£{property.price}</h3>
                    <p>Bedrooms: {property.bedrooms}</p>
                    <p>{property.location}</p>
                </div>
            ))}
        </div>
    );
}

export default App;