import "./mitra.css"
import Footer from "../../components/Footer"

export default function MitraPage() {
  return (
    <>
      <main className="mitra-page">

        {/* HEADER */}
        <section className="mitra-header">
          <h1>Mitra Resmi Lakoffie</h1>
          <p>
            Temukan mitra penjualan Lakoffie,
            online maupun offline di berbagai daerah.
          </p>
        </section>

        {/* CONTENT */}
        <section className="mitra-content">

          <h2>Mitra Online</h2>

          <div className="mitra-grid">
            {["Facebook", "Instagram", "TikTok", "Shopee", "Tokopedia", "TikTok Shop"]
              .map(item => (
                <div key={item} className="mitra-card">
                  <span>{item}</span>
                  <a href="#">Kunjungi</a>
                </div>
              ))}
          </div>

          <div className="mitra-offline">
            <div className="mitra-offline-card">
              <h3>Official Store Lakoffie</h3>
              <p>Kunjungi official store resmi kami.</p>
              <a href="https://maps.google.com" target="_blank" className="mitra-btn">
                Google Maps
              </a>
            </div>

            <div className="mitra-offline-card">
              <h3>Mitra Terdekat</h3>
              <p>Lihat mitra Lakoffie di kotamu.</p>
              <a href="/mitra/daftar" className="mitra-btn">
                Daftar Mitra
              </a>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </>
  )
}
