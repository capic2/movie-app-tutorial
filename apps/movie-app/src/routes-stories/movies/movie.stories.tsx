import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { MovieComponent } from '../../routes/movies/$movieId';

const meta: Meta<typeof MovieComponent> = {
  title: 'Pages/Movie',
  component: MovieComponent,
  parameters: {
    router: {
      initialEntries: ['/movies/1'],
      routes: ['/movies/$movieId'],
    },
    msw: {
      handlers: {
        movie: http.get('https://api.themoviedb.org/3/movie/1', () => {
          return HttpResponse.json({
            adult: false,
            backdrop_path: '/hQ4pYsIbP22TMXOUdSfC2mjWrO0.jpg',
            belongs_to_collection: {
              id: 1382526,
              name: "Kaurismäki's Proletariat Trilogy",
              poster_path: null,
              backdrop_path: null,
            },
            budget: 0,
            genres: [
              {
                id: 35,
                name: 'Comedy',
              },
              {
                id: 18,
                name: 'Drama',
              },
              {
                id: 10749,
                name: 'Romance',
              },
              {
                id: 80,
                name: 'Crime',
              },
            ],
            homepage: '',
            id: 2,
            imdb_id: 'tt0094675',
            origin_country: ['FI'],
            original_language: 'fi',
            original_title: 'Ariel',
            overview:
              'After the coal mine he works at closes and his father commits suicide, a Finnish man leaves for the city to make a living but there, he is framed and imprisoned for various crimes.',
            popularity: 11.403,
            poster_path: '/ojDg0PGvs6R9xYFodRct2kdI6wC.jpg',
            production_companies: [
              {
                id: 2303,
                logo_path: null,
                name: 'Villealfa Filmproductions',
                origin_country: 'FI',
              },
            ],
            production_countries: [
              {
                iso_3166_1: 'FI',
                name: 'Finland',
              },
            ],
            release_date: '1988-10-21',
            revenue: 0,
            runtime: 73,
            spoken_languages: [
              {
                english_name: 'Finnish',
                iso_639_1: 'fi',
                name: 'suomi',
              },
            ],
            status: 'Released',
            tagline: '',
            title: 'Ariel',
            video: false,
            vote_average: 7.1,
            vote_count: 336,
          });
        }),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MovieComponent>;

export const Default: Story = {};
