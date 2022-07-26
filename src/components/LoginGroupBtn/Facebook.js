import PropTypes from 'prop-types';
import { ButtonLogin } from '../Button';
import { FacebookIcon } from '../Icons';

const Facebook = (props) => {
    return (
        <ButtonLogin icon={FacebookIcon} {...props}>
            Continue with Facebook
        </ButtonLogin>
    );
};

Facebook.propTypes = {
    onClick: PropTypes.func,
};

export default Facebook;
