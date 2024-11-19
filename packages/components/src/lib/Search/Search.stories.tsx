import type { Meta, StoryObj } from '@storybook/react';
import { fn, within, userEvent, expect } from '@storybook/test';

import Search from './Search';

const meta: Meta<typeof Search> = {
  component: Search,
  args: {
    movieSuggestions: [],
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {};

export const WithSearch: Story = {
  args: {
    movieSuggestions: [
      {
        moviePosterUrl: '',
        movieId: '1',
        movieName: 'movie 1',
        movieYear: '2024',
        movieRating: '5',
        movieSlug: 'movie1',
      },
    ],
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'movie 1');
  }
}

export const SelectTest: Story = {
  args: {
    onMovieClick: fn(),
    movieSuggestions: [
      {
        moviePosterUrl: '',
        movieId: '1',
        movieName: 'movie 1',
        movieYear: '2024',
        movieRating: '5',
        movieSlug: 'movie1',
      },
    ],
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    await step('Search for "movie 1"', async () => {
      await userEvent.type(canvas.getByRole('textbox'), 'movie 1');
    });

    await step('Select the "movie 1"', async () => {
      await userEvent.click(canvas.getAllByRole('option')[0]);
    });

    expect(args.onMovieClick).toHaveBeenCalledWith(args.movieSuggestions[0]);
  },
};
