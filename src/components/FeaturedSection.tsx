import latteArt from "@/assets/latte-art.jpg";
import pastries from "@/assets/pastries.jpg";
import espresso from "@/assets/espresso.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const featured = [
  {
    image: espresso,
    title: "Single Origin Espresso",
    description: "Bold, rich, and sourced from the finest estates.",
  },
  {
    image: latteArt,
    title: "Signature Latte",
    description: "Velvety smooth with hand-poured latte art.",
  },
  {
    image: pastries,
    title: "Fresh Pastries",
    description: "Baked in-house every morning, golden and flaky.",
  },
];

const FeaturedSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.25em] uppercase text-muted-foreground font-body">
            Our Favorites
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mt-3">
            Crafted with Love
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((item, i) => (
            <div
              key={item.title}
              className={`group hover-lift rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
