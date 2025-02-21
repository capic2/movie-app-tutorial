import {
  Carousel,
  CarouselButton,
  CarouselItem,
  CarouselScroller,
  CarouselTab,
  CarouselTabs,
} from 'react-aria-carousel';
import ReactPlayer from 'react-player';

interface MovieCarouselProps {
  isVideo: boolean;
  urls: string[];
}

const MovieCarousel = ({ isVideo, urls }: MovieCarouselProps) => {
  return (
    <Carousel className="grid grid-rows-[min-content 1fr] [grid-template-areas:'tabs buttons''scroller scroller'] gap-4">
      {/*<CarouselAutoplayControl />*/}
      <CarouselButton dir="prev">{'<'}</CarouselButton>
      <CarouselButton dir="next">{'>'}</CarouselButton>
      <CarouselScroller className="[grid-area: scroller] grid overflow-auto [scroll-snap-type: x mandatory] [grid-auto-flow: column] [scrollbar-width: none] [aspect-ratio: 3 / 2]">
        {urls.map((url) => (
          <CarouselItem key={url} className="[aspect-ratio: 3 / 2]">
            {isVideo ? (
              <ReactPlayer url={url} />
            ) : (
              <img
                className="d-block w-100 m-0"
                loading="lazy"
                src={url}
                alt={url}
              />
            )}
          </CarouselItem>
        ))}
      </CarouselScroller>
      <CarouselTabs>
        {(page) => <CarouselTab index={page.index} />}
      </CarouselTabs>
    </Carousel>
  );
};

export default MovieCarousel;
