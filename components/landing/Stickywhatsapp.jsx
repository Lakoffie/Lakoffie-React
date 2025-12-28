export default function StickyWhatsapp() {
  return (
    <a
      href="https://wa.me/62XXXXXXXXXX"
      target="_blank"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition"
      aria-label="Chat WhatsApp"
    >
      <span className="text-xl">💬</span>
      <span className="hidden md:inline font-semibold">
        Chat WhatsApp
      </span>
    </a>
  );
}
