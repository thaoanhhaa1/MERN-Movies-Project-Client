import { Link } from 'react-router-dom';
import slugify from 'slugify';

const SlugLink = ({ children, className }) => {
    const slug = slugify(children, {
        locale: 'vi',
        lower: true,
        strict: true,
    });

    return (
        <Link
            className={
                className +
                "transition-all duration-200 hover:text-primary not-last-child:after:content-[',_']"
            }
            to={`/${slug}`}
        >
            {children}
        </Link>
    );
};

export default SlugLink;
