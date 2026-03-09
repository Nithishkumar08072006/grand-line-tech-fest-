import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

interface Event {
  id: number;
  name: string;
  description: string;
  duration: string;
  image: string;
}

interface EventCarouselProps {
  events: Event[];
  title: string;
}

const EventCarousel = ({ events, title }: EventCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  };

  return (
    <div className="relative">
      <h3 className="font-display text-2xl md:text-3xl text-gradient-gold mb-6 text-center">
        {title}
      </h3>
      
      <div className="relative group">
        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-treasure-gold text-pirate-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-treasure-gold text-pirate-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
              >
                <div className="card-pirate h-full flex flex-col overflow-hidden">
                  <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pirate-dark/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-treasure-shine text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{event.duration}</span>
                    </div>
                  </div>
                  <h4 className="font-display text-xl text-treasure-gold mb-2">
                    {event.name}
                  </h4>
                  <p className="text-muted-foreground text-sm flex-1">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-treasure-gold w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
