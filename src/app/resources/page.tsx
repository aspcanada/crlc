import type { Metadata } from "next";
import { ResourcesGate } from "./ResourcesGate";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Resources — CRLC",
  description:
    "Registered families: access program materials, handbooks, and contact information.",
};

export default function ResourcesPage() {
  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <ResourcesGate />
      </div>
    </div>
  );
}
