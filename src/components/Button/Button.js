const Button = ({ children, rounded, primary, outline }) => {
    let style = '';

    if (primary) {
        style += `bg-primary text-white`;
    } else if (outline) {
        style += `border border-primary text-primary`;
    } else {
    }

    if (rounded) {
        style += ` rounded-full`;
    } else {
        style += ` rounded-lg`;
    }

    return (
        <button
            className={`${style} font-semibold text-sm leading-sm px-5 py-[9px]`}
        >
            {children}
        </button>
    );
};

export default Button;
