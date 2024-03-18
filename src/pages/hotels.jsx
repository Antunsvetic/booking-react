import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hotels = () => {
    const hotels = useSelector(state => state.hotels)

    if (!hotels) return <p>No hotels...</p>

    return (
        <div>
            <h2>Hotels: </h2>
            {hotels?.map(({ name, id }) => (
                <p key={id}>
                    <Link to={`hotel/${id}`}>{name}</Link>
                </p>
            ))}

        </div>
    )
}

export default Hotels;