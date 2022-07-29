import {
    ExpressIcon,
    GithubIcon,
    HerokuIcon,
    MongoDBIcon,
    NodeIcon,
    ReactIcon,
    VercelIcon,
} from '~/components/Icons';
import Logo from '~/components/Logo';
import FooterCol from './FooterCol';

const frameworkMenu = [
    {
        title: 'MongoDB',
        icon: MongoDBIcon,
    },
    {
        title: 'ExpressJS',
        icon: ExpressIcon,
    },
    {
        title: 'ReactJS',
        icon: ReactIcon,
    },
    {
        title: 'NodeJS',
        icon: NodeIcon,
    },
];

const repositoriesMenu = [
    {
        title: 'Github',
        icon: GithubIcon,
    },
];

const deployMenu = [
    {
        title: 'Vercel (Frontend)',
        icon: VercelIcon,
    },
    {
        title: 'Heroku (Backend)',
        icon: HerokuIcon,
    },
];

const Footer = () => {
    return (
        <div className="bg-[#181821]">
            <div className="pt-[68px] pb-10 px-[15px] flex w-full max-w-[1008px] mx-auto">
                <div className="w-3/12">
                    <Logo textColor="white" />
                </div>
                <FooterCol className="w-3/12" menu={frameworkMenu}>
                    Framework
                </FooterCol>
                <FooterCol className="w-3/12" menu={repositoriesMenu}>
                    Repositories
                </FooterCol>
                <FooterCol className="w-3/12" menu={deployMenu}>
                    Deploy
                </FooterCol>
            </div>
        </div>
    );
};

export default Footer;
