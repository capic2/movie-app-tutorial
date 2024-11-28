import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import ky from 'ky';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { popularMoviesResponseSchema } from '../zod/schemas/movies';
import { popularPersonResponseSchema } from '../zod/schemas/person';
import { Hero, MovieCard } from '@movie-app/components';
import { getImageUrl, ImageType } from '../utils/images';

const popularPersonQueryOptions = () =>
  queryOptions({
    queryKey: ['allPopularPersonQuery'],
    queryFn: () =>
      ky
        .get(
          'https://api.themoviedb.org/3/person/popular?language=en-US&page=1',
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzNhZDY0YWI2Zjc3MjZmZmIzZDMxMTRlNDk4YzNjOCIsIm5iZiI6MTczMDYyMDM0Ny43NjAxOTM2LCJzdWIiOiI2NzI3Mjc2ZjU3NzIyYjU1NzE3YWEyMzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zS8S6907qioR1k9fi3Uv7-F3ZvHxrM8WB2JRrxPTx6Y',
              accept: 'application/json',
            },
          }
        )
        .json(),
    select: (data) => popularPersonResponseSchema.parse(data),
  });

const popularMovieQueryOptions = () =>
  queryOptions({
    queryKey: ['allPopularMovieQuery'],
    queryFn: () =>
      ky
        .get(
          'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzNhZDY0YWI2Zjc3MjZmZmIzZDMxMTRlNDk4YzNjOCIsIm5iZiI6MTczMDYyMDM0Ny43NjAxOTM2LCJzdWIiOiI2NzI3Mjc2ZjU3NzIyYjU1NzE3YWEyMzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zS8S6907qioR1k9fi3Uv7-F3ZvHxrM8WB2JRrxPTx6Y',
              accept: 'application/json',
            },
          }
        )
        .json(),
    select: (data) => popularMoviesResponseSchema.parse(data),
  });

export const Route = createFileRoute('/')({
  component: IndexPage,
  loader: async ({ context: { queryClient } }) => {
    const popularPersonPromise = queryClient.ensureQueryData(
      popularPersonQueryOptions()
    );
    const popularMoviePromise = queryClient.ensureQueryData(
      popularMovieQueryOptions()
    );

    await Promise.all([popularPersonPromise, popularMoviePromise]);
  },
});

export function IndexPage() {
  const { data: popularPersons } = useSuspenseQuery(
    popularPersonQueryOptions()
  );
  const { data: popularMovies } = useSuspenseQuery(popularMovieQueryOptions());

  return (
    <section className="m-4 p-4">
      <section className="mt-8 mb-8 ml-0 mr-0">
        <Hero
          backgroundImage={getImageUrl(
            ImageType.W780,
            popularMovies.results[0].poster_path
          )}
          movieDescription={popularMovies.results[0].overview}
          movieRating={popularMovies.results[0].vote_average}
          movieName={popularMovies.results[0].title}
          onTitleClick={() => {
            /* go to movie details */
          }}
        />
      </section>
      <section className="mt-8 mb-8 ml-0 mr-0">
        <h2>Popular movies</h2>
        <div className="grid grid-cols-6 auto-rows-auto gap-4">
          {popularMovies.results.map((movie) => (
            <MovieCard
              key={movie.id}
              imageUrl={getImageUrl(ImageType.W300, movie.poster_path)}
              imageAlt={`${movie.title} Poster`}
              cardTitle={movie.title}
              cardText={`${movie.vote_average} / 10`}
              cardAction={() => {
                /* go to movie details */
              }}
            />
          ))}
        </div>
      </section>
      <section className="mt-8 mb-8 ml-0 mr-0">
        <h2>Popular people</h2>
        <div className="grid grid-cols-6 auto-rows-auto gap-4">
          {popularPersons.results.map((people) => (
            <MovieCard
              key={people.id}
              imageUrl={
                people.profile_path
                  ? getImageUrl(ImageType.W300, people.profile_path)
                  : null
              }
              imageAlt={`${people.name} Poster`}
              cardTitle={people.name}
              cardText=""
              cardAction={() => {
                /* go to person details */
              }}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
