"use client";
export default function Error({ reset }: { reset: () => void }) {
  return <div className="mx-auto max-w-xl px-4 py-24 text-center"><h1 className="text-2xl font-bold">Something went wrong</h1>
    <button onClick={reset} className="mt-6 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white">Try again</button></div>;
}
