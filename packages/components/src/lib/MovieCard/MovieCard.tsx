interface MovieCardProps {
  imageUrl: string | null;
  imageAlt: string;
  cardTitle: string;
  cardText: string;
  cardAction: () => void;
}

const MovieCard = ({
  imageUrl,
  cardAction,
  cardTitle,
  cardText,
  imageAlt,
}: MovieCardProps) => {
  return (
    <div
      className="h-[450px] max-w-[150px] shadow rounded-lg text-black text-center"
      onClick={cardAction}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-[250px] w-[350px] object-cover rounded-tl-lg rounded-tr-lg"
        />
      ) : null}
      <div className="p-4 h-24 text-ellipsis">
        <h2>{cardTitle}</h2>
        <p>{cardText}</p>
      </div>
    </div>
  );
};

export default MovieCard;
