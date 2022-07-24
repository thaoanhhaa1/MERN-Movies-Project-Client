import PropTypes from 'prop-types';

const MoviesGrid = ({ title, children }) => {
    return (
        <div>
            {title && (
                <header className="font-medium text-2xl mt-12 mb-2">
                    {title}
                </header>
            )}
            <div className="grid grid-cols-3 gap-x-5 gap-y-6">{children}</div>
        </div>
    );
};

MoviesGrid.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default MoviesGrid;
