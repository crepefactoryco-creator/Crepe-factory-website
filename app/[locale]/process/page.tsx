import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("ProcessPage");

  const steps =
    locale === "hi"
      ? [
          { title: "रुचि साझा करें", desc: "फॉर्म भरें या कॉल/व्हाट्सएप पर बात करें।" },
          { title: "फिट आकलन", desc: "हम आपकी स्थिति, लोकेशन और लक्ष्यों को समझते हैं।" },
          { title: "लॉन्च प्लान", desc: "टेरिटरी, सेटअप, और टाइमलाइन पर चर्चा।" },
          { title: "ओपनिंग और सपोर्ट", desc: "ट्रेनिंग, SOPs, और निरंतर ऑपरेशनल मार्गदर्शन।" },
        ]
      : [
          { title: "Share your interest", desc: "Fill the form or reach out via call/WhatsApp." },
          { title: "Fit assessment", desc: "We understand your goals, location, and readiness." },
          { title: "Launch plan", desc: "Discuss territory, setup needs, and timeline." },
          { title: "Open & support", desc: "Training, SOPs, and ongoing operational guidance." },
        ];

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Section title={t("title")} description={t("subtitle")}>
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((s, idx) => (
              <div
                key={s.title}
                className="rounded-3xl border border-babyPink-200/90 bg-white/65 p-6 shadow-soft"
              >
                <div className="text-3xl font-black text-babyPink-700">{idx + 1}</div>
                <p className="mt-2 text-base font-extrabold text-roseInk-900">{s.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-roseInk-900/80">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-babyPink-200/90 bg-babyPink-50/40 p-6">
            <p className="text-sm font-bold text-roseInk-900/70">
              {locale === "hi" ? "अगला कदम" : "Next step"}
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-full bg-roseInk-900 px-6 py-3 text-base font-extrabold text-white shadow-soft"
              >
                {locale === "hi" ? "डेक/पैक मंगाएं" : "Request deck/pack"}
              </Link>
              <Link
                href={`/${locale}/faq`}
                className="inline-flex items-center justify-center rounded-full border border-babyPink-200/90 bg-white/60 px-6 py-3 text-base font-extrabold text-roseInk-900/90 hover:bg-babyPink-50"
              >
                {locale === "hi" ? "FAQ देखें" : "Read FAQ"}
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

