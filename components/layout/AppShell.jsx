"use client";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import StickyWhatsapp from "../StickyWhatsapp.jsx";

export default function AppShell({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
        <StickyWhatsapp />
      </main>

      <Footer />
    </div>
  );
}
