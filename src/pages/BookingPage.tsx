import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const BookingPage = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    service: "badminton",
    racket: "",
    tension: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Stringing Service Booking");
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nPreferred Date: ${form.date}\nService: ${form.service}\nRacket Model: ${form.racket}\nString Tension: ${form.tension}\nNotes: ${form.notes}`
    );
    window.open(`mailto:hello@badmintonislife.com?subject=${subject}&body=${body}`);
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-heading text-primary text-center mb-4">{t("booking.title")}</h1>
        <p className="text-center text-muted-foreground mb-10">{t("booking.intro")}</p>

        <form onSubmit={handleSubmit} className="space-y-5 bg-card border border-border rounded-lg p-6 md:p-8">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t("booking.name")} *</label>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full bg-background border border-input rounded-md px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t("booking.phone")} *</label>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full bg-background border border-input rounded-md px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t("booking.date")} *</label>
            <input
              required
              type="date"
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              className="w-full bg-background border border-input rounded-md px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t("booking.service")} *</label>
            <select
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
              className="w-full bg-background border border-input rounded-md px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
            >
              <option value="badminton">{t("booking.service.badminton")}</option>
              <option value="tennis">{t("booking.service.tennis")}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t("booking.racket")}</label>
            <input
              type="text"
              value={form.racket}
              onChange={(e) => update("racket", e.target.value)}
              className="w-full bg-background border border-input rounded-md px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t("booking.tension")}</label>
            <input
              type="text"
              value={form.tension}
              onChange={(e) => update("tension", e.target.value)}
              className="w-full bg-background border border-input rounded-md px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">{t("booking.notes")}</label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              className="w-full bg-background border border-input rounded-md px-4 py-2 text-sm text-foreground focus:ring-2 focus:ring-ring focus:outline-none resize-none"
            />
          </div>

          <Button variant="hero" size="lg" type="submit" className="w-full">
            {t("booking.submit")}
          </Button>

          {/* <!-- OWNER: Current stringing price — fill in here --> */}
          <p className="text-center text-sm text-primary border border-primary/30 rounded-md p-3 mt-4">
            {t("booking.price.note")}
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
