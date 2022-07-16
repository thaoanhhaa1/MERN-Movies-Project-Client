import { Routes, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import DefaultLayout from './layouts/DefaultLayout';
import routes from './routes';

function App() {
    return (
        <>
            <Routes>
                {routes.map((route) => {
                    const Component = route.element;
                    let Layout = DefaultLayout;

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
        </>
    );
}

export default App;
