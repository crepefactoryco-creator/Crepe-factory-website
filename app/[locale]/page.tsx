import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations("HomePage");
  const c = await getTranslations("Common");

  const trustLine =
    locale === "hi"
      ? "4.8 रेटिंग · 552+ गूगल रिव्यू"
      : "4.8 rating · 552+ Google reviews";

  return (
    <>
      <Navbar locale={locale} />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-babyPink-300/40 blur-3xl" />
            <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-babyPink-200/50 blur-3xl" />
          </div>

          <div className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-10">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-babyPink-200/90 bg-white/70 px-4 py-2 text-sm font-semibold text-roseInk-900/80 shadow-soft">
                  {trustLine}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-semibold text-roseInk-900/70">
                  <span className="rounded-full bg-white/60 px-4 py-2">
                    {locale === "hi" ? "खुला" : "Open"}
                  </span>
                  <span className="rounded-full bg-white/60 px-4 py-2">
                    {locale === "hi" ? "24x7" : "Open 24 hours"}
                  </span>
                  <span className="rounded-full bg-white/60 px-4 py-2">
                    {locale === "hi" ? "कोज़ी वाइब" : "Cozy vibe"}
                  </span>
                </div>

                <h1 className="mt-5 text-4xl font-black tracking-tight text-roseInk-900 md:text-5xl">
                  {t("heroTitle")}
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-roseInk-900/80">
                  {t("heroSubtitle")}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center rounded-full bg-babyPink-300 px-6 py-3 text-base font-extrabold text-roseInk-900 shadow-soft hover:bg-babyPink-200"
                  >
                    {c("requestDeck")}
                  </Link>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center rounded-full border border-babyPink-200/90 bg-white/60 px-6 py-3 text-base font-extrabold text-roseInk-900/90 hover:bg-babyPink-50"
                  >
                    {c("talkToUs")}
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-roseInk-900/70">
                  <span className="rounded-full bg-white/60 px-4 py-2">Training</span>
                  <span className="rounded-full bg-white/60 px-4 py-2">Marketing</span>
                  <span className="rounded-full bg-white/60 px-4 py-2">Operational playbooks</span>
                </div>
              </div>

              <Reveal>
                <div className="flex flex-col gap-6">
                  {/* Photo collage (2x2 grid so nothing gets cut off) */}
                  <div className="relative h-[420px] rounded-3xl border border-babyPink-200/70 bg-white/40 shadow-soft backdrop-blur overflow-hidden">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-babyPink-50/45 via-white/45 to-babyPink-100/35" />

                    <div className="relative h-full w-full p-4">
                      <div className="grid h-full grid-cols-2 grid-rows-2 gap-4">
                        <div className="relative overflow-hidden rounded-2xl border border-babyPink-200/90 bg-white/50 shadow-soft transition-transform duration-700 hover:-rotate-1">
                          <Image
                            src="/assets/WhatsApp_Image_2026-03-19_at_00.31.39-0028c970-52e8-4670-a76d-87ec0c659d1a.png"
                            alt="Crepe photo 1"
                            fill
                            sizes="(max-width: 768px) 45vw, 20vw"
                            className="object-cover"
                            priority
                          />
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border border-babyPink-200/90 bg-white/50 shadow-soft transition-transform duration-700 hover:rotate-1">
                          <Image
                            src="/assets/WhatsApp_Image_2026-03-19_at_00.31.40-0441246f-5e9a-4063-bd7a-1e78b5e54585.png"
                            alt="Crepe photo 2"
                            fill
                            sizes="(max-width: 768px) 45vw, 20vw"
                            className="object-cover"
                            priority
                          />
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border border-babyPink-200/90 bg-white/50 shadow-soft transition-transform duration-700 hover:-translate-y-1 hover:rotate-1">
                          <Image
                            src="/assets/WhatsApp_Image_2026-03-19_at_00.31.40__1_-e6e0639f-d705-4dec-9166-c7516a59358a.png"
                            alt="Crepe photo 3"
                            fill
                            sizes="(max-width: 768px) 45vw, 20vw"
                            className="object-cover"
                            priority
                          />
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border border-babyPink-200/90 bg-white/50 shadow-soft transition-transform duration-700 hover:-rotate-1">
                          <Image
                            src="/assets/WhatsApp_Image_2026-03-19_at_00.31.41__1_-dc5b83b0-2d7e-4f3f-a0c4-18e674e8b98c.png"
                            alt="Crepe photo 4"
                            fill
                            sizes="(max-width: 768px) 45vw, 20vw"
                            className="object-cover"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Section title={t("benefitsTitle")}>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { title: t("benefit1Title"), desc: t("benefit1Desc") },
              { title: t("benefit2Title"), desc: t("benefit2Desc") },
              { title: t("benefit3Title"), desc: t("benefit3Desc") },
              { title: t("benefit4Title"), desc: t("benefit4Desc") },
            ].map((b) => (
              <article
                key={b.title}
                className="rounded-3xl border border-babyPink-200/90 bg-white/65 p-6 shadow-soft"
              >
                <h3 className="text-lg font-black text-roseInk-900">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-roseInk-900/80">{b.desc}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section title={t("howTitle")}>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { step: "1", label: t("step1") },
              { step: "2", label: t("step2") },
              { step: "3", label: t("step3") },
              { step: "4", label: t("step4") },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-3xl border border-babyPink-200/90 bg-white/65 p-6 shadow-soft"
              >
                <div className="text-3xl font-black text-babyPink-700">{s.step}</div>
                <p className="mt-2 font-extrabold text-roseInk-900">{s.label}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>

      <Footer locale={locale} />
    </>
  );
}

