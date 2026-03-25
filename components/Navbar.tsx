import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const brandName = "Crepe Factory";

export default async function Navbar({ locale }: { locale: string }) {
  const t = await getTranslations("Nav");

  return (
    <nav className="sticky top-0 z-50 border-b border-babyPink-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-3"
        >
          <span className="relative h-10 w-10 overflow-hidden rounded-full bg-babyPink-100/80 ring-1 ring-babyPink-200/80">
            <Image
              src="/assets/logo.png"
              alt="Crepe Factory logo"
              fill
              sizes="40px"
              priority
              className="object-cover"
            />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-roseInk-900">
            {brandName}
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-6 md:flex">
            <Link href={`/${locale}`} className="text-sm font-semibold text-roseInk-900/80 hover:text-roseInk-900">
              {t("home")}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-sm font-semibold text-roseInk-900/80 hover:text-roseInk-900"
            >
              {t("about")}
            </Link>
            <Link
              href={`/${locale}/business`}
              className="text-sm font-semibold text-roseInk-900/80 hover:text-roseInk-900"
            >
              {t("business")}
            </Link>
            <Link
              href={`/${locale}/investors`}
              className="text-sm font-semibold text-roseInk-900/80 hover:text-roseInk-900"
            >
              {t("investors")}
            </Link>
            <Link
              href={`/${locale}/process`}
              className="text-sm font-semibold text-roseInk-900/80 hover:text-roseInk-900"
            >
              {t("process")}
            </Link>
            <Link
              href={`/${locale}/faq`}
              className="text-sm font-semibold text-roseInk-900/80 hover:text-roseInk-900"
            >
              {t("faq")}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-sm font-semibold text-roseInk-900/80 hover:text-roseInk-900"
            >
              {t("contact")}
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/en"
              className={`rounded-full px-3 py-1 text-sm font-semibold ${
                locale === "en" ? "bg-babyPink-200 text-roseInk-900" : "bg-transparent text-roseInk-900/70 hover:bg-babyPink-100"
              }`}
            >
              EN
            </Link>
            <Link
              href="/hi"
              className={`rounded-full px-3 py-1 text-sm font-semibold ${
                locale === "hi" ? "bg-babyPink-200 text-roseInk-900" : "bg-transparent text-roseInk-900/70 hover:bg-babyPink-100"
              }`}
            >
              HI
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

