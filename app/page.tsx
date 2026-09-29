import { siteConfig } from "@/data/site.config";
import { content } from "@/data/content";
import { brand } from "@/data/brand";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: brand.colors.background,
        color: brand.colors.text,
      }}
      className="min-h-screen"
    >
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="font-semibold tracking-tight">
            {siteConfig.name}
          </div>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            className="rounded-full px-5 py-3 text-sm font-medium text-white"
            style={{ backgroundColor: brand.colors.primary }}
          >
            {content.hero.cta}
          </a>
        </div>
      </header>

      <section
        className="flex min-h-[80vh] items-center"
        style={{
          backgroundColor: brand.colors.surface,
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p
              className="mb-6 text-sm font-medium uppercase tracking-[0.2em]"
              style={{ color: brand.colors.accent }}
            >
              {brand.style}
            </p>

            <h1
              className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl"
              style={{ fontFamily: brand.typography.heading }}
            >
              {content.hero.title}
            </h1>

            <p
              className="mt-8 max-w-2xl text-lg leading-8"
              style={{ color: brand.colors.muted }}
            >
              {content.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                className="rounded-full px-6 py-3 text-sm font-medium text-white"
                style={{
                  backgroundColor: brand.colors.primary,
                  borderRadius: brand.radius.medium,
                }}
              >
                {content.hero.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <h2
            className="text-3xl font-semibold tracking-tight md:text-4xl"
            style={{ fontFamily: brand.typography.heading }}
          >
            {content.about.title}
          </h2>

          <p
            className="mt-6 text-lg leading-8"
            style={{ color: brand.colors.muted }}
          >
            {content.about.text}
          </p>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
        style={{ backgroundColor: brand.colors.surface }}
      >
        <div className="mb-12">
          <h2
            className="text-3xl font-semibold tracking-tight md:text-4xl"
            style={{ fontFamily: brand.typography.heading }}
          >
            Nossos serviços
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {content.services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col p-6"
              style={{
                backgroundColor: brand.colors.background,
                borderRadius: brand.radius.large,
                boxShadow:
                  brand.visual.shadowStyle === "soft"
                    ? "0 10px 30px rgba(0,0,0,0.06)"
                    : "none",
              }}
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>

              <p
                className="mt-4 leading-7"
                style={{ color: brand.colors.muted }}
              >
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <p className="text-sm" style={{ color: brand.colors.muted }}>
            {content.footer.description}
          </p>

          <p className="mt-2 text-sm" style={{ color: brand.colors.muted }}>
            {siteConfig.location.city} — {siteConfig.location.state}
          </p>
        </div>
      </footer>
    </main>
  );
}