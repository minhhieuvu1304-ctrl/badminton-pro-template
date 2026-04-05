import { useLanguage } from "@/contexts/LanguageContext";
import { DollarSign, Zap, User } from "lucide-react";

const highlights = [
  { icon: DollarSign, titleKey: "about.highlight.pricing", descKey: "about.highlight.pricing.desc" },
  { icon: Zap, titleKey: "about.highlight.stringing", descKey: "about.highlight.stringing.desc" },
  { icon: User, titleKey: "about.highlight.recommendations", descKey: "about.highlight.recommendations.desc" },
] as const;

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading text-primary text-center mb-8">{t("about.title")}</h1>

        <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-16">
          {t("about.story")}
        </p>

        {/* <!-- OWNER: Add team/owner photo here --> */}
        <div className="bg-card border border-border border-dashed rounded-lg p-10 text-center mb-16">
          <p className="text-muted-foreground text-sm">{t("about.team.placeholder")}</p>
        </div>

        <h2 className="text-3xl font-heading text-primary text-center mb-10">{t("about.highlights.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <h.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t(h.titleKey as any)}</h3>
              <p className="text-sm text-muted-foreground">{t(h.descKey as any)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
