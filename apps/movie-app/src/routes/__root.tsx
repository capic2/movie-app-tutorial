import {
  createRootRouteWithContext,
  ErrorComponent,
  Link,
  Outlet,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { QueryClient } from '@tanstack/react-query';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    errorComponent: ErrorComponent,
    pendingComponent: () => <div>loading...</div>,
    component: () => (
      <>
        <div className="p-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
        </div>
        <hr />

        <Outlet />
        <TanStackRouterDevtools />
      </>
    ),
  }
);
