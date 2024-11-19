import * as React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import IndexPage from '../app/pages/IndexPage';

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <IndexPage />;
}
