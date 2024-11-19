import type { Meta, StoryObj } from '@storybook/react';
import ErrorBoundary from './ErrorBoundary';
import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
  createRootRoute,
} from '@tanstack/react-router';

const meta: Meta<typeof ErrorBoundary> = {
  component: ErrorBoundary,
  decorators: [
    (Story) => (
      <RouterProvider
        router={createRouter({
          history: createMemoryHistory(),
          routeTree: createRootRoute({
            component: Story,
          }),
        })}
      />
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ErrorBoundary>;

export const Primary: Story = {
  args: {
    error: new Error('An big error'),
  },
};
