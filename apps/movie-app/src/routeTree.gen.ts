/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as IndexStoriesImport } from './routes/index.stories'
import { Route as MoviesMovieStoriesImport } from './routes/movies/Movie.stories'
import { Route as MoviesMovieIdMovieNameImport } from './routes/movies/$movieId.$movieName'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const IndexStoriesRoute = IndexStoriesImport.update({
  id: '/index/stories',
  path: '/index/stories',
  getParentRoute: () => rootRoute,
} as any)

const MoviesMovieStoriesRoute = MoviesMovieStoriesImport.update({
  id: '/movies/Movie/stories',
  path: '/movies/Movie/stories',
  getParentRoute: () => rootRoute,
} as any)

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
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/index/stories': {
      id: '/index/stories'
      path: '/index/stories'
      fullPath: '/index/stories'
      preLoaderRoute: typeof IndexStoriesImport
      parentRoute: typeof rootRoute
    }
    '/movies/$movieId/$movieName': {
      id: '/movies/$movieId/$movieName'
      path: '/movies/$movieId/$movieName'
      fullPath: '/movies/$movieId/$movieName'
      preLoaderRoute: typeof MoviesMovieIdMovieNameImport
      parentRoute: typeof rootRoute
    }
    '/movies/Movie/stories': {
      id: '/movies/Movie/stories'
      path: '/movies/Movie/stories'
      fullPath: '/movies/Movie/stories'
      preLoaderRoute: typeof MoviesMovieStoriesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/index/stories': typeof IndexStoriesRoute
  '/movies/$movieId/$movieName': typeof MoviesMovieIdMovieNameRoute
  '/movies/Movie/stories': typeof MoviesMovieStoriesRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/index/stories': typeof IndexStoriesRoute
  '/movies/$movieId/$movieName': typeof MoviesMovieIdMovieNameRoute
  '/movies/Movie/stories': typeof MoviesMovieStoriesRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/index/stories': typeof IndexStoriesRoute
  '/movies/$movieId/$movieName': typeof MoviesMovieIdMovieNameRoute
  '/movies/Movie/stories': typeof MoviesMovieStoriesRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/index/stories'
    | '/movies/$movieId/$movieName'
    | '/movies/Movie/stories'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/index/stories'
    | '/movies/$movieId/$movieName'
    | '/movies/Movie/stories'
  id:
    | '__root__'
    | '/'
    | '/index/stories'
    | '/movies/$movieId/$movieName'
    | '/movies/Movie/stories'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  IndexStoriesRoute: typeof IndexStoriesRoute
  MoviesMovieIdMovieNameRoute: typeof MoviesMovieIdMovieNameRoute
  MoviesMovieStoriesRoute: typeof MoviesMovieStoriesRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  IndexStoriesRoute: IndexStoriesRoute,
  MoviesMovieIdMovieNameRoute: MoviesMovieIdMovieNameRoute,
  MoviesMovieStoriesRoute: MoviesMovieStoriesRoute,
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
        "/index/stories",
        "/movies/$movieId/$movieName",
        "/movies/Movie/stories"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/index/stories": {
      "filePath": "index.stories.tsx"
    },
    "/movies/$movieId/$movieName": {
      "filePath": "movies/$movieId.$movieName.tsx"
    },
    "/movies/Movie/stories": {
      "filePath": "movies/Movie.stories.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
