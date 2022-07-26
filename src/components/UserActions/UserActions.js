import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import Avatar from '~/components/Avatar';
import Popup from './UserActionsPopup';

const UserActions = () => {
    const [show, setShow] = useState(false);

    return (
        <Tippy
            visible={show}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <Popup onClick={() => setShow(false)} {...attrs} />
            )}
            onClickOutside={() => setShow(false)}
        >
            <Avatar
                className="w-avatar h-avatar"
                alt="Avatar"
                src="https://graph.facebook.com/2563055210655657/picture?width=400&height=400"
                onClick={() => setShow(!show)}
            ></Avatar>
        </Tippy>
    );
};

export default UserActions;
