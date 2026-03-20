import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { franchiseContent } from "@/content/franchise";

export default async function InvestorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale === "hi" ? "hi" : "en";

  const t = await getTranslations("InvestorsPage");
  const c = await getTranslations("Common");

  const investmentRange = franchiseContent.investmentRange[lang];

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <section className="relative">
          <div className="mx-auto w-full max-w-6xl px-4 pt-10">
            <div className="rounded-3xl border border-babyPink-200/90 bg-white/60 p-8 shadow-soft">
              <h1 className="text-4xl font-black tracking-tight text-roseInk-900">
                {t("heroTitle")}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-roseInk-900/80">
                {t("heroSubtitle")}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center rounded-full bg-babyPink-300 px-6 py-3 text-base font-extrabold text-roseInk-900 shadow-soft hover:bg-babyPink-200"
                >
                  {c("getInvestorPack")}
                </Link>
                <Link
                  href={`/${locale}/process`}
                  className="inline-flex items-center justify-center rounded-full border border-babyPink-200/90 bg-white/60 px-6 py-3 text-base font-extrabold text-roseInk-900/90 hover:bg-babyPink-50"
                >
                  {locale === "hi" ? "प्रक्रिया देखें" : "See the process"}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Section title={t("investmentSnapshotTitle")}>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-babyPink-200/90 bg-white/65 p-6 shadow-soft">
              <p className="text-sm font-bold text-roseInk-900/70">
                {locale === "hi" ? "अनुमानित निवेश रेंज" : "Approximate investment range"}
              </p>
              <div className="mt-2 text-3xl font-black text-roseInk-900">{investmentRange}</div>
              <p className="mt-3 text-sm leading-relaxed text-roseInk-900/80">{t("investmentNote")}</p>
            </div>

            <div className="rounded-3xl border border-babyPink-200/90 bg-white/65 p-6 shadow-soft">
              <p className="text-sm font-bold text-roseInk-900/70">
                {locale === "hi" ? "आपको क्या मिलेगा" : "What you get"}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-roseInk-900/80">
                {franchiseContent.investmentIncludes[lang].map((inc) => (
                  <li key={inc}>• {inc}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section title={t("faqTitle")}>
          <div className="space-y-4">
            {franchiseContent.faqs.map((item, idx) => (
              <details
                key={idx}
                className="group rounded-3xl border border-babyPink-200/90 bg-white/65 p-5 shadow-soft"
              >
                <summary className="cursor-pointer list-none text-base font-black text-roseInk-900">
                  {item.q[lang]}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-roseInk-900/80">{item.a[lang]}</p>
              </details>
            ))}
          </div>
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

