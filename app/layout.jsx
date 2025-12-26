import "./globals.css";
import "./styles/design-system.css";

import Navbar from "./components/Navbar";

export const metadata = {
  title: "Lakoffie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
