import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading text-primary mb-3">BADMINTON IS LIFE</h3>
            <p className="text-sm text-muted-foreground">1134 S Western Ave, Suite A5<br />Los Angeles, CA 90006</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">{t("nav.products")}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/products" className="hover:text-primary transition-colors">{t("products.category.rackets")}</Link>
              <Link to="/products" className="hover:text-primary transition-colors">{t("products.category.strings")}</Link>
              <Link to="/booking" className="hover:text-primary transition-colors">{t("nav.booking")}</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">{t("contact.info.title")}</h4>
            <p className="text-sm text-muted-foreground">(213) 361-7005</p>
            <p className="text-sm text-muted-foreground">hello@badmintonislife.com</p>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
          {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
