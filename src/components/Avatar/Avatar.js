import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';

/**
 * Component Avatar
 * @param {*} param0
 * @param {*} ref
 * @returns
 */
const Avatar = (
    { src, alt, to, href, className = '', onClick = () => {} },
    ref,
) => {
    let Component = 'span';
    const props = {};

    if (to) {
        Component = Link;
        props.to = to;
    } else if (href) {
        Component = 'a';
        props.href = href;
    }

    return (
        <Component
            ref={ref}
            {...props}
            onClick={onClick}
            className={`${className} block rounded-full overflow-hidden`}
        >
            <Image src={src ?? '/no-avatar.png'} alt={alt} />
        </Component>
    );
};

export default forwardRef(Avatar);
