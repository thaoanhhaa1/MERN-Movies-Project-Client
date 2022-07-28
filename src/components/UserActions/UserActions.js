import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import Avatar from '~/components/Avatar';
import useAuth from '~/context/Auth';
import UserActionsPopup from './UserActionsPopup';

const UserActions = () => {
    const [show, setShow] = useState(false);
    const { user } = useAuth();

    return (
        <Tippy
            visible={show}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <UserActionsPopup onClick={() => setShow(false)} {...attrs} />
            )}
            onClickOutside={() => setShow(false)}
        >
            <Avatar
                className="w-avatar h-avatar cursor-pointer"
                alt="Avatar"
                src={
                    user?.avatar?.url ??
                    user?.photoURL ??
                    'https://graph.facebook.com/2563055210655657/picture?width=400&height=400'
                }
                onClick={() => setShow(!show)}
            ></Avatar>
        </Tippy>
    );
};

export default UserActions;
