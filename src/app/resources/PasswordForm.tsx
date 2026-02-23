"use client";

import { useActionState } from "react";
import { submitResourcesPassword } from "./resources-auth";

type State = { error?: string } | null;

export function PasswordForm() {
  const [state, formAction] = useActionState<State, FormData>(
    async (_prev: State, formData: FormData) => {
      const result = await submitResourcesPassword(formData);
      return result ?? null;
    },
    null
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        Registered Families Resource Page
      </h1>
      <p className="text-zinc-700 dark:text-zinc-300">
        This page is for currently enrolled families of the Cottonwood Rose
        Learning Community. Enter the password shared with your family to
        continue.
      </p>
      <form action={formAction} className="space-y-4">
        <label htmlFor="resources-password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Password
        </label>
        <input
          id="resources-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50"
        />
        {state?.error && (
          <p className="text-sm text-red-600 dark:text-red-400" role="alert">
            {state.error}
          </p>
        )}
        <button
          type="submit"
          className="rounded-full bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-500 dark:hover:bg-emerald-600"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
