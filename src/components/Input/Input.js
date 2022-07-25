import PropTypes from 'prop-types';

const Input = ({ type = 'text', placeholder = '', name }) => {
    return (
        <input
            id={name}
            name={name}
            className="mt-[11px] py-3 px-5 rounded-full border border-[rgba(22,24,35,.06)] bg-[rgba(22,24,35,.06)] text-sm text-black outline-none focus:border-[rgba(22,24,35,.15)] caret-primary"
            type={type}
            placeholder={placeholder}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
};

export default Input;
