import { MovieSuggestion } from '../Search';

interface ResultRowProps {
  result: MovieSuggestion;
}

const ResultRow = ({ result }: ResultRowProps) => {
  return (
    <div className="flex">
      <img
        className="w-12 h-[72px] self-start mr-3"
        src={result.moviePosterUrl}
        alt={result.movieName}
        loading="lazy"
      />
      <div>
        <h5>{result.movieName}</h5>
        <p>{result.movieYear}</p>
        <p>{result.movieRating}</p>
      </div>
    </div>
  );
};

export default ResultRow;
