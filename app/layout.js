import "./globals.css";

export const metadata = {
  title: "Lakoffie | Kopi Bubuk dengan Karakter Rasa Berbeda",
  description:
    "Lakoffie menghadirkan kopi bubuk lokal dengan karakter rasa unik.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
