import type { Meta, StoryObj } from '@storybook/react';

import Hero from './Hero';

const meta: Meta<typeof Hero> = {
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Primary: Story = {
  args: {
    movieName: "Movie",
    movieRating: 5,
    movieDescription: "Description",
    onTitleClick: () => {}
  }
};
