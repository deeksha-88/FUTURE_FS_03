import heroCafe from "@/assets/hero-cafe.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroCafe}
          alt="Bean & Bliss café interior"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <p
          className="text-cream/80 font-body text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Artisan Coffee · Fresh Pastries · Cozy Vibes
        </p>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.95] mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Bean &<br />
          <span className="italic font-normal">Bliss</span>
        </h1>
        <p
          className="text-cream/70 font-body text-lg md:text-xl max-w-lg mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Where every cup tells a story and every corner feels like home.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#menu"
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-accent transition-colors duration-300"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-cream/30 text-cream font-medium text-sm hover:bg-cream/10 transition-colors duration-300"
          >
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50 opacity-0 animate-fade-up" style={{ animationDelay: "1.2s" }}>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-cream/30 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
