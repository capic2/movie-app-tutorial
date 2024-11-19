import type { Meta, StoryObj } from '@storybook/react';
import ResultRow from './ResultRow';

const meta: Meta<typeof ResultRow> = {
  component: ResultRow,
  args: {
    result: {
      moviePosterUrl: '',
      movieId: '1',
      movieName: 'movie 1',
      movieYear: '2024',
      movieRating: '5',
      movieSlug: 'movie1',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ResultRow>;

export const Default: Story = {};
