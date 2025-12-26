import data from "./data/properties.json";

function App() {
    return (
        <div>
            <h1>All Properties</h1>

            {data.properties.map((property) => (
                <div key={property.id}>
                    <img
                        src={property.picture}
                        alt="property"
                        width="200"
                    />
                    <h2>£{property.price}</h2>
                    <p>Bedrooms: {property.bedrooms}</p>
                    <p>{property.location}</p>
                </div>
            ))}
        </div>
    );
}

export default App;