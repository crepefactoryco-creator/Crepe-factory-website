import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { getTranslations } from "next-intl/server";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("PrivacyPage");

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Section title={t("title")} description={t("intro")}>
          <div className="space-y-4">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-roseInk-900/80">
              <li>{t("bullets1")}</li>
              <li>{t("bullets2")}</li>
            </ul>

            <div className="rounded-3xl border border-babyPink-200/90 bg-white/65 p-6 shadow-soft">
              <p className="text-sm font-bold text-roseInk-900/80">
                {locale === "hi" ? "अधिक जानकारी" : "More information"}
              </p>
              <p className="mt-3 text-sm text-roseInk-900/80">
                {locale === "hi"
                  ? "आपके डेटा का उपयोग केवल आपकी रिक्वेस्ट के जवाब के लिए किया जाता है।"
                  : "We only use your information to respond to your franchise/investor request."}
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

