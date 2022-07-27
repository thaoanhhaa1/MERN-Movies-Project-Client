import useForm from '~/context/Form';
import Button from '../Button';

const Submit = ({ children, className = '' }) => {
    const { cols } = useForm();

    return (
        <div className={`col-start-1 col-end-${cols + 1}`}>
            <Button large className={`mx-auto ${className}`} primary>
                {children}
            </Button>
        </div>
    );
};

export default Submit;
