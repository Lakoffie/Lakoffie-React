"use client";

export default function Hero() {
  return (
    <section className="py-16 text-center animate-fadeUp">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
        Selama Ini Kamu Kira Kopi Cuma Pahit?
      </h1>

      <p className="text-gray-700 max-w-2xl mx-auto mb-4">
        Faktanya, setiap kopi punya karakter rasa berbeda.
        Dari pahit beraroma gula jawa, body kental, asam elegan,
        hingga cold brew tanpa ampas.
      </p>

      <p className="text-gray-800 font-medium max-w-2xl mx-auto mb-8">
        Kalau kopi ternyata punya karakter rasa berbeda, kenapa harus puas sama yang biasa?
        <br />
        Ngopi ala café, harga bersahabat, rasa tetap berkelas.
      </p>

      <a
        href="https://wa.me/6285175285640"
        className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition"
      >
        ☕ Penasaran Rasanya? Tanya di WhatsApp
      </a>
    </section>
  );
}
