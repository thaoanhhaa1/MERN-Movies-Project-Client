import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import slugify from 'slugify';
import { v4 } from 'uuid';
import Avatar from '~/components/Avatar';
import Popup from '~/components/Popup';
import config from '~/config';
import useAuth from '~/context/Auth';
import { auth } from '~/firebase/firebaseConfig';

const UserActionsPopup = (props) => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const menuProfile = [
        {
            to: config.routes.personalInformation,
            title: 'Personal information',
        },
        {
            title: 'Logout',
            onClick: async () => {
                signOut(auth);
                navigate(config.routes.login);
            },
        },
    ];

    return (
        <Popup {...props}>
            <div className="py-2 px-6">
                <header className="flex gap-3 items-center">
                    <Avatar
                        className="w-[50px] h-[50px] my-[10px]"
                        alt="Avatar"
                        src={
                            user?.photoURL ??
                            'https://graph.facebook.com/2563055210655657/picture?width=400&height=400'
                        }
                    ></Avatar>
                    <div>
                        <h4 className="font-semibold text-base text-[#292929] leading-sm">
                            {user.name}
                        </h4>
                        <p className="mt-1 text-sm text-[#757575] leading-sm">
                            @
                            {slugify(user.username ?? user.displayName ?? '', {
                                locale: 'vi',
                                lower: true,
                                strict: true,
                            })}
                        </p>
                    </div>
                </header>

                <hr className="my-2 border-[rgba(0,0,0,.05)]" />

                <ul>
                    {menuProfile.map(({ title, ...props }) => {
                        let Component = 'span';

                        if (props.to) Component = Link;

                        return (
                            <li key={v4()}>
                                <Component
                                    {...props}
                                    className="cursor-pointer block py-[10px] text-sm leading-sm text-[#666]"
                                >
                                    {title}
                                </Component>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Popup>
    );
};

export default UserActionsPopup;
