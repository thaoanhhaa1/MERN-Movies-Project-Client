import { Link } from 'react-router-dom';
import slugify from 'slugify';

const SlugLink = ({ children, className }) => {
    const slug = slugify(children, {
        locale: 'vi',
        lower: true,
        strict: true,
    });

    return (
        <Link className={className} to={slug}>
            {children}
        </Link>
    );
};

export default SlugLink;
