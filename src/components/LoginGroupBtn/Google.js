import { ButtonLogin } from '../Button';
import { GoogleIcon } from '../Icons';

const Google = ({ onClick = () => {} }) => {
    return (
        <ButtonLogin icon={GoogleIcon} onClick={onClick}>
            Continue with Google
        </ButtonLogin>
    );
};

export default Google;
