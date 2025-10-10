"use client"

import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import MovieCard from "./movie-card";

const dummyMovies = [
  // Data dummy film
  {
    id: 1,
    title: "The Dark Knight Rises",
    rating: 4.8,
    thumbnail: "/images/profile.png",
  },
  {
    id: 2,
    title: "Interstellar",
    rating: 4.6,
    thumbnail: "/images/profile.png",
  },
  {
    id: 3,
    title: "Pulp Fiction",
    rating: 4.4,
    thumbnail: "/images/profile.png",
  },
  {
    id: 4,
    title: "Inception",
    rating: 2.3,
    thumbnail: "/images/profile.png",
  },
  {
    id: 5,
    title: "The Matrix",
    rating: 4.5,
    thumbnail: "/images/profile.png",
  },
  {
    id: 6,
    title: "Parasite",
    rating: 4.3,
    thumbnail: "/images/profile.png",
  },
  {
    id: 7,
    title: "Forrest Gump",
    rating: 4.9,
    thumbnail: "/images/profile.png",
  },
  {
    id: 8,
    title: "The Godfather",
    rating: 5.0,
    thumbnail: "/images/profile.png",
  },
];

const FilmRatingPage = () => {
  return (
    // Menggunakan font sans-serif default Tailwind dan warna gelap
    <div className="min-h-screen bg-[#E4E2CE] antialiased max-w-7xl">
      {/* Header Komponen */}
      <Header />

      {/* Konten Utama */}
      <main>
        {/* Hero Section Komponen */}
        <Hero />

        {/* Daftar Film */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-indigo-500 pl-3">
            Trending Movies
          </h2>

          {/* Grid Responsif Film */}
          <div className="grid gap-6">
            {/* Konfigurasi Grid Responsif: 
                - Mobile (default): 1 kolom
                - Tablet (sm:): 2 kolom
                - Desktop (lg:): 3 kolom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {dummyMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  thumbnail={movie.thumbnail}
                  title={movie.title}
                  rating={movie.rating}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Komponen */}
      <Footer />

      {/* Tambahkan gaya animasi sederhana (optional, bisa di global CSS atau file terpisah) */}
      <style jsx global>{`
        /* Animasi pulse lambat untuk tombol Hero */
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default FilmRatingPage;
