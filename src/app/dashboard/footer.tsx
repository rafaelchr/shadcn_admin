// src/components/Footer.js

import Link from "next/link";

// Komponen Footer
const Footer = () => {
  const footerLinks = [
    { name: "About", href: "#" },
    { name: "Help", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-[#2D2D2F] rounded-xl py-10 text-[#e5e3d4] mt-12 mb-8 w-full flex flex-col items-center md:items-end">
      <div className="flex flex-col gap-3 px-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FILM.IO. All rights reserved.
        </p>
        <div className="flex flex-col gap-3">
          {footerLinks.map((link) => (
            <Link className="text-sm hover:underline" key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
