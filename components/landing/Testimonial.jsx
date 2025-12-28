"use client";

export default function Testimonial() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-10">
        Apa Kata Mereka?
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-sm mb-3">
            “Kirain kopi bubuk ya pahit aja. Yang Temanggung aromanya beda.”
          </p>
          <span className="font-semibold">Andi – Salatiga</span>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-sm mb-3">
            “Arabika Salatiganya asamnya pas, mirip kopi café.”
          </p>
          <span className="font-semibold">Rina – Semarang</span>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-sm mb-3">
            “Kopi celupnya praktis banget buat es kopi susu.”
          </p>
          <span className="font-semibold">Dimas – Jakarta</span>
        </div>
      </div>
    </section>
  );
}
