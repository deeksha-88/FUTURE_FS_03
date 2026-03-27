import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = ["Coffee", "Snacks", "Sweets"] as const;

const menuItems = {
  Coffee: [
    { name: "Espresso", description: "Rich, bold single shot", price: "$3.50" },
    { name: "Americano", description: "Smooth espresso with hot water", price: "$4.00" },
    { name: "Cappuccino", description: "Espresso with steamed milk foam", price: "$4.50" },
    { name: "Café Latte", description: "Creamy espresso with velvety milk", price: "$5.00" },
    { name: "Flat White", description: "Double shot with microfoam", price: "$5.00" },
    { name: "Mocha", description: "Espresso, chocolate, steamed milk", price: "$5.50" },
  ],
  Snacks: [
    { name: "Avocado Toast", description: "Sourdough, smashed avo, chili flakes", price: "$8.50" },
    { name: "Club Sandwich", description: "Triple-decker with chicken & bacon", price: "$9.00" },
    { name: "Grilled Panini", description: "Mozzarella, tomato & basil pressed", price: "$7.50" },
    { name: "Granola Bowl", description: "Greek yogurt, honey, seasonal fruit", price: "$7.00" },
  ],
  Sweets: [
    { name: "Butter Croissant", description: "Flaky, golden, baked fresh daily", price: "$3.50" },
    { name: "Chocolate Cake", description: "Rich dark chocolate layer cake", price: "$5.50" },
    { name: "Blueberry Muffin", description: "Moist with real blueberries", price: "$4.00" },
    { name: "Cinnamon Roll", description: "Warm, gooey cream cheese glaze", price: "$4.50" },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState<typeof categories[number]>("Coffee");
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="menu" className="section-padding bg-secondary">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.25em] uppercase text-muted-foreground font-body">
            What We Serve
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mt-3">
            Our Menu
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems[active].map((item, i) => (
            <div
              key={item.name}
              className={`flex items-start justify-between gap-4 p-5 rounded-xl bg-background border border-border transition-all duration-500 hover-lift ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
              </div>
              <span className="font-display text-lg font-semibold text-primary whitespace-nowrap">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
