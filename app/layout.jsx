import "./globals.css";
import "./styles/design-system.css";
import "./styles/mitra.css";

export const metadata = {
  title: "Lakoffie",
  description: "Kopi lokal berkualitas"
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="pt-16">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
