import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({
    to,
    href,
    children,
    rounded,
    primary,
    outline,
    link,
    className,
    large,
}) => {
    let style = '';
    const props = {};
    let Component = 'button';

    if (to) {
        Component = Link;
        props.to = to;
    } else if (href) {
        Component = 'a';
        props.href = href;
    }

    if (large) style += ` py-[14px]`;
    else style += ` py-[9px]`;

    if (primary) {
        style += ` bg-primary text-white`;
    } else if (outline) {
        const type = outline?.split?.('-')?.[1];
        if (type) style += ` border border-${type} text-${type}`;
        else style += ` border border-primary text-primary`;
    } else if (link) {
        style += ` font-normal text-sm`;
    } else {
    }

    if (rounded) {
        style += ` rounded-full`;
    } else {
        style += ` rounded-lg`;
    }

    return (
        <Component
            {...props}
            className={`${style} ${className} transition-all w-fit font-semibold text-sm text-center leading-sm px-5`}
        >
            {children}
        </Component>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    rounded: PropTypes.bool,
    primary: PropTypes.bool,
    large: PropTypes.bool,
    outline: PropTypes.any,
    className: PropTypes.string,
};

export default Button;
