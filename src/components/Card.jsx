import React from 'react';
import imagee from '../assets/image.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../redux/movieSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Card = ({ movie }) => {
    const dispatch = useDispatch();
    const favouriteList = useSelector(state => state.movie.favouriteList);

    const isFavourite = favouriteList.some(favourite => favourite.id === movie.id);

    const handleAddFavourite = () => {
        isFavourite
            ? (() => {
                console.log(`Removing ${movie.movie} from favourites`);
                dispatch(removeFavourite(movie.id));
            })()
            : (() => {
                console.log(`Adding ${movie.movie} to favourites`);
                dispatch(addFavourite(movie));
            })();
    };

    return (
        <>
            <div className="card">
                <div className="movieImage">
                    <img src={imagee} alt={movie.movie} />
                </div>
                <div className="card-body">
                    <h3 style={{ textAlign: 'center' }}>{movie.movie}</h3>
                    <div className="cardDetails">
                        <div className="cardLeft">
                            <p>Rating: {movie.rating}</p>
                            <a href={movie.imdb_url} target="_blank" rel="noreferrer">View on IMDB</a>
                        </div>
                        <div className="cardRight">
                            <div className='favouriteIcon' onClick={handleAddFavourite}>
                                {isFavourite ? <FavoriteIcon sx={{ fontSize: 40, color: 'red' }} /> :
                                    <FavoriteBorderIcon sx={{ fontSize: 40, color: 'red' }} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;