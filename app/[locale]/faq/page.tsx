import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { franchiseContent } from "@/content/franchise";

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale === "hi" ? "hi" : "en";
  const t = await getTranslations("FaqPage");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: franchiseContent.faqs.map((item) => ({
      "@type": "Question",
      name: item.q[lang],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a[lang],
      },
    })),
  };

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Section title={t("title")} description={t("subtitle")}>
          <div className="space-y-4">
            {franchiseContent.faqs.map((item, idx) => (
              <details
                key={idx}
                className="group rounded-3xl border border-babyPink-200/90 bg-white/65 p-5 shadow-soft"
              >
                <summary className="cursor-pointer list-none text-base font-black text-roseInk-900">
                  {item.q[lang]}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-roseInk-900/80">
                  {item.a[lang]}
                </p>
              </details>
            ))}
          </div>

          <script
            type="application/ld+json"
            // JSON-LD is safe to embed as it is generated server-side from our own content module.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

