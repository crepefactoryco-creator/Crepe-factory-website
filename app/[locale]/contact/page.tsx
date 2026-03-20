import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { getTranslations } from "next-intl/server";
import LeadForm from "@/components/LeadForm";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("ContactPage");

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Section title={t("title")} description={t("subtitle")}>
          <div className="grid gap-6 md:grid-cols-5">
            <div className="md:col-span-3">
              <LeadForm locale={locale} />
            </div>

            <aside className="md:col-span-2">
              <div className="rounded-3xl border border-babyPink-200/90 bg-white/65 p-6 shadow-soft">
                <p className="text-sm font-bold text-roseInk-900/70">
                  {locale === "hi" ? "कॉल/व्हाट्सएप" : "Call / WhatsApp"}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-roseInk-900/80">
                  {locale === "hi"
                    ? "जल्दी जवाब के लिए WhatsApp या कॉल करें।"
                    : "For a quick reply, reach out via WhatsApp or call."}
                </p>

                <div className="mt-5 space-y-3 text-sm">
                  <a
                    className="block rounded-2xl bg-babyPink-200 px-4 py-3 font-extrabold text-roseInk-900 shadow-soft"
                    href="https://wa.me/917383221183"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp: +91 73832 21183
                  </a>
                  <a
                    className="block rounded-2xl bg-roseInk-900 px-4 py-3 text-center font-extrabold text-white shadow-soft"
                    href="tel:+917383221183"
                  >
                    Call: +91 73832 21183
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-babyPink-200/90 bg-white/60 p-6 shadow-soft">
                <p className="text-sm font-bold text-roseInk-900/70">
                  {locale === "hi" ? "आपकी गोपनीयता" : "Your privacy"}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-roseInk-900/80">
                  {locale === "hi"
                    ? "हम सिर्फ आपके अनुरोध को प्रोसेस करने के लिए जानकारी का उपयोग करते हैं।"
                    : "We use your information only to respond to your request."}
                </p>
              </div>
            </aside>
          </div>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

