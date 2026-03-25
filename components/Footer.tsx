import Link from "next/link";
import { getTranslations } from "next-intl/server";

const phoneHref = "tel:+917383221183";
const whatsappHref = "https://wa.me/917383221183";

export default async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations("Nav");

  return (
    <footer className="border-t border-babyPink-200/70 bg-white/60">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-roseInk-900">Crepe Factory</p>
          <p className="mt-2 text-sm text-roseInk-900/70">
            Franchise and investor enquiries.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link href={`/${locale}`} className="text-sm font-semibold text-roseInk-900/80 hover:underline">
            {t("home")}
          </Link>
          <Link
            href={`/${locale}/investors`}
            className="text-sm font-semibold text-roseInk-900/80 hover:underline"
          >
            {t("investors")}
          </Link>
          <Link
            href={`/${locale}/process`}
            className="text-sm font-semibold text-roseInk-900/80 hover:underline"
          >
            {t("process")}
          </Link>
          <Link
            href={`/${locale}/faq`}
            className="text-sm font-semibold text-roseInk-900/80 hover:underline"
          >
            {t("faq")}
          </Link>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-babyPink-200 px-4 py-2 text-sm font-bold text-roseInk-900 shadow-soft"
            >
              WhatsApp
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center rounded-full bg-roseInk-900 px-4 py-2 text-sm font-bold text-white"
            >
              Call
            </a>
          </div>

          <div className="mt-4 text-xs text-roseInk-900/60">
            <Link href={`/${locale}/privacy`} className="hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-babyPink-200/70 px-4 py-4 text-center">
        <p className="text-xs text-roseInk-900/60">
          © 2026. Crepe Factory is an unit B A CHAUDHARI. All Rights reserved
        </p>
      </div>
    </footer>
  );
}

