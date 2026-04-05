import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, MapPin, Phone, Mail, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const reviews = [
  {
    name: "John D.",
    rating: 5,
    text: "[PLACEHOLDER REVIEW] Great shop with amazing service! Mr. Lee helped me find the perfect racket for my playing style.",
    date: "2025-01-15",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "[PLACEHOLDER REVIEW] Best stringing service in LA. Fast turnaround and very reasonable prices. Highly recommend!",
    date: "2025-02-20",
  },
  {
    name: "미영 P.",
    rating: 5,
    text: "[PLACEHOLDER REVIEW] 친절하고 전문적인 서비스! 라켓 추천도 완벽했어요. 최고의 배드민턴 매장입니다.",
    date: "2025-03-10",
  },
];

{/* <!-- OWNER: Copy and paste your Google reviews directly here. 
Each review block follows the structure below. 
Duplicate the block to add more reviews. --> */}

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(220 20% 7% / 0.6), hsl(220 20% 7% / 0.85)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-primary mb-4">
            BADMINTON IS LIFE
          </h1>
          <p className="text-xl md:text-2xl font-heading text-foreground/90 mb-2">{t("hero.tagline")}</p>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/products">{t("hero.cta.products")}</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/booking">{t("hero.cta.booking")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About blurb */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-heading text-primary mb-6">{t("home.about.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("home.about.text")}</p>
        </div>
      </section>

      {/* Store info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading text-primary text-center mb-12">{t("home.info.title")}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t("home.info.hours")}</h3>
                  <p className="text-sm text-muted-foreground">{t("home.info.hours.weekday")}</p>
                  <p className="text-sm text-muted-foreground">{t("home.info.hours.weekend")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t("home.info.address")}</h3>
                  <p className="text-sm text-muted-foreground">1134 S Western Ave, Suite A5, Los Angeles, CA 90006</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t("home.info.phone")}</h3>
                  <p className="text-sm text-muted-foreground">(213) 361-7005</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t("home.info.email")}</h3>
                  <p className="text-sm text-muted-foreground">hello@badmintonislife.com</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-border h-[300px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7!2d-118.309!3d34.048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAyJzUyLjgiTiAxMTjCsDE4JzMyLjQiVw!5e0!3m2!1sen!2sus!4v1"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Badminton Is Life location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      {/* <!-- OWNER: Copy and paste your Google reviews directly here. 
      Each review block follows the structure below. 
      Duplicate the block to add more reviews. --> */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading text-primary text-center mb-12">{t("home.reviews.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-background border border-border rounded-lg p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 mb-4">{review.text}</p>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{review.name}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
