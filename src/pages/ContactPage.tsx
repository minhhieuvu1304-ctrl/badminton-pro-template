import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading text-primary text-center mb-12">{t("contact.title")}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-heading text-foreground">{t("contact.info.title")}</h2>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">{t("home.info.address")}</h3>
                <p className="text-sm text-muted-foreground">1134 S Western Ave, Suite A5<br />Los Angeles, CA 90006</p>
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

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">{t("home.info.hours")}</h3>
                <p className="text-sm text-muted-foreground">{t("home.info.hours.weekday")}</p>
                <p className="text-sm text-muted-foreground">{t("home.info.hours.weekend")}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground mb-3">{t("contact.social")}</h3>
              {/* <!-- OWNER: Replace # with actual Facebook page URL --> */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
                {t("contact.facebook")}
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-border h-[400px]">
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
    </div>
  );
};

export default ContactPage;
