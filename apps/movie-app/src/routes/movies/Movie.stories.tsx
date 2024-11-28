import type { Meta, StoryObj } from '@storybook/react';
import { MovieComponent } from './$movieId.$movieName';

const meta: Meta<typeof MovieComponent> = {
  title: 'Pages/Movie',
  component: MovieComponent,
  parameters: {
    msw: {
      handlers: [],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MovieComponent>;

export const Primary: Story = {};
