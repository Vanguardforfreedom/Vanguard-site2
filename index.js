import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function VanguardForFreedom() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <header className="p-6 border-b border-gray-800 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vanguard for Freedom</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#content" className="hover:text-red-500">Content</a>
          <a href="#merch" className="hover:text-red-500">Merch</a>
        </nav>
      </header>

      <main className="px-6 py-10 space-y-20">
        {/* About Section */}
        <section id="about" className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to <strong>Vanguard for Freedom</strong> — a conservative political channel
            championing liberty, tradition, and American values. We tackle the issues others won't,
            bringing truth and clarity to the conversation.
          </p>
        </section>

        {/* Content Section */}
        <section id="content" className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Content</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <Card key={id} className="bg-gray-900">
                <CardContent className="p-0">
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0`}
                    title="Vanguard Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Merch Section */}
        <section id="merch" className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Merch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["T-Shirt", "Hat", "Sticker"].map((item) => (
              <Card key={item} className="bg-gray-900">
                <CardContent className="p-4">
                  <div className="h-40 bg-gray-800 mb-4 rounded"></div>
                  <h3 className="text-xl font-medium mb-2">{item}</h3>
                  <Button className="bg-red-600 hover:bg-red-700">Buy Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="p-6 text-center border-t border-gray-800 text-gray-400">
        © {new Date().getFullYear()} Vanguard for Freedom. All rights reserved.
      </footer>
    </div>
  );
}
