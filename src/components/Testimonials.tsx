import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const testimonials = [
  {
    img: "/assinando.jpeg",
  },
  {
    img: "/assinando.jpeg",
  },
  {
    img: "/assinando.jpeg",
  },
  {
    img: "/assinando.jpeg",
  },
  {
    img: "/assinando.jpeg",
  },
  {
    img: "/assinando.jpeg",
  },
];

export function Testimonials() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-semibold mb-12">Depoimentos</h2>
        {/* <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-xl shadow-md">
              <p className="italic text-lg">"{item.content}"</p>
              <p className="mt-4 font-semibold text-[#FFD700]">{item.name}</p>
            </div>
          ))}
        </div> */}
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent className="flex gap-6">
            {testimonials.map((test, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center"
              >
                <div className="w-full max-w-sm p-2">
                  <Image 
                    src={test.img}
                    alt={`Depoimento ${index + 1}`}
                    width={500}
                    height={300}
                    className="object-cover rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Botões com offset lateral */}
          <CarouselPrevious className="left-2 sm:left-4 lg:left-6 -translate-y-1/2 top-1/2 absolute z-10" />
          <CarouselNext className="right-2 sm:right-4 lg:right-6 -translate-y-1/2 top-1/2 absolute z-10" />
        </Carousel>
      </div>
    </section>
  );
}
