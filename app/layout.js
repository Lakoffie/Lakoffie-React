import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyWhatsapp from "@/components/StickyWhatsapp";

export const metadata = {
  title: "Lakoffie | Kopi Bubuk dengan Karakter Rasa Berbeda",
  description:
    "Lakoffie menghadirkan kopi bubuk lokal dengan karakter rasa unik. Dari pahit beraroma gula jawa, body kental, hingga asam elegan ala café.",
  keywords: [
    "kopi bubuk",
    "kopi robusta",
    "kopi temanggung",
    "kopi lampung",
    "kopi salatiga",
    "kopi gula jawa",
    "kopi lokal",
  ],
  openGraph: {
    title: "Lakoffie | Kopi Bubuk Lokal Rasa Ala Café",
    description:
      "Ngopi ala café dengan harga bersahabat. Kopi bubuk Lakoffie hadir dengan karakter rasa berbeda.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1 container mx-auto px-4 py-6">
          {children}
        <StickyWhatsapp />
    </main>
    <Footer />
      </body>
    </html>
  );
}
