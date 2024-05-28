import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/movieSlice";
import Card from "../components/Card";

const Movie = () => {
    const dispatch = useDispatch();
    const { movieList, status, error } = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            console.error("Error fetching movies:", error);
        }
    }, [error]);

    if (status === 'loading') {
        console.log('loading');
    }

    if (status === 'failed') {
        console.log('failed');
    }

    if (status === 'succeeded') {
        console.log('succeeded');
    }

    return (
        <div className="movie">
            <h1 style={{ textAlign: 'center', marginTop: '30px' }}>Movies</h1>
            <div className="movieCardOuter">
                {status === 'succeeded' ? (
                    movieList.map(movie => (
                        <Card key={movie.id} movie={movie} />
                    ))
                ) : status === 'loading' ? (
                    <p>Loading...</p>
                ) : status === 'failed' ? (
                    <p>Failed to load movies</p>
                ) : (
                    <p>No movies found</p>
                )}
            </div>
        </div>
    );
}

export default Movie;