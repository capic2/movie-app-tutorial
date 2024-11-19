/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MoviesMovieIdMovieNameImport } from './routes/movies.$movieId.$movieName'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const MoviesMovieIdMovieNameRoute = MoviesMovieIdMovieNameImport.update({
  id: '/movies/$movieId/$movieName',
  path: '/movies/$movieId/$movieName',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/movies/$movieId/$movieName': {
      id: '/movies/$movieId/$movieName'
      path: '/movies/$movieId/$movieName'
      fullPath: '/movies/$movieId/$movieName'
      preLoaderRoute: typeof MoviesMovieIdMovieNameImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/movies/$movieId/$movieName': typeof MoviesMovieIdMovieNameRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/movies/$movieId/$movieName': typeof MoviesMovieIdMovieNameRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/movies/$movieId/$movieName': typeof MoviesMovieIdMovieNameRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/movies/$movieId/$movieName'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/movies/$movieId/$movieName'
  id: '__root__' | '/' | '/movies/$movieId/$movieName'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  MoviesMovieIdMovieNameRoute: typeof MoviesMovieIdMovieNameRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  MoviesMovieIdMovieNameRoute: MoviesMovieIdMovieNameRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/movies/$movieId/$movieName"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/movies/$movieId/$movieName": {
      "filePath": "movies.$movieId.$movieName.tsx"
    }
  }
}
ROUTE_MANIFEST_END */