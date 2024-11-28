import { createFileRoute } from '@tanstack/react-router'

interface MovieProps {
  movieId: number
  movieName: string
  movieState: any //todo
  getMovieDetails: (movieId: number) => void
  onMovieClick: (movieId: number, movieName: string) => void
  onPersonClick: (personId: number, personName: string) => void
}


export const Route = createFileRoute('/movies/$movieId/$movieName')({
  component: MovieComponent,
})

export function MovieComponent() {
  return <></>
}
