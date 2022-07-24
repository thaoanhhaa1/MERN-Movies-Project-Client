import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviesGrid from '~/components/MoviesGrid';
import * as httpRequest from '~/utils/httpRequest';

const CastDetailsPage = () => {
    const { castSlug, castId } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await httpRequest.get(`/cast/${castId}/movies`);

            setMovies(result?.cast?.filter((movie) => !!movie.backdrop_path));
        }

        getData();
    }, [castId]);

    return (
        <div>
            <header className="py-[113px] bg-slate-50 font-medium text-5xl leading-none text-center">
                {castSlug}
            </header>
            <MoviesGrid title="Participating movies">
                {movies?.map((movie) => (
                    <MoviesGrid.Item data={movie} key={movie.id} />
                ))}
            </MoviesGrid>
        </div>
    );
};

export default CastDetailsPage;
