import { useParams } from "react-router-dom";
import data from "../data/properties.json";

function PropertyDetails() {
    const { id } = useParams();

    const property = data.properties.find(
        (p) => p.id === id
    );

    if (!property) {
        return <h2>Property not found</h2>;
    }

    return (
        <div>
            <h1>£{property.price}</h1>
            <img src={property.picture} alt="property" width="400" />
            <p>Type: {property.type}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Location: {property.location}</p>
            <p>{property.description}</p>
        </div>
    );
}

export default PropertyDetails;