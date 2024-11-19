import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundary as ErrorBoundaryFallback, Loader } from '@movie-app/components';
import { Suspense } from 'react';

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={new QueryClient()}>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <div className="p-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
        </div>
        <hr />

        <Suspense fallback={<Loader loaderDescription="Please wait..." /> } >
          <Outlet />
        </Suspense>
        <TanStackRouterDevtools />
      </ErrorBoundary>
    </QueryClientProvider>
  ),
});
