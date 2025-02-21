import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { QueryClient } from '@tanstack/react-query';
import { ErrorBoundary } from '@movie-app/components';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    errorComponent: ErrorBoundary,
    pendingComponent: () => <div>loading...</div>,
    component: () => (
      <>
        <div className="p-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
        </div>
        <hr />

        <Outlet />
        <TanStackRouterDevtools />
      </>
    ),
  }
);
