import  { useState } from 'react';

function MoviesList() {
    const [movies, setMovies] = useState([
        { title: 'Up', genre: 'Action', description: 'An octogenarian and boy scout embark on the adventure of a lifetime.' },
        { title: 'Toy Story 2', genre: 'Comedy', description: "Andy's toys enter another chapter of hijinks." },
        { title: 'Inside Out', genre: 'Thriller', description: "An allegory of a teenage girl's emotions as she grapples with a move across the country." }
    ]);
    const [showDetails, setShowDetails] = useState(Array(movies.length).fill(false));
    const [showAction, setShowAction] = useState(false);

    const toggleDetails = (index) => {
        const newShowDetails = [...showDetails];
        newShowDetails[index] = !newShowDetails[index];
        setShowDetails(newShowDetails);
    };

    const removeMovie = (index) => {
        const newMovies = movies.filter((_, i) => i !== index);
        setMovies(newMovies);
        setShowDetails(showDetails.filter((_, i) => i !== index));
    };

    const toggleGenre = () => {
        setShowAction(prevShowAction => !prevShowAction);
    };

    const filteredMovies = showAction ? movies.filter(movie => movie.genre === 'Action') : movies;

    return (
        <div>
            <button onClick={toggleGenre}>
                {showAction ? 'Show All Movies' : 'Show Action Movies'}
            </button>
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(index)}>{movie.title}</span>
                        {showDetails[index] && <p>{movie.description}</p>}
                        <button onClick={() => removeMovie(index)} style={{ marginLeft: '10px'}}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MoviesList;