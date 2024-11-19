import type { Meta, StoryObj } from '@storybook/react';

import MovieCard from './MovieCard';

const meta: Meta<typeof MovieCard> = {
  component: MovieCard,
};

export default meta;
type Story = StoryObj<typeof MovieCard>;

export const Primary: Story = {};
