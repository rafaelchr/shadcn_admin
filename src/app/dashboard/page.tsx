"use client";

import { IBM_Plex_Serif, Inter } from "next/font/google";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import MovieCard from "./movie-card";

const inter = Inter({ subsets: ["latin"] });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dummyMovies = [
  // Data dummy film
  {
    id: 1,
    title: "The Dark Knight Rises",
    rating: 4.8,
    thumbnail: "/images/profile.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis odio error voluptates magnam suscipit neque illum ipsum veritatis ab!",
  },
  {
    id: 2,
    title: "Interstellar",
    rating: 4.6,
    thumbnail: "/images/profile.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis odio error voluptates magnam suscipit neque illum ipsum veritatis ab!",
  },
  {
    id: 3,
    title: "Pulp Fiction",
    rating: 4.4,
    thumbnail: "/images/profile.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis odio error voluptates magnam suscipit neque illum ipsum veritatis ab!",
  },
  {
    id: 4,
    title: "Inception",
    rating: 2.3,
    thumbnail: "/images/profile.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis odio error voluptates magnam suscipit neque illum ipsum veritatis ab!",
  },
  {
    id: 5,
    title: "The Matrix",
    rating: 4.5,
    thumbnail: "/images/profile.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis odio error voluptates magnam suscipit neque illum ipsum veritatis ab!",
  },
  {
    id: 6,
    title: "Parasite",
    rating: 4.3,
    thumbnail: "/images/profile.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis odio error voluptates magnam suscipit neque illum ipsum veritatis ab!",
  },
  {
    id: 7,
    title: "Forrest Gump",
    rating: 4.9,
    thumbnail: "/images/profile.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis odio error voluptates magnam suscipit neque illum ipsum veritatis ab!",
  },
  {
    id: 8,
    title: "The Godfather",
    rating: 5.0,
    thumbnail: "/images/profile.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis odio error voluptates magnam suscipit neque illum ipsum veritatis ab!",
  },
];

const FilmRatingPage = () => {
  return (
    <div className={inter.className + " min-h-screen bg-[#354d30] text-[#e5e3d4] antialiased"}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="">
          <Hero />
          <section className="mt-10">
            <h2
              className="text-2xl font-bold uppercase border-b-3 border-[#c3d243] pb-2"
              style={{ lineHeight: 1 }}
            >
              Trending Movies
            </h2>
            <div className="grid gap-6 mt-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dummyMovies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    rating={movie.rating}
                    description={movie.description}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default FilmRatingPage;
