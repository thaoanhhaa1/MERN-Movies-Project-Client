import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { v4 } from 'uuid';
import { AuthProvider } from '~/context/Auth';
import DefaultLayout from './layouts/DefaultLayout';
import routes from './routes';

function App() {
    return (
        <AuthProvider>
            <ToastContainer />
            <Routes>
                {routes.map((route) => {
                    const Component = route.element;
                    let Layout = DefaultLayout;

                    if (route.layout === null) Layout = Fragment;
                    else if (route.layout) Layout = route.layout;

                    return (
                        <Route
                            key={v4()}
                            path={route.path}
                            element={
                                <Layout>
                                    <Component />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </AuthProvider>
    );
}

export default App;
