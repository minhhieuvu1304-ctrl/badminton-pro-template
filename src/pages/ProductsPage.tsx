import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import racketImg from "@/assets/product-racket.jpg";
import stringImg from "@/assets/product-string.jpg";

type Category = "all" | "rackets" | "strings";
type PriceRange = "all" | "under50" | "50to150" | "150to300" | "300plus";

interface Product {
  id: number;
  name: string;
  brand: string;
  category: "rackets" | "strings";
  priceRange: PriceRange;
  image: string;
}

const products: Product[] = [
  // Rackets
  { id: 1, name: "Astrox 99 Pro", brand: "Yonex", category: "rackets", priceRange: "300plus", image: racketImg },
  { id: 2, name: "Nanoflare 800", brand: "Yonex", category: "rackets", priceRange: "150to300", image: racketImg },
  { id: 3, name: "Thruster K Falcon", brand: "Victor", category: "rackets", priceRange: "150to300", image: racketImg },
  { id: 4, name: "Auraspeed 90K II", brand: "Victor", category: "rackets", priceRange: "300plus", image: racketImg },
  { id: 5, name: "Axforce 80", brand: "Li-Ning", category: "rackets", priceRange: "150to300", image: racketImg },
  { id: 6, name: "Bladex 900 Max", brand: "Li-Ning", category: "rackets", priceRange: "300plus", image: racketImg },
  { id: 7, name: "Jetspeed S12", brand: "Victor", category: "rackets", priceRange: "150to300", image: racketImg },
  { id: 8, name: "Nanoflare 370", brand: "Yonex", category: "rackets", priceRange: "50to150", image: racketImg },
  // Strings
  { id: 9, name: "BG65", brand: "Yonex", category: "strings", priceRange: "under50", image: stringImg },
  { id: 10, name: "BG80 Power", brand: "Yonex", category: "strings", priceRange: "under50", image: stringImg },
  { id: 11, name: "Aerobite", brand: "Yonex", category: "strings", priceRange: "under50", image: stringImg },
  { id: 12, name: "VS-850", brand: "Victor", category: "strings", priceRange: "under50", image: stringImg },
  { id: 13, name: "No.1 String", brand: "Li-Ning", category: "strings", priceRange: "under50", image: stringImg },
  { id: 14, name: "AP70", brand: "Li-Ning", category: "strings", priceRange: "under50", image: stringImg },
];

const racketBrands = ["Yonex", "Victor", "Li-Ning"];
const stringBrands = ["Yonex", "Victor", "Li-Ning"];

const ProductsPage = () => {
  const { t } = useLanguage();
  const [category, setCategory] = useState<Category>("all");
  const [brand, setBrand] = useState("all");
  const [priceRange, setPriceRange] = useState<PriceRange>("all");

  const availableBrands = useMemo(() => {
    if (category === "strings") return stringBrands;
    if (category === "rackets") return racketBrands;
    return [...new Set([...racketBrands, ...stringBrands])];
  }, [category]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (brand !== "all" && p.brand !== brand) return false;
      if (priceRange !== "all" && p.priceRange !== priceRange) return false;
      return true;
    });
  }, [category, brand, priceRange]);

  const priceRanges: { value: PriceRange; label: string }[] = [
    { value: "all", label: t("products.filter.all") },
    { value: "under50", label: t("products.price.under50") },
    { value: "50to150", label: t("products.price.50to150") },
    { value: "150to300", label: t("products.price.150to300") },
    { value: "300plus", label: t("products.price.300plus") },
  ];

  const handleContact = (productName: string) => {
    const subject = encodeURIComponent(`Inquiry about ${productName}`);
    const body = encodeURIComponent(`Hi, I'm interested in the ${productName}. Could you provide more details and pricing?`);
    window.open(`mailto:hello@badmintonislife.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading text-primary text-center mb-10">
          {t("products.title")}
        </h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 p-4 bg-card rounded-lg border border-border">
          {/* Category */}
          <div className="flex-1">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
              {t("products.filter.category")}
            </label>
            <div className="flex gap-2 flex-wrap">
              {(["all", "rackets", "strings"] as Category[]).map((c) => (
                <button
                  key={c}
                  onClick={() => { setCategory(c); setBrand("all"); }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    category === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {c === "all" ? t("products.filter.all") : c === "rackets" ? t("products.category.rackets") : t("products.category.strings")}
                </button>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div className="flex-1">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
              {t("products.filter.brand")}
            </label>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setBrand("all")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  brand === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {t("products.filter.all")}
              </button>
              {availableBrands.map((b) => (
                <button
                  key={b}
                  onClick={() => setBrand(b)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    brand === b
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="flex-1">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
              {t("products.filter.price")}
            </label>
            <div className="flex gap-2 flex-wrap">
              {priceRanges.map((pr) => (
                <button
                  key={pr.value}
                  onClick={() => setPriceRange(pr.value)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    priceRange === pr.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {pr.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div key={product.id} className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-primary font-semibold uppercase">{product.brand}</span>
                <h3 className="font-semibold text-foreground mt-1">
                  {product.name}
                  {/* <!-- OWNER: Add translated product name --> */}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{t("products.description.placeholder")}</p>
                {/* <!-- OWNER: Replace with actual price --> */}
                <p className="text-lg font-bold text-primary mt-2">[PRICE]</p>
                <Button
                  variant="hero"
                  size="sm"
                  className="w-full mt-3"
                  onClick={() => handleContact(product.name)}
                >
                  {t("products.contact")}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No products match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
