import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-4 py-12 ${className}`}>
      {(eyebrow || title || description) && (
        <Reveal className="mb-8">
          <header>
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold tracking-wide text-roseInk-900/70">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold leading-tight">{title}</h2>
            )}
            {description && (
              <p className="mt-3 max-w-2xl text-base/7 text-roseInk-900/80">
                {description}
              </p>
            )}
          </header>
        </Reveal>
      )}
      <Reveal>{children}</Reveal>
    </section>
  );
}

