type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  badge?: string;
};

export default function ServiceCard({ title, description, imageSrc, badge }: ServiceCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-18px_rgba(15,23,42,0.25)] transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-[0_24px_60px_-18px_rgba(245,158,11,0.35)]">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="mb-4 h-40 w-full rounded-2xl object-cover"
        />
      ) : null}
      {badge ? <span className="mb-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">{badge}</span> : null}
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600">{description}</p>
    </article>
  );
}
