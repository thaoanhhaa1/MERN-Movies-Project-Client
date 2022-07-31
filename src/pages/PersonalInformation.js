import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';
import Avatar from '~/components/Avatar';
import Button from '~/components/Button';
import {
    CalendarIcon,
    EmailIcon,
    LockIcon,
    PencilIcon,
    UserSolidIcon,
    UsersSolidIcon,
} from '~/components/Icons';
import PersonalInformationItem from '~/components/PersonalInformationItem';
import config from '~/config';
import useAuth from '~/context/Auth';
import { useBackToTop } from '~/hooks';
import PageNotFound from './PageNotFound';

const personalInformation = [
    {
        title: 'Full name',
        icon: UserSolidIcon,
        attribute: 'name',
    },
    {
        title: 'E-mail',
        icon: EmailIcon,
        attribute: 'email',
    },
    {
        title: 'Birthday',
        icon: CalendarIcon,
        attribute: 'birthday',
    },
    {
        title: 'Gender',
        icon: UsersSolidIcon,
        attribute: 'gender',
    },
    {
        title: 'Password',
        icon: LockIcon,
        attribute: 'password',
    },
];

const PersonalInformation = () => {
    const { user, loading } = useAuth();

    useBackToTop();

    if (!loading && !user) return <PageNotFound />;

    return (
        <div className="relative p-[10px] pt-[35px]">
            {(loading && (
                <>
                    <Skeleton
                        containerClassName="!absolute right-0 block w-[186px]"
                        className="h-11 !rounded-lg"
                    />
                    <div>
                        <Skeleton
                            containerClassName="w-[100px] block mx-auto"
                            className="h-[100px] !rounded-full"
                        />
                        <Skeleton
                            containerClassName="flex mt-4 w-[220px] mx-auto"
                            className="text-[26px] !leading-[1.2]"
                        />
                    </div>
                    <div className="mt-[25px] grid grid-cols-2 gap-x-10 gap-y-5">
                        {new Array(5).fill(5).map(() => (
                            <Skeleton className="h-[78px] !rounded-[10px]" />
                        ))}
                    </div>
                </>
            )) || (
                <>
                    <Button
                        to={config.routes.personalInformationEdit}
                        primary
                        large
                        className="!absolute right-0"
                    >
                        <PencilIcon className="w-5 h-5"></PencilIcon>
                        Edit information
                    </Button>
                    <div>
                        <Avatar
                            className="w-[100px] h-[100px] mx-auto"
                            src={user?.avatar?.url ?? user?.photoURL}
                            alt=""
                        ></Avatar>
                        <h1 className="mt-4 font-bold text-[26px] text-center leading-[1.2]">
                            {user?.name}
                        </h1>
                    </div>
                    <div className="mt-[25px] grid grid-cols-2 gap-x-10 gap-y-5">
                        {personalInformation.map((item) => (
                            <PersonalInformationItem
                                key={v4()}
                                icon={item.icon}
                            >
                                <PersonalInformationItem.Title>
                                    {item.title}
                                </PersonalInformationItem.Title>
                                <PersonalInformationItem.Description>
                                    {(item.attribute === 'gender' &&
                                        (user?.[item.attribute]
                                            ? 'Male'
                                            : 'Female')) ||
                                        user?.[item.attribute]}
                                </PersonalInformationItem.Description>
                            </PersonalInformationItem>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default PersonalInformation;
