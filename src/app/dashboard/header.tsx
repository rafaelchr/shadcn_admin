import { Inter, IBM_Plex_Serif } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/dashboard" },
    { name: "Top Rated", href: "#" },
    { name: "Genres", href: "#" },
    { name: "Login", href: "/login" },
  ];

  return (
    <header className={inter.className + ` text-[#e5e3d4] py-4`}>
      <div className="flex justify-between font-bold py-1 px-1">
        <div
          className={
            ibmPlexSerif.className +
            " text-[#2D2D2F] text-xl bg-[#e5e3d4] px-4 py-2 rounded-sm"
          }
          style={{ lineHeight: 1 }}
        >
          FILM.IO
        </div>

        <div className="flex gap-10 items-center">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm uppercase font-semibold hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-extrabold text-indigo-400 tracking-wider transition duration-300 transform hover:text-indigo-300 hover:scale-105">
              FILM.IO
            </a>
          </div>

          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200 ease-in-out"
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={() => alert('Logging out...')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Logout
            </button>
          </nav>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
