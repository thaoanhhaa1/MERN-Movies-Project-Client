import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, LogoIcon } from '~/components/Icons';
import LoginGroupBtn from '~/components/LoginGroupBtn';
import LoginWithEmail from '~/components/LoginWithEmail';
import config from '~/config';

const LoginPage = () => {
    const [loginMenu, setLoginMenu] = useState(() => [
        <>
            <LoginGroupBtn className="mt-[14px]">
                <LoginGroupBtn.Email
                    onClick={() => {
                        setLoginMenu((prev) => [...prev, <LoginWithEmail />]);
                    }}
                />
                <LoginGroupBtn.Google />
            </LoginGroupBtn>
        </>,
    ]);

    useEffect(() => {
        document.title = 'Login to WMovies';
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-primary">
            <div className="relative py-12 w-[640px] min-h-[600px] bg-white rounded-lg">
                {loginMenu.length > 1 && (
                    <span
                        onClick={() => {
                            setLoginMenu((prev) =>
                                prev.slice(0, prev.length - 1),
                            );
                        }}
                        className="cursor-pointer absolute top-0 left-0 flex items-center justify-center w-[70px] h-[70px]"
                    >
                        <ChevronLeftIcon width="20px" height="20px" />
                    </span>
                )}

                <header>
                    <div className="text-center">
                        <Link className="inline-flex" to={config.routes.home}>
                            <LogoIcon className="flex w-11 h-11" />
                        </Link>
                    </div>
                    <h1 className="text-text mt-[21px] font-bold text-[28px] text-center leading-snug">
                        Login to WMovies
                    </h1>
                </header>

                <section className="pt-[37px]">
                    {loginMenu[loginMenu.length - 1]}
                </section>

                <footer className="mt-8 text-center">
                    <div className="text-sm leading-relaxed">
                        <span>Do not have an account?</span>
                        &nbsp;
                        <Link
                            className="font-semibold text-primary"
                            to={config.routes.register}
                        >
                            Register
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default LoginPage;
