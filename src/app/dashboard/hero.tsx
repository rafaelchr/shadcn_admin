import { Inter } from "next/font/google";
import Image from "next/image";
import { renderStars } from "./movie-card";

const inter = Inter({ subsets: ["latin"] });

const Hero = () => {
  const dummyRatting: number = 2.5;

  return (
    <div className={inter.className + " text-[#e5e3d4]"}>
      <div className="w-full max-h-160 aspect-video rounded-xl group overflow-hidden hover:shadow-xl/30 duration-700">
        <Image
          src="/images/nysm.jpg"
          alt="anto"
          width={2000}
          height={2000}
          className="object-cover group-hover:scale-120 duration-700"
          priority
        ></Image>
      </div>
      <div className="mt-3">
        <div className="text-sm flex flex-col md:flex-row mt-5 gap-5 md:gap-10">
          <div className="w-full md:w-3/4">
            <div
              className="text-2xl font-bold uppercase"
              style={{ lineHeight: 1 }}
            >
              Now You See Me
            </div>
            <div className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              sequi officia, assumenda quia quis eaque! Possimus fugiat facere
              natus. Natus praesentium obcaecati enim placeat fugiat temporibus
              culpa. Alias, maxime. Asperiores fuga deleniti a obcaecati at
              accusantium quod aspernatur pariatur modi ratione laudantium
              doloremque earum mollitia tempore voluptatem quibusdam, quis
              quaerat.
            </div>
          </div>
          <div className="w-full md:w-1/4 bg-[#e5e3d4] text-[#2D2D2F] p-3 rounded-sm grid">
            <div className="text-sm uppercase mb-5 font-bold">Film Ratting</div>
            <div
              className="w-full flex items-center justify-between px-3 py-2 rounded-sm h-auto bg-[#2D2D2F]"
              style={{ lineHeight: 0 }}
            >
              <div className="flex space-x-1">{renderStars(dummyRatting)}</div>
              <span className="text-sm text-[#e5e3d4] ml-2">
                {dummyRatting.toFixed(1)}/5
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
