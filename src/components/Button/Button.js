import PropTypes from 'prop-types';

const Button = ({ children, rounded, primary, outline, link, className }) => {
    let style = '';

    if (primary) {
        style += `bg-primary text-white`;
    } else if (outline) {
        const type = outline?.split?.('-')?.[1];
        if (type) style += `border border-${type} text-${type}`;
        else style += `border border-primary text-primary`;
    } else if (link) {
        style += `font-normal text-sm`;
    } else {
    }

    if (rounded) {
        style += ` rounded-full`;
    } else {
        style += ` rounded-lg`;
    }

    return (
        <button
            className={`${style} ${className} transition-all w-fit font-semibold text-sm leading-sm px-5 py-[9px]`}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    rounded: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.any,
    className: PropTypes.string,
};

export default Button;
