import { useParams } from "react-router-dom";
import { useState } from "react";
import data from "../data/properties.json";

function PropertyDetails() {
    const { id } = useParams();


    const property = data.properties.find(
        (p) => p.id === id
    );
    // Tabs state
    const [activeTab, setActiveTab] = useState("description");

    // Image gallery state
    const [mainImage, setMainImage] = useState(property.picture);


    if (!property) {
        return <h2>Property not found</h2>;
    }



    return (
        <div>
            <h1>£{property.price}</h1>

            {/* Main Image */}
            <img src={mainImage} alt="property" width="400" />

            {/* Thumbnails */}
            {property.images && (
                <div>
                    {property.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="thumbnail"
                            width="80"
                            onClick={() => setMainImage(img)}
                            style={{
                                cursor: "pointer",
                                margin: "5px",
                                border:
                                    mainImage === img ? "2px solid black" : "none",
                            }}
                        />
                    ))}
                </div>
            )}

            <p>Type: {property.type}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Location: {property.location}</p>

            <button onClick={() => alert("Added to favourites!")}>
                ❤️ Add to Favourites
            </button>

            <hr />

            {/* Tabs */}
            <button onClick={() => setActiveTab("description")}>
                Description
            </button>
            <button onClick={() => setActiveTab("floorplan")}>
                Floor Plan
            </button>
            <button onClick={() => setActiveTab("map")}>
                Map
            </button>

            <hr />

            {/* Tab Content */}
            {activeTab === "description" && (
                <p>{property.description}</p>
            )}

            {activeTab === "floorplan" && property.floorPlan && (
                <img
                    src={property.floorPlan}
                    alt="floor plan"
                    width="400"
                />
            )}

            {activeTab === "map" && property.map && (
                <iframe
                    title="map"
                    src={property.map}
                    width="400"
                    height="300"
                    loading="lazy"
                ></iframe>
            )}
        </div>
    );
}

export default PropertyDetails;