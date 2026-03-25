import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("BusinessPage");
  const c = await getTranslations("Common");

  const features =
    locale === "hi"
      ? [
          {
            title: "प्रामाणिक फ्रेंच क्रेप्स",
            desc: "ताजे बनाए गए मीठे और नमकीन क्रेप्स जो परंपरागत फ्रेंच व्यंजनों से प्रेरित हैं।",
          },
          {
            title: "गुरमेट वैफल्स",
            desc: "सोने की परत चढ़ी हुई क्रिस्पी वैफल्स, शीर्ष गुणवत्ता की सामग्री से बनी।",
          },
          {
            title: "सिग्नेचर डोनट्स",
            desc: "हाथ से तैयार किए गए डोनट्स जो आपके स्वाद को मोह लेंगे।",
          },
          {
            title: "हस्तनिर्मित पेय",
            desc: "विशेष कॉफी, चॉकलेट और अन्य अद्भुत पेय विकल्प।",
          },
          {
            title: "चॉकलेट-लोडेड डेजर्ट",
            desc: "प्रीमियम सामग्री से बनी समृद्ध और स्वादिष्ट दलिली।",
          },
          {
            title: "इंस्टाग्राम-योग्य प्रस्तुति",
            desc: "हर व्यंजन को सुंदरता और शैली के साथ परोसा जाता है।",
          },
        ]
      : [
          {
            title: "Authentic French Crepes",
            desc: "Freshly made sweet and savory crepes inspired by traditional French cuisine.",
          },
          {
            title: "Gourmet Waffles",
            desc: "Crispy golden waffles made with premium quality ingredients.",
          },
          {
            title: "Signature Doughnuts",
            desc: "Handcrafted doughnuts that will delight your taste buds.",
          },
          {
            title: "Handcrafted Beverages",
            desc: "Specialty coffees, hot chocolate, and amazing drink options.",
          },
          {
            title: "Chocolate-Loaded Desserts",
            desc: "Rich and indulgent desserts made with premium ingredients.",
          },
          {
            title: "Instagram-Worthy Presentation",
            desc: "Every dish is served with beauty and style in mind.",
          },
        ];

  const whyChoose =
    locale === "hi"
      ? [
          "वडोडरा में सर्वश्रेष्ठ कैफे - प्रीमियम गुणवत्ता और स्वाद",
          "डेजर्ट प्रेमियों के लिए शीर्ष रेटेड स्थान",
          "देर रात की इच्छाओं के लिए परिपूर्ण आश्रय",
          "डेट नाइट्स और हैंगआउट के लिए आरामदायक माहौल",
          "विलासिता, आराम और स्वाद का सही मिश्रण",
          "हर प्रत्येक काटने को प्रभावित करने के लिए तैयार",
        ]
      : [
          "Best café in Vadodara - Premium quality and flavor",
          "Top-rated destination for dessert lovers",
          "Perfect escape for late-night cravings",
          "Cozy ambiance for date nights and hangouts",
          "Perfect blend of luxury, comfort, and flavor",
          "Every bite crafted to impress",
        ];

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Section title={t("title")} description={t("subtitle")}>
          <div className="rounded-3xl border border-babyPink-200/90 bg-gradient-to-br from-babyPink-50/60 to-white/60 p-8">
            <h3 className="text-2xl font-extrabold text-roseInk-900">
              {locale === "hi" ? "हमारा व्यवसाय" : "Our Business"}
            </h3>
            <p className="mt-4 leading-relaxed text-roseInk-900/80">
              {locale === "hi"
                ? "Crepe Factory एक प्रीमियम डेजर्ट कैफे है जो प्रामाणिक फ्रेंच क्रेप्स, गुरमेट वैफल्स, सिग्नेचर डोनट्स और हस्तनिर्मित पेय परोसता है। एक स्टाइलिश और इंस्टाग्राम-योग्य सेटिंग में, हम समृद्ध स्वाद, उच्च गुणवत्ता की सामग्री और सौंदर्य प्रस्तुति के लिए जाने जाते हैं।"
                : "Crepe Factory is a premium dessert café offering authentic French crepes, gourmet waffles, signature doughnuts, and handcrafted beverages in a stylish and Instagram-worthy setting. Known for its rich flavors, high-quality ingredients, and aesthetic presentation, we are a top-rated café for dessert lovers, late-night cravings, and casual dining."}
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-extrabold text-roseInk-900">
              {locale === "hi" ? "हमारी विशेषताएं" : "Our Specialties"}
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-babyPink-200/90 bg-white/65 p-6 shadow-soft"
                >
                  <p className="font-extrabold text-roseInk-900">
                    {feature.title}
                  </p>
                  <p className="mt-2 text-sm text-roseInk-900/80">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-babyPink-200/90 bg-white/65 p-8">
            <h3 className="text-2xl font-extrabold text-roseInk-900">
              {locale === "hi" ? "हमें क्यों चुनें?" : "Why Choose Crepe Factory?"}
            </h3>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {whyChoose.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-babyPink-700" />
                  <p className="text-sm font-semibold text-roseInk-900/80">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-babyPink-200/90 bg-gradient-to-br from-babyPink-100/60 to-white/60 p-8">
            <h3 className="text-2xl font-extrabold text-roseInk-900">
              {locale === "hi"
                ? "वडोडरा में स्मरणीय अनुभव"
                : "A Memorable Café Experience"}
            </h3>
            <p className="mt-4 leading-relaxed text-roseInk-900/80">
              {locale === "hi"
                ? "वडोडरा में स्थित, हम ताजे बनाए गए मीठे और नमकीन क्रेप्स, चॉकलेट-लोडेड डेजर्ट और लालसा भरी दलिली में माहिर हैं। चाहे आप वडोडरा में सर्वश्रेष्ठ कैफे की तलाश में हों, आपके पास एक डेजर्ट जगह हो, या डेट नाइट्स और हैंगआउट के लिए एक आरामदायक जगह हो, Crepe Factory विलासिता, आराम और स्वाद का सही मिश्रण प्रदान करता है।"
                : "Located in Vadodara, we specialize in freshly made sweet and savory crepes, chocolate-loaded desserts, and indulgent treats that deliver both taste and experience. Whether you're searching for the best café in Vadodara, a dessert place near you, or a cozy spot for date nights and hangouts, Crepe Factory offers the perfect blend of luxury, comfort, and flavor."}
            </p>
            <p className="mt-4 text-lg font-extrabold text-roseInk-900">
              {locale === "hi"
                ? "Crepe Factory French Café में आएं एक स्मरणीय कैफे अनुभव के लिए जहां हर काटना प्रभावित करने के लिए तैयार है।"
                : "Visit Crepe Factory French Café for a memorable café experience where every bite is crafted to impress."}
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-full bg-roseInk-900 px-6 py-3 text-base font-extrabold text-white shadow-soft hover:bg-roseInk-900/90"
            >
              {c("talkToUs")}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center justify-center rounded-full border border-babyPink-200/90 bg-white/60 px-6 py-3 text-base font-extrabold text-roseInk-900/90 hover:bg-babyPink-50"
            >
              {locale === "hi" ? "हमारे बारे में जानें" : "Learn More About Us"}
            </Link>
          </div>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
