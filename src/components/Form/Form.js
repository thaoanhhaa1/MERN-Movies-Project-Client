import PropTypes from 'prop-types';

const Form = ({ className = '', children, onSubmit }) => {
    return (
        <form
            onSubmit={onSubmit}
            className={`grid grid-cols-1 gap-3 w-[380px] mx-auto ${className}`}
        >
            {children}
        </form>
    );
};

Form.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func,
};

export default Form;
