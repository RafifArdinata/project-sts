import { useState } from "react";
import { Button } from "@/components/ui/button";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimony from "./pages/Testimony";
import Faq from "./pages/Faq"; 

export default function App() {
  const [activeTab, setActiveTab] = useState("FAQ");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        {/* header*/}
        <div className="mx-auto flex max-w-7xl justify-between px-5 py-6">
          {/*  logo euyyy   */}
          <div className="text-3xl font-bold ">Logo</div>

          {/* Jarak antar menu biar gak mepet amat */}
          <nav className="flex space-x-10 text-lg font-medium">
            {["Home", "About", "Testimony", "FAQ"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`transition-colors ${
                  activeTab === tab
                    ? "font-bold text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
          <Button variant="default" size="lg" className="px-6 py-3 text-lg font-semibold">
            Sign In
          </Button>
        </div>
      </header>

      {/* tempat Kontener */}
      <main className="mx-auto max-w-7xl px-8 py-12">
        {activeTab === "Home" && <Home />}
        {activeTab === "About" && <About />}
        {activeTab === "Testimony" && <Testimony />}
        {activeTab === "FAQ" && <Faq />}
      </main>
    </div>
  );
}