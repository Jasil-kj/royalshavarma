"use client";

import { useState } from "react";
import RevealText from "@/components/ui/RevealText";
import GlassPanel from "@/components/ui/GlassPanel";
import Image from "next/image";

type MenuItem = {
  name: string;
  description?: string | string[];
  price: string;
  image?: string;
  badge?: string;
};

const MENU_CATEGORIES = [
  "Royal Specials",
  "Shawarma",
  "Plates",
  "Fries",
  "Fresh Juices",
  "Hot Drinks",
  "Cold Drinks"
];

const MENU_ITEMS: Record<string, MenuItem[]> = {
  "Royal Specials": [
    {
      name: "The Royal Shawarma Combo",
      description: [
        "Any Regular Shawarma",
        "French Fries",
        "Soft Drink"
      ],
      price: "₹799",
      image: "/royal-shawarma-combo.png"
    }
  ],
  "Shawarma": [
    {
      name: "Royal Chicken Shawarma",
      description: "Freshly Grilled. Perfectly Wrapped. Truly Royal.",
      price: "₹249",
      image: "/royal-chicken-shawarma.png"
    },
    {
      name: "Royal Beef Shawarma",
      description: "Bold Flavor. Premium Beef. A Truly Royal Shawarma Experience.",
      price: "₹349",
      image: "/royal-beef-shawarma.jpeg"
    },
    {
      name: "Royal Mixed Shawarma",
      description: "The best of both worlds. Chicken and beef layered with signature sauces.",
      price: "₹399",
      image: "/royal-mixed-shawarma.jpeg"
    },
    {
      name: "Jumbo Shawarma",
      description: "An oversized delight with extra fillings, cheese, and special sauces.",
      price: "₹499",
      image: "/jumbo.png"
    }
  ],
  "Plates": [
    {
      name: "Chicken Shawarma Plate",
      description: "A Complete Royal Feast – Fresh, Flavorful, and Unforgettable.",
      price: "₹449",
      image: "/chicken-shawarma-plate.png"
    },
    {
      name: "Beef Shawarma Plate",
      description: "Premium Beef. Complete Meal. A Royal Dining Experience.",
      price: "₹549",
      image: "/beef-shawarma-plate.png"
    },
    {
      name: "Mixed Shawarma Plate",
      description: "A feast of both meats with a full complement of Middle Eastern sides.",
      price: "₹599",
      image: "/mixed-shawarma-plate.png"
    }
  ],
  "Fries": [
    {
      name: "French Fries",
      description: "Crispy, golden, and lightly salted.",
      price: "₹149",
      image: "/french-fries.jpeg"
    },
    {
      name: "Curly Fries",
      description: "Seasoned curly fries with a perfect crunch.",
      price: "₹199",
      image: "/curly-fries.jpeg"
    },
    {
      name: "Cheese Fries",
      description: "Smothered in our rich, melting signature cheese blend.",
      price: "₹249",
      image: "/cheese-fries.jpeg"
    }
  ],
  "Fresh Juices": [
    {
      name: "Fresh Orange Juice",
      description: "Squeezed to order from premium oranges.",
      price: "₹149",
      image: "/fresh-orange-juice.jpeg"
    },
    {
      name: "Lemon Mint",
      description: "Refreshing crushed mint and lemon blend.",
      price: "₹129",
      image: "/lemon-mint.jpeg"
    },
    {
      name: "Lemon Soda",
      description: "Zesty lemon with sparkling soda.",
      price: "₹109",
      image: "/lemon-soda.png"
    }
  ],
  "Hot Drinks": [
    {
      name: "Suleimani Tea",
      description: "Traditional black tea infused with cardamom and spices.",
      price: "₹49",
      image: "/suleimani-tea.png"
    },
    {
      name: "Royal Coffee",
      description: "Rich, unfiltered coffee brewed slowly.",
      price: "₹129",
      image: "/royal-coffee.png"
    },
    {
      name: "Kerala Tea",
      description: "Brewed to perfection.",
      price: "₹39",
      image: "/kerala-tea.png"
    }
  ],
  "Cold Drinks": [
    { name: "Pepsi", price: "₹69", image: "/pepsi.png" },
    { name: "Coca Cola", price: "₹69", image: "/coca-cola.jpeg" },
    { name: "7Up", price: "₹69", image: "/7up.png" },
    { name: "Sprite", price: "₹69", image: "/sprite.jpeg" },
    { name: "Mountain Dew", price: "₹69", image: "/mountain-dew.jpeg" },
    { name: "Water Bottle", price: "₹49", image: "/water-bottle.png" }
  ]
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);

  return (
    <div className="pt-[120px] pb-stack-xl min-h-screen">
      <div className="px-margin-safe max-w-[1440px] mx-auto mb-stack-lg text-center">
        <span className="text-primary font-label-caps text-label-caps mb-4 block"><RevealText text="THE MENU" /></span>
        <h1 className="font-display-lg text-display-lg md:text-[80px] mb-6"><RevealText text="Culinary Excellence" delay={0.2} /></h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
          Crafted with authentic spices, premium meats, and a passion for perfection. 
          Discover the gold standard of Middle Eastern cuisine.
        </p>
      </div>

      <div className="px-margin-safe max-w-[1440px] mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Sticky Sidebar */}
        <div className="md:w-64 shrink-0">
          <div className="sticky top-[120px] glass-panel p-6 rounded-2xl flex flex-row md:flex-col gap-2 overflow-x-auto hide-scrollbar">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-left px-4 py-3 rounded-xl font-label-caps text-label-caps transition-all whitespace-nowrap ${
                  activeCategory === category 
                    ? "bg-primary text-on-primary font-bold shadow-lg" 
                    : "hover:bg-primary/5 text-on-surface-variant hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Content */}
        <div className="flex-1">
          <div className="mb-8">
            <h2 className="font-headline-xl text-headline-xl text-primary">{activeCategory}</h2>
            <div className="w-12 h-1 bg-primary mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {MENU_ITEMS[activeCategory as keyof typeof MENU_ITEMS].map((item, index) => (
              <GlassPanel key={item.name} delay={index * 0.1} className="p-6 flex flex-col gap-6 group border-2 border-primary/20 hover:border-primary transition-colors">
                {item.image && (
                  <div className="w-full aspect-square rounded-xl overflow-hidden relative">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    {item.badge && (
                      <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded font-label-caps text-[10px] font-bold shadow-lg">
                        {item.badge}
                      </div>
                    )}
                  </div>
                )}
                <div className="flex flex-col w-full">
                  <div className="flex justify-between items-start gap-4 mb-2 border-b border-black/10 pb-4">
                    <h3 className="font-headline-md text-headline-md text-on-background group-hover:text-primary transition-colors">{item.name}</h3>
                  </div>
                  {item.description && (
                    <div className="text-on-surface-variant leading-relaxed">
                      {Array.isArray(item.description) ? (
                        <ul className="list-disc list-inside space-y-1">
                          {item.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{item.description}</p>
                      )}
                    </div>
                  )}
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
