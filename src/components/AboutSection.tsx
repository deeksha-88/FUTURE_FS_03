import cafeInterior from "@/assets/cafe-interior.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-warm-lg)]">
              <img
                src={cafeInterior}
                alt="Our cozy café interior"
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-80 lg:h-[28rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-xl overflow-hidden border-4 border-background shadow-[var(--shadow-warm-lg)] hidden md:block">
              <img
                src={coffeeBeans}
                alt="Fresh coffee beans"
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <span className="text-sm tracking-[0.25em] uppercase text-muted-foreground font-body">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mt-3 mb-6">
              More Than Just<br />
              <span className="italic font-normal">Coffee</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Founded in 2018, Bean & Bliss was born from a simple belief: that a great cup of coffee 
                can transform an ordinary moment into something extraordinary. Nestled in the heart of 
                downtown, our café has become a beloved gathering place for students, creatives, and 
                coffee lovers alike.
              </p>
              <p>
                We source our beans directly from small-scale farms across Colombia, Ethiopia, and Guatemala, 
                roasting them in small batches to bring out their unique character. Every drink is crafted 
                by hand, with the care and attention that only comes from genuine passion.
              </p>
              <p>
                Beyond the coffee, it's the warmth of our space — the exposed brick, the soft lighting, 
                the curated bookshelves — that makes Bean & Bliss feel like your second home. Come for 
                the coffee, stay for the bliss.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
              {[
                { number: "7+", label: "Years Brewing" },
                { number: "15K", label: "Happy Cups Daily" },
                { number: "12", label: "Bean Origins" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
