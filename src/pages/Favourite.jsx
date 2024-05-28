import { useSelector } from "react-redux";
import Card from "../components/Card";

const Favourite = () => {
    const favouriteMovies = useSelector(state => state.movie.favouriteList);

    return (
        <>
            <div className="favourite">
                <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Favourite Movies</h1>
                <div className="favouriteMovies">
                    {favouriteMovies.length > 0 ? (
                        favouriteMovies.map(movie => (
                            <Card key={movie.id} movie={movie} />
                        ))
                    ) : (
                        <p>Add movies to your favourite list</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Favourite;