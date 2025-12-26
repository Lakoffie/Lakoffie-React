import "./mitra.css"

export default function MitraPage() {
  return (
    <main className="mitra-page">

      {/* HERO */}
      <section className="mitra-hero">
        <h1>Mitra Resmi Lakoffie</h1>
        <p>
          Temukan official store dan mitra penjualan Lakoffie,
          baik online maupun offline di daerahmu.
        </p>
      </section>

      {/* ONLINE */}
      <section className="mitra-section">
        <h2>Mitra Online</h2>

        <div className="mitra-grid">
          {[
            "Facebook",
            "Instagram",
            "TikTok",
            "Shopee",
            "Tokopedia",
            "TikTok Shop"
          ].map((item) => (
            <div key={item} className="mitra-card">
              <span>{item}</span>
              <a href="#">Kunjungi</a>
            </div>
          ))}
        </div>
      </section>

      {/* OFFLINE */}
      <section className="mitra-offline">
        <div className="mitra-offline-card">
          <h3>Official Store Lakoffie</h3>
          <p>
            Kunjungi official store Lakoffie untuk mendapatkan
            produk asli dan terjamin kualitasnya.
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            className="btn-primary"
          >
            Buka Google Maps
          </a>
        </div>

        <div className="mitra-offline-card">
          <h3>Mitra Terdekat</h3>
          <p>
            Cari mitra Lakoffie di berbagai kota terdekat
            dengan lokasimu.
          </p>
          <a href="/mitra/daftar" className="btn-primary">
            Lihat Daftar Mitra
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="mitra-cta">
        <h2>Ingin Menjadi Mitra Lakoffie?</h2>
        <p>Bergabunglah bersama jaringan mitra Lakoffie.</p>
        <a href="/kontak" className="btn-secondary">
          Daftar Mitra
        </a>
      </section>

    </main>
  )
}
