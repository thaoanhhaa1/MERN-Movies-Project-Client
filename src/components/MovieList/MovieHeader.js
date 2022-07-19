import { Link } from 'react-router-dom';

const MovieHeader = ({ children }) => {
    return (
        <h1 className="font-black text-2xl leading-sm">
            <Link className="text-black" to="/">
                {children}
            </Link>
        </h1>
    );
};

export default MovieHeader;
