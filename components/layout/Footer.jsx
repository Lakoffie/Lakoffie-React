import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#4b2e1e] text-white py-6">
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/logo-lakoffie.png"
          alt="Lakoffie Kopi Bubuk Murni"
          width={40}
          height={40}
        />
    <p className="bg-[#4b2e1f] text-amber-200">
      <div className="container mx-auto px-4 py-4 text-center text-sm tracking-wide">
        © 2026 | <span className="font-semibold">LAKOFFIE</span> | KOPI BUBUK MURNI
      </div>
    </footer>
  );
}
