import type { Meta, StoryObj } from '@storybook/react';

import MovieCarousel from './MovieCarousel';

const meta: Meta<typeof MovieCarousel> = {
  component: MovieCarousel,
  args: {
    isVideo: true,
    urls: ['https://www.youtube.com/watch?v=S5wCft-ImKk', 'https://www.youtube.com/watch?v=kvGszYAYQ6M']
  }
};

export default meta;
type Story = StoryObj<typeof MovieCarousel>;

export const Primary: Story = {};
