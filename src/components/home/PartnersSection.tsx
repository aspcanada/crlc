import { partners } from "@/data/home";

export function PartnersSection() {
  return (
    <section id="partners" className="border-t border-zinc-200 px-4 py-12 dark:border-zinc-800 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-10">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Program Partners
        </h2>
        {partners.map((partner) => (
          <div key={partner.name} className="space-y-3">
            {"url" in partner ? (
              <>
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline dark:text-emerald-400"
                  >
                    {partner.name}
                  </a>
                </h3>
                <p className="whitespace-pre-line text-zinc-700 dark:text-zinc-300">
                  {partner.description}
                </p>
                {"detail" in partner && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    —&gt; {partner.detail}
                  </p>
                )}
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                  {partner.name}
                </h3>
                {partner.items?.map((item) => (
                  <div key={item.name} className="space-y-2 pl-4 border-l-2 border-emerald-200 dark:border-emerald-800">
                    {"url" in item && item.url ? (
                      <h4 className="text-base font-medium">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:underline dark:text-emerald-400"
                        >
                          {item.name}
                        </a>
                      </h4>
                    ) : (
                      <h4 className="text-base font-medium text-zinc-800 dark:text-zinc-200">
                        {item.name}
                      </h4>
                    )}
                    <p className="whitespace-pre-line text-sm text-zinc-700 dark:text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
