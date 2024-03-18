import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hotels = () => {
    const hotels = useSelector(state => state.hotels)

    if (!hotels) return <p>No hotels...</p>

    return (
        <div>
            <h2>Hotels: </h2>
            <div className="hotels-list__container">
                {hotels?.map(({ name, id }) => (
                    <button key={id}>
                        <Link to={`hotel/${id}`}>
                            {name}
                        </Link>
                    </button>
                ))}
            </div>

        </div>
    )
}

export default Hotels;