export default function Section({ id, title, children, className = "" }: { id?: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-12 ${className}`}>
      <h2 className="mb-6 text-2xl font-bold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
