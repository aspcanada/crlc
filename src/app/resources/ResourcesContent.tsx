import {
  resourcesLinks,
  educatorContacts,
  societyContacts,
} from "@/data/resources";

function getAccessCode(key: string): string | null {
  if (typeof process.env[key] === "string") return process.env[key] ?? null;
  return null;
}

export function ResourcesContent() {
  const crcAccessCode = getAccessCode("CRC_ACCESS_CODE");

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Registered Families Resource Page
        </h1>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          This page is for currently enrolled families of the Cottonwood Rose
          Learning Community. Below you&apos;ll find quick links to essential
          tools, shared spaces, and contact information for the program.
        </p>
      </div>

      <section className="space-y-6">
        {resourcesLinks.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-700 dark:bg-zinc-900/50"
          >
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {item.title}
            </h2>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
              {item.description}
            </p>
            <div className="mt-2">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-700 hover:underline dark:text-emerald-400"
              >
                {item.label}
              </a>
              {item.accessCodeEnvKey && crcAccessCode && (
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Access Code: <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-700">{crcAccessCode}</code>
                </p>
              )}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
          Contact Information
        </h2>
        <h3 className="mt-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
          Educator Contacts
        </h3>
        <ul className="mt-2 space-y-3">
          {educatorContacts.map((c) => (
            <li
              key={c.name}
              className="rounded border border-zinc-200 p-3 dark:border-zinc-700"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                {c.name}
              </span>
              {" – "}
              <span className="text-zinc-700 dark:text-zinc-300">{c.role}</span>
              <ul className="mt-1 space-y-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                {c.phone && <li>📞 {c.phone}</li>}
                <li>
                  ✉️{" "}
                  <a
                    href={`mailto:${c.email}`}
                    className="text-emerald-700 hover:underline dark:text-emerald-400"
                  >
                    {c.email}
                  </a>
                </li>
                {c.note && <li>💬 {c.note}</li>}
              </ul>
            </li>
          ))}
        </ul>
        <h3 className="mt-6 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
          Society Contacts
        </h3>
        <ul className="mt-2 space-y-3">
          {societyContacts.map((c) => (
            <li
              key={c.name}
              className="rounded border border-zinc-200 p-3 dark:border-zinc-700"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                {c.name}
              </span>
              {" – "}
              <span className="text-zinc-700 dark:text-zinc-300">{c.role}</span>
              <br />
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {c.org}
              </span>
              <ul className="mt-1 space-y-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                {c.phone && <li>📞 {c.phone}</li>}
                <li>
                  📧 Email:{" "}
                  <a
                    href={`mailto:${c.email}`}
                    className="text-emerald-700 hover:underline dark:text-emerald-400"
                  >
                    {c.email}
                  </a>
                </li>
                <li>🌐 Website: {c.website}</li>
                <li>📍 {c.address}</li>
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
