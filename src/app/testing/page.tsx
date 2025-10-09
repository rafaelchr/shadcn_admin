"use client";

import Image from "next/image";

export default function ImageTestPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-semibold mb-6">Image Test Page</h1>

      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300 bg-white p-4">
        <Image
          src="/images/profile.png"
          alt="Test Image"
          width={236}
          height={236}
          className="rounded-lg object-cover"
          priority={true}
        />
      </div>

      <p className="mt-4 text-gray-700 text-sm">
        Jika gambar muncul, berarti konfigurasi Next Image sudah benar ✅
      </p>
    </div>
  );
}
