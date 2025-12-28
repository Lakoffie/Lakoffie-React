import artikel from "../../../data/artikel";

export async function generateMetadata({ params }) {
  const data = artikel.find(a => a.slug === params.slug);

  return {
    title: data?.judul,
    description: data?.ringkas,
  };
}

export default function DetailArtikel({ params }) {
  const data = artikel.find(a => a.slug === params.slug);
  if (!data) return <p>Artikel tidak ditemukan</p>;

  return (
    <article className="prose max-w-3xl mx-auto">
      <h1>{data.judul}</h1>
      <p>{data.konten}</p>
    </article>
  );
}

