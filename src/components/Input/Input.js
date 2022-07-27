import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

const Input = ({ control, type = 'text', placeholder = '', name }) => {
    const { field } = useController({
        name,
        control,
        defaultValue: '',
    });

    return (
        <input
            id={name}
            className="mt-[11px] py-3 px-5 rounded-full border border-[rgba(22,24,35,.06)] bg-[rgba(22,24,35,.06)] text-sm text-black outline-none focus:border-[rgba(22,24,35,.15)] caret-primary"
            type={type}
            placeholder={placeholder}
            {...field}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
};

export default Input;