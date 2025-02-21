import { createFileRoute } from '@tanstack/react-router';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import ky from 'ky';
import { movieSchema } from '../../zod/schemas/movies';
import { parseZodResult } from '@movie-app/http-client';
import { FormattedDate } from 'react-intl';
import { getImageUrl, ImageType } from '../../utils/images';

const movieQueryOptions = (movieId: string) =>
  queryOptions({
    queryKey: ['movie', movieId],
    queryFn: () =>
      parseZodResult({
        kyMethod: () =>
          ky.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzNhZDY0YWI2Zjc3MjZmZmIzZDMxMTRlNDk4YzNjOCIsIm5iZiI6MTczMDYyMDM0Ny43NjAxOTM2LCJzdWIiOiI2NzI3Mjc2ZjU3NzIyYjU1NzE3YWEyMzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zS8S6907qioR1k9fi3Uv7-F3ZvHxrM8WB2JRrxPTx6Y',
              accept: 'application/json',
            },
          }),
        schema: movieSchema,
      }),
  });

export const Route = createFileRoute('/movies/$movieId')({
  component: MovieComponent,
  loader: async ({ context: { queryClient }, params: { movieId } }) =>
    await queryClient.ensureQueryData(movieQueryOptions(movieId)),
});

export function MovieComponent() {
  const { movieId } = Route.useParams();
  const { data: movie } = useSuspenseQuery(movieQueryOptions(movieId));

  return (
    <article className="mt-8 mb-8 ml-4 mr-4">
      <section className="flex">
        <div className="flex-auto">
          <h2 className="text-2xl font-semibold">{movie.title}</h2>
        </div>
        <p>
          <span className="text-xs font-light text-gray-400">
            <FormattedDate value={movie.release_date} year="numeric" /> |{' '}
            {movie.runtime} |{' '}
            {movie.genres.reduce(
              (acc, curr) =>
                acc !== '' ? `${acc}, ${curr.name}` : `${curr.name}`,
              ''
            )}
          </span>
        </p>
        <div className="flex flex-1 p-4">
          <p className="text-3xl font-semibold m-0">
            {movie.vote_average}{' '}
            <span className="text-xs font-light text-gray-400">/ 10</span>
          </p>
          <p>
            <span className="text-xs font-light text-gray-400">
              {movie.vote_count}
            </span>
          </p>
        </div>
      </section>
      <section className="flex flex-wrap gap-[10px]">
        <div className="flex-1">
          <img src={getImageUrl(ImageType.W300, movie.poster_path)} alt={`${movie.title} poster path`} loading="lazy" />
        </div>
        {/* todo display video*/}
      </section>
      <section className="m-4">
        <h3 className="text-base font-semibold m-4">Storyline</h3>
        <p className="text-xs">
          {movie.overview}
        </p>
      </section>
      <div className="flex flex-wrap">
        <section className="flex-1">
          <h3 className="text-base font-semibold m-4">
            Images
          </h3>
          <div className="p-8 mt-4 mp-4 ml-auto mr-auto w-[400px] h-[600px]">

          </div>
        </section>
      </div>
    </article>
  );
}
