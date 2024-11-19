import Downshift from 'downshift';
import ResultRow from './ResultRow/ResultRow';

export interface MovieSuggestion {
  moviePosterUrl: string;
  movieId: string;
  movieName: string;
  movieYear: string;
  movieRating: string;
  movieSlug: string;
}

interface SearchProps {
  idSelector: string;
  placeholder: string;
  movieSuggestions: MovieSuggestion[];
  search: (searchPhrase: string) => Promise<MovieSuggestion[]>;
  onMovieClick: (movieSuggestion: MovieSuggestion) => void;
}

const Search = ({ movieSuggestions, onMovieClick }: SearchProps) => {
  return (
    <Downshift
      onChange={(selection) => {
        onMovieClick(selection);
      }}
      itemToString={(item) => (item ? item.movieName : '')}
    >
      {({ getInputProps, getItemProps, isOpen, inputValue, getRootProps }) => (
        <div className="w-11/12">
          <div
            style={{ display: 'inline-block' }}
            {...getRootProps({}, { suppressRefError: true })}
          >
            <input {...getInputProps()} />
          </div>
          {isOpen && (
            <ul>
              {movieSuggestions
                .filter((movieSuggestion) =>
                  movieSuggestion.movieName
                    .toLowerCase()
                    .includes(inputValue?.toLowerCase() ?? '')
                )
                .map((result) => (
                  <li {...getItemProps({ item: result })} key={result.movieId}>
                    <ResultRow result={result} />
                  </li>
                ))}
            </ul>
          )}
        </div>
      )}
    </Downshift>
  );
};

export default Search;
