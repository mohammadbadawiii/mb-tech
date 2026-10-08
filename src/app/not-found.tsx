import Link from "next/link";
export default function NotFound() {
  return <div className="mx-auto max-w-xl px-4 py-24 text-center"><h1 className="text-3xl font-bold">Page not found</h1>
    <Link href="/shop" className="mt-6 inline-block rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white">Back to shop</Link></div>;
}
