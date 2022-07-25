import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BackModal from '~/components/BackModal';
import { LogoIcon } from '~/components/Icons';
import LoginGroupBtn from '~/components/LoginGroupBtn';
import RegisterWithEmail from '~/components/RegisterWithEmail';
import config from '~/config';

const RegisterPage = () => {
    const [registerMenu, setRegisterMenu] = useState(() => [
        <>
            <LoginGroupBtn className="mt-[14px]">
                <LoginGroupBtn.Email
                    onClick={() => {
                        setRegisterMenu((prev) => [
                            ...prev,
                            <RegisterWithEmail />,
                        ]);
                    }}
                />
                <LoginGroupBtn.Google />
            </LoginGroupBtn>
        </>,
    ]);

    useEffect(() => {
        document.title = 'Sign up for an account WMovies';
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-primary">
            <BackModal
                onBack={() => {
                    setRegisterMenu((prev) => prev.slice(0, prev.length - 1));
                }}
                isShowBack={registerMenu.length > 1}
            >
                <header>
                    <div className="text-center">
                        <Link className="inline-flex" to={config.routes.home}>
                            <LogoIcon className="flex w-11 h-11" />
                        </Link>
                    </div>
                    <h1 className="text-text mt-[21px] font-bold text-[28px] text-center leading-snug">
                        Sign up for an account WMovies
                    </h1>
                </header>

                <section className="pt-[37px]">
                    {registerMenu[registerMenu.length - 1]}
                </section>

                <footer className="mt-8 text-center">
                    <div className="text-sm leading-relaxed">
                        <span>Do you already have an account?</span>
                        &nbsp;
                        <Link
                            className="font-semibold text-primary"
                            to={config.routes.login}
                        >
                            Login
                        </Link>
                    </div>
                </footer>
            </BackModal>
        </div>
    );
};

export default RegisterPage;
