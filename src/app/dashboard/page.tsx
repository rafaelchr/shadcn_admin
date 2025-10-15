"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import MovieCard from "./movie-card";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });
// const ibmPlexSerif = IBM_Plex_Serif({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

const dummyMovies = [
  // Data dummy film
  {
    id: 1,
    title: "The Dark Knight Rises",
    rating: 4.8,
    thumbnail: "/images/login.png",
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

const items = [
  {
    title: "What is Film.io",
    content:
      "Film.io is a web-based platform that allows users to rate and review movies. It helps film enthusiasts share opinions, discover trending films, and make better viewing decisions based on community ratings.",
  },
  {
    title: "What are the services",
    content:
      "The platform offers several key features: movie rating and review submission, personalized recommendations, and detailed film information such as cast, genre, and release date. Users can also explore popular and top-rated films easily.",
  },
  {
    title: "Who made it",
    content:
      "Film.io was developed by a small independent team led by Rafael Manurung as part of a software engineering project, focusing on delivering a modern and responsive web experience for movie lovers.",
  },
  {
    title: "What technology is used",
    content:
      "The website is built using Next.js and Tailwind CSS for the frontend, integrated with a Spring Boot REST API as the backend service, ensuring fast performance and seamless data handling.",
  },
];

const FilmRatingPage = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className={
        inter.className +
        " min-h-screen bg-[#1d271c] flex flex-col text-[#e5e3d4] antialiased"
      }
    >
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
          <section className="mt-10">
            <h2
              className="text-2xl font-bold uppercase border-b-3 border-[#c3d243] pb-2"
              style={{ lineHeight: 1 }}
            >
              frequently asked questions
            </h2>
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 text-[#2D2D2F] items-start">
              {items.map((item, index) => (
                <div key={index} className="rounded-sm bg-[#e5e3d4] p-3">
                  <div
                    className={`flex w-full justify-between font-semibold ${
                      expandedIndex === index ? "mb-4" : ""
                    }`}
                  >
                    <div className="">{item.title}</div>
                    <motion.button
                      className="text-left font-semibold cursor-pointer"
                      onClick={() => toggleExpand(index)}
                      animate={{
                        rotate: expandedIndex === index ? 180 : 0,
                      }}
                    >
                      <ChevronDown></ChevronDown>
                    </motion.button>
                  </div>

                  <AnimatePresence initial={false}>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden text-sm text-[#3b3b3e]"
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default FilmRatingPage;
