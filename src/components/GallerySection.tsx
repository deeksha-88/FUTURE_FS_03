import latteArt from "@/assets/latte-art.jpg";
import pastries from "@/assets/pastries.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import espresso from "@/assets/espresso.jpg";
import sandwich from "@/assets/sandwich.jpg";
import cakeCoffee from "@/assets/cake-coffee.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import heroCafe from "@/assets/hero-cafe.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const images = [
  { src: latteArt, alt: "Latte art", span: "col-span-1 row-span-1" },
  { src: heroCafe, alt: "Café atmosphere", span: "col-span-2 row-span-1" },
  { src: pastries, alt: "Fresh pastries", span: "col-span-1 row-span-2" },
  { src: espresso, alt: "Espresso pour", span: "col-span-1 row-span-1" },
  { src: cakeCoffee, alt: "Cake and coffee", span: "col-span-1 row-span-1" },
  { src: sandwich, alt: "Artisan sandwich", span: "col-span-1 row-span-1" },
  { src: coffeeBeans, alt: "Coffee beans", span: "col-span-1 row-span-1" },
  { src: cafeInterior, alt: "Reading nook", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.25em] uppercase text-muted-foreground font-body">
            Moments
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mt-3">
            Life at Bean & Bliss
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <div
              key={img.alt}
              className={`${img.span} rounded-xl overflow-hidden group transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
