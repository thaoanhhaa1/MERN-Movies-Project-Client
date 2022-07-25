const Form = ({ className = '', children }) => {
    return (
        <form
            className={`grid grid-cols-1 gap-3 w-[380px] mx-auto ${className}`}
        >
            {children}
        </form>
    );
};

export default Form;
