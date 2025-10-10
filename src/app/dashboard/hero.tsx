import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className={inter.className + " px-15"}>
      <Image
        src="/images/nysm.jpg"
        alt="anto"
        width={2000}
        height={2000}
        className="object-cover object-top aspect-video w-full h-160"
        priority
      ></Image>
      <div className="mt-2">
        <div className="text-2xl font-black uppercase">Now You See Me</div>
        <div className="text-sm flex">
          <div className="w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi
            officia, assumenda quia quis eaque! Possimus fugiat facere natus.
            Natus praesentium obcaecati enim placeat fugiat temporibus culpa.
            Alias, maxime. Asperiores fuga deleniti a obcaecati at accusantium
            quod aspernatur pariatur modi ratione laudantium doloremque earum
            mollitia tempore voluptatem quibusdam, quis quaerat.
          </div>
          <div className="w-1/5">FilmRatingPage</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
