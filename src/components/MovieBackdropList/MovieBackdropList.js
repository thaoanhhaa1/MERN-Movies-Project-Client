import MovieBackdropItem from './MovieBackdropItem';

const MovieBackdropList = ({ children }) => {
    return (
        <div>
            <h2 className="font-medium text-2xl">{children}</h2>
            <div className="grid grid-cols-4">
                <MovieBackdropItem />
                <MovieBackdropItem />
                <MovieBackdropItem />
                <MovieBackdropItem />
            </div>
        </div>
    );
};

export default MovieBackdropList;
