import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BackModal from '~/components/BackModal';
import { LogoIcon } from '~/components/Icons';
import LoginGroupBtn from '~/components/LoginGroupBtn';
import LoginWithEmail from '~/components/LoginWithEmail';
import config from '~/config';
import { useSignInWithGoogle } from '~/hooks';

const LoginPage = () => {
    const handleSignInWithGoogle = useSignInWithGoogle();
    const [loginMenu, setLoginMenu] = useState(() => [
        <>
            <LoginGroupBtn className="mt-[14px]">
                <LoginGroupBtn.Email
                    onClick={() => {
                        setLoginMenu((prev) => [...prev, <LoginWithEmail />]);
                    }}
                />
                <LoginGroupBtn.Google onClick={handleSignInWithGoogle} />
            </LoginGroupBtn>
        </>,
    ]);

    useEffect(() => {
        document.title = 'Login to WMovies';
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-primary">
            <BackModal
                onBack={() => {
                    setLoginMenu((prev) => prev.slice(0, prev.length - 1));
                }}
                isShowBack={loginMenu.length > 1}
            >
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
            </BackModal>
        </div>
    );
};

export default LoginPage;
