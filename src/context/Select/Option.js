import { useSelect } from './Select';

const Option = ({ children, value: valueProp }) => {
    const { setLabel, setValue } = useSelect();

    return (
        <div
            onClick={() => {
                setValue(valueProp);
                setLabel(children);
            }}
            className="px-3 py-2 text-sm"
        >
            {children}
        </div>
    );
};

export default Option;
