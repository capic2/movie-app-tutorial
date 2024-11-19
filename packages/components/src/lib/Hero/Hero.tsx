interface HeroProps {
  backgroundImage: string;
  movieName: string;
  movieRating: number;
  movieDescription: string;
  onTitleClick: () => void;
}

const Hero = ({
  backgroundImage,
  movieName,
  movieRating,
  movieDescription,
  onTitleClick,
}: HeroProps) => {
  return (
    <section style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-cover">
      <div className="py-8 px-4  max-w-screen-xl lg:py-16">
        <div className="mt-0 mb-0 ml-4 mr-4 inline-block opacity-80">
          <h3 className=" text-xl font-semibold hover:underline hover:cursor-pointer" onClick={onTitleClick}>{movieName}</h3>
          <p className="text-xs">{movieRating}</p>
          <p className="text-sm">{movieDescription}</p>
        </div>
      </div>
    </section>
);
};

export default Hero;
