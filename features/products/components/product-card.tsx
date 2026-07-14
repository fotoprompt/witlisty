interface ProductCardProps {
  name: string;
  design: boolean;
  previews: number;
  assets: boolean;
}

export function ProductCard({
  name,
  design,
  previews,
  assets,
}: ProductCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-bold">{name}</h2>

      <div className="mt-4 space-y-2 text-sm">
        <p>Design: {design ? "✅" : "❌"}</p>

        <p>Previews: {previews}</p>

        <p>Assets: {assets ? "✅" : "❌"}</p>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="rounded-lg bg-violet-600 px-4 py-2">
          TeePublic
        </button>

        <button className="rounded-lg border border-zinc-700 px-4 py-2">
          Etsy Digital
        </button>
      </div>
    </div>
  );
}