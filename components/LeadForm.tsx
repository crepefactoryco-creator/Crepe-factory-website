"use client";

import { useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export type LeadFormValue = {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  consent: boolean;
  locale: string;
};

const GOOGLE_FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfkVqqRwnzOmg2hmaRGgV73BF4ttRPqavAiE4KqencLgL6NWA/formResponse";

// Field mapping from the HTML you pasted.
const googleEntries = {
  fullName: "entry.558006986",
  email: "entry.661580590",
  phoneWhatsApp: "entry.683835503",
  city: "entry.1826889991",
  message: "entry.315118037",
  privacy: "entry.250447522",
  privacySentinel: "entry.250447522_sentinel",
} as const;

export default function LeadForm({ locale }: { locale: string }) {
  const t = useTranslations("ContactPage");

  const [values, setValues] = useState<LeadFormValue>({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    consent: false,
    locale,
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "error"; message: string }
    | { type: "success" }
  >({ type: "idle" });

  const errors = useMemo(() => {
    const e: string[] = [];
    if (!values.name.trim()) {
      e.push(locale === "hi" ? "नाम आवश्यक है।" : "Name is required.");
    }
    if (!values.email.trim() || !values.email.includes("@")) {
      e.push(
        locale === "hi" ? "कृपया सही ईमेल लिखें।" : "Please enter a valid email."
      );
    }
    if (!values.phone.trim()) {
      e.push(locale === "hi" ? "फोन आवश्यक है।" : "Phone is required.");
    }
    if (!values.city.trim()) {
      e.push(locale === "hi" ? "शहर आवश्यक है।" : "City is required.");
    }
    if (!values.consent) {
      e.push(
        locale === "hi"
          ? "कृपया प्राइवेसी नोटिस से सहमति दें।"
          : "Please agree to the privacy notice."
      );
    }
    return e;
  }, [values, locale]);

  const iframeName = "gform_target_iframe";
  const googleFormRef = useRef<HTMLFormElement | null>(null);

  const hiddenFvvRef = useRef<HTMLInputElement | null>(null);
  const hiddenFullNameRef = useRef<HTMLInputElement | null>(null);
  const hiddenEmailRef = useRef<HTMLInputElement | null>(null);
  const hiddenPhoneWhatsAppRef = useRef<HTMLInputElement | null>(null);
  const hiddenCityRef = useRef<HTMLInputElement | null>(null);
  const hiddenMessageRef = useRef<HTMLInputElement | null>(null);
  const hiddenPrivacyRef = useRef<HTMLInputElement | null>(null);
  const hiddenPrivacySentinelRef = useRef<HTMLInputElement | null>(null);

  function setHiddenValues() {
    // Google requires fvv.
    hiddenFvvRef.current!.value = "1";

    hiddenFullNameRef.current!.value = values.name;
    hiddenEmailRef.current!.value = values.email;
    hiddenPhoneWhatsAppRef.current!.value = values.phone;
    hiddenCityRef.current!.value = values.city;
    hiddenMessageRef.current!.value = values.message || "";

    // Required checkbox:
    // - entry.* value
    // - and the sentinel hidden input
    hiddenPrivacyRef.current!.value = "I agree to the privacy notice";
    hiddenPrivacySentinelRef.current!.value = "true";
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    if (errors.length > 0) {
      setStatus({ type: "error", message: errors[0] });
      return;
    }

    setStatus({ type: "idle" });
    setSubmitting(true);

    try {
      setHiddenValues();
      googleFormRef.current?.submit();

      // We can't read cross-origin iframe response reliably.
      // So we show success shortly after submit.
      setTimeout(() => {
        setStatus({ type: "success" });
        setSubmitting(false);
        setValues((v) => ({
          ...v,
          name: "",
          email: "",
          phone: "",
          city: "",
          message: "",
          consent: false,
        }));
      }, 1200);
    } catch (err) {
      setSubmitting(false);
      setStatus({
        type: "error",
        message:
          err instanceof Error
            ? err.message
            : locale === "hi"
              ? "कुछ गलत हुआ। कृपया फिर से कोशिश करें।"
              : "Something went wrong. Please try again.",
      });
    }
  }

  if (status.type === "success") {
    return (
      <div className="rounded-3xl border border-babyPink-200/90 bg-babyPink-50/40 p-6 shadow-soft">
        <h3 className="text-xl font-black text-roseInk-900">
          {t("successTitle")}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-roseInk-900/80">
          {t("successBody")}
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Hidden submit target so Google doesn't replace our page */}
      <iframe name={iframeName} style={{ display: "none" }} />

      {/* Hidden Google Form submit */}
      <form
        ref={googleFormRef}
        action={GOOGLE_FORM_RESPONSE_URL}
        method="POST"
        target={iframeName}
        style={{ display: "none" }}
      >
        <input
          type="hidden"
          name="fvv"
          ref={hiddenFvvRef}
          defaultValue="1"
        />
        <input
          type="hidden"
          name={googleEntries.fullName}
          ref={hiddenFullNameRef}
        />
        <input type="hidden" name={googleEntries.email} ref={hiddenEmailRef} />
        <input
          type="hidden"
          name={googleEntries.phoneWhatsApp}
          ref={hiddenPhoneWhatsAppRef}
        />
        <input type="hidden" name={googleEntries.city} ref={hiddenCityRef} />
        <input
          type="hidden"
          name={googleEntries.message}
          ref={hiddenMessageRef}
        />
        <input
          type="hidden"
          name={googleEntries.privacy}
          ref={hiddenPrivacyRef}
        />
        <input
          type="hidden"
          name={googleEntries.privacySentinel}
          ref={hiddenPrivacySentinelRef}
        />
      </form>

      <form onSubmit={onSubmit} className="space-y-4">
        {status.type === "error" && (
          <div className="rounded-2xl border border-roseInk-900/20 bg-white/70 p-4 text-sm font-semibold text-roseInk-900">
            {status.message}
          </div>
        )}

        <div className="grid gap-3 md:grid-cols-2">
          <label className="space-y-1">
            <span className="text-sm font-bold text-roseInk-900/80">
              {t("name")}
            </span>
            <input
              value={values.name}
              onChange={(ev) =>
                setValues((v) => ({ ...v, name: ev.target.value }))
              }
              className="w-full rounded-2xl border border-babyPink-200/90 bg-white/70 px-4 py-3 text-sm text-roseInk-900 shadow-soft placeholder:text-roseInk-900/40"
              placeholder={locale === "hi" ? "जैसे: अमित शर्मा" : "e.g. Amit Sharma"}
              required
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm font-bold text-roseInk-900/80">
              {t("email")}
            </span>
            <input
              value={values.email}
              onChange={(ev) =>
                setValues((v) => ({ ...v, email: ev.target.value }))
              }
              type="email"
              className="w-full rounded-2xl border border-babyPink-200/90 bg-white/70 px-4 py-3 text-sm text-roseInk-900 shadow-soft placeholder:text-roseInk-900/40"
              placeholder="name@example.com"
              required
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm font-bold text-roseInk-900/80">
              {t("phone")}
            </span>
            <input
              value={values.phone}
              onChange={(ev) =>
                setValues((v) => ({ ...v, phone: ev.target.value }))
              }
              className="w-full rounded-2xl border border-babyPink-200/90 bg-white/70 px-4 py-3 text-sm text-roseInk-900 shadow-soft placeholder:text-roseInk-900/40"
              placeholder={locale === "hi" ? "जैसे: 90000 00000" : "e.g. 90000 00000"}
              required
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm font-bold text-roseInk-900/80">
              {t("city")}
            </span>
            <input
              value={values.city}
              onChange={(ev) =>
                setValues((v) => ({ ...v, city: ev.target.value }))
              }
              className="w-full rounded-2xl border border-babyPink-200/90 bg-white/70 px-4 py-3 text-sm text-roseInk-900 shadow-soft placeholder:text-roseInk-900/40"
              placeholder={locale === "hi" ? "जैसे: पुणे" : "e.g. Pune"}
              required
            />
          </label>
        </div>

        <label className="space-y-1">
          <span className="text-sm font-bold text-roseInk-900/80">{t("message")}</span>
          <textarea
            value={values.message}
            onChange={(ev) =>
              setValues((v) => ({ ...v, message: ev.target.value }))
            }
            className="min-h-[110px] w-full rounded-2xl border border-babyPink-200/90 bg-white/70 px-4 py-3 text-sm text-roseInk-900 shadow-soft placeholder:text-roseInk-900/40"
            placeholder={
              locale === "hi"
                ? "फ्रैंचाइज़/निवेश के लिए अपने विचार लिखें..."
                : "Share your thoughts (franchise/investor)..."
            }
          />
        </label>

        <label className="flex items-start gap-3 rounded-2xl border border-babyPink-200/90 bg-white/60 p-4 text-sm font-semibold text-roseInk-900/80">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(ev) =>
              setValues((v) => ({ ...v, consent: ev.target.checked }))
            }
            className="mt-1 h-4 w-4 accent-babyPink-500"
            required
          />
          <span className="leading-relaxed">
            {t("consentPrefix")}{" "}
            <a
              href={`/${locale}/privacy`}
              className="underline hover:text-roseInk-900"
            >
              {t("consentLink")}
            </a>
          </span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-roseInk-900 px-6 py-3 text-base font-extrabold text-white shadow-soft hover:bg-roseInk-900/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting
            ? locale === "hi"
              ? "भेज रहे हैं..."
              : "Sending..."
            : t("submit")}
        </button>
      </form>
    </>
  );
}

