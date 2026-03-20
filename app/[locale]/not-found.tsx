import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function NotFoundPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("NotFoundPage");

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <section className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-babyPink-200/90 bg-white/70 p-8 shadow-soft">
            <p className="text-sm font-bold text-roseInk-900/70">
              {locale === "hi" ? "404" : "404"}
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-roseInk-900">
              {t("title")}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-roseInk-900/80">
              {t("subtitle")}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center justify-center rounded-full bg-roseInk-900 px-6 py-3 text-base font-extrabold text-white shadow-soft hover:bg-roseInk-900/90"
              >
                {t("goHome")}
              </Link>
              <Link
                href={`/${locale}/investors`}
                className="inline-flex items-center justify-center rounded-full border border-babyPink-200/90 bg-white/60 px-6 py-3 text-base font-extrabold text-roseInk-900/90 hover:bg-babyPink-50"
              >
                {locale === "hi" ? "निवेशक पेज" : "Investors"}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

