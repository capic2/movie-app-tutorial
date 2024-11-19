import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/movies/$movieId/$movieName')({
  component: RouteComponent
});

function RouteComponent() {
  return 'Hello /movies/$movieId/$movieName!';
}
