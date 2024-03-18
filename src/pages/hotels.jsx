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

                    <Link to={`hotel/${id}`}>
                        <button key={id}>
                            {name}
                        </button>
                    </Link>
                ))}
            </div>

        </div >
    )
}

export default Hotels;