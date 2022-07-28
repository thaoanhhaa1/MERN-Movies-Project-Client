import { forwardRef, useCallback, useEffect, useState } from 'react';
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
    const [avatar, setAvatar] = useState(src);

    useEffect(() => setAvatar(src), [src]);

    const handleError = useCallback(
        () =>
            setAvatar(
                'https://graph.facebook.com/2563055210655657/picture?width=400&height=400',
            ),
        [],
    );

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
            <Image onError={handleError} src={avatar} alt={alt} />
        </Component>
    );
};

export default forwardRef(Avatar);
