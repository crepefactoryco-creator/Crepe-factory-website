import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("AboutPage");
  const c = await getTranslations("Common");

  const sections =
    locale === "hi"
      ? [
          {
            title: "हमारी कहानी",
            content: "Crepe Factory एक जुनून से पैदा हुआ — प्रामाणिक स्वाद और सौंदर्य अनुभव के लिए प्रेम से। यह सिर्फ एक कैफे नहीं है, यह एक गंतव्य है। फ्रांस की आकर्षक सड़कों से प्रेरित, हम आपको हाथ से तैयार क्रेप्स, शानदार डेजर्ट और कारीगरी सामग्रीयांऐ लेकर आते हैं, जो सभी सटीकता, जुनून और प्रीमियम सामग्री के साथ बनाई गई हैं।",
          },
          {
            title: "हमारी दृष्टि",
            content: "हम विश्वास करते हैं कि विलासिता विस्तार में है। हर प्लेट जो हम परोसते हैं वह सिर्फ खाना नहीं है — यह एक पल है। चॉकलेट की समृद्ध बूंदों से लेकर, एक परफेक्ट क्रेप के नाजुक तहों तक, या पहले काटने तक जो आपके मुंह में पिघल जाता है, हम ऐसे अनुभव बनाते हैं जो साझा करने लायक हैं।",
          },
          {
            title: "क्यों हमें चुनें?",
            content: "Crepe Factory एक जगह है जहां आप आने वाले हर दिन सर्वश्रेष्ठ गुणवत्ता, स्वाद और सेवा की अपेक्षा कर सकते हैं। हमारे सावधानीपूर्वक डिज़ाइन किए गए माहौल से लेकर हमारे इंस्टाग्राम-योग्य प्रस्तुतियों और लगातार प्रिय स्वाद तक, हम खाद्य प्रेमियों, ट्रेंडसेटर्स और देर रात की इच्छाओं के लिए पसंदीदा जगह बन गए हैं।",
          },
        ]
      : [
          {
            title: "Our Story",
            content: "Crepe Factory was born from a passion for authentic flavors and aesthetic experiences. It's not just a café — it's a destination. Inspired by the charming streets of France, we bring you a curated menu of handcrafted crepes, indulgent desserts, and artisanal delights, all made with precision, passion, and premium ingredients.",
          },
          {
            title: "Our Vision",
            content: "We believe luxury is in the details. Every plate we serve is designed to be more than just food — it's a moment. Whether it's the rich drizzle of chocolate, the delicate fold of a perfectly made crepe, or the first bite that melts in your mouth, we create experiences worth sharing.",
          },
          {
            title: "Why Choose Us?",
            content: "Crepe Factory is a place where you can expect the finest quality, flavors, and service every time you visit. From our carefully designed ambiance to our Instagram-worthy presentations and consistently loved flavors, we've become a go-to spot for food lovers, trendsetters, and late-night cravings alike.",
          },
        ];

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Section title={t("title")} description={t("subtitle")}>
          <div className="grid gap-8 md:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-babyPink-200/90 bg-white/65 p-8 shadow-soft"
              >
                <h3 className="text-xl font-extrabold text-roseInk-900">
                  {section.title}
                </h3>
                <p className="mt-4 leading-relaxed text-roseInk-900/80">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-babyPink-200/90 bg-gradient-to-br from-babyPink-100/60 to-white/60 p-8">
            <h3 className="text-2xl font-extrabold text-roseInk-900">
              {locale === "hi"
                ? "आप का हिस्सा है Crepe Factory की कहानी"
                : "You're Part of the Crepe Factory Story"}
            </h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-roseInk-900/80">
              {locale === "hi"
                ? "चाहे आप एक त्वरित भोग के लिए यहां हों, एक आरामदायक डेट के लिए, या अपने अगले वायरल पल को कैप्चर करने के लिए — आप Crepe Factory की कहानी का हिस्सा हैं। जहां स्वाद कला से मिलता है। जहां पल यादें बन जाती हैं।"
                : "Whether you're here for a quick indulgence, a cozy date, or to capture your next viral moment — you're part of the Crepe Factory story. Where flavor meets art. Where moments become memories."}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-full bg-roseInk-900 px-6 py-3 text-base font-extrabold text-white shadow-soft hover:bg-roseInk-900/90"
              >
                {c("talkToUs")}
              </Link>
              <Link
                href={`/${locale}/investors`}
                className="inline-flex items-center justify-center rounded-full border border-babyPink-200/90 bg-white/60 px-6 py-3 text-base font-extrabold text-roseInk-900/90 hover:bg-babyPink-50"
              >
                {locale === "hi" ? "निवेशक होना चाहते हैं?" : "Want to invest?"}
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
