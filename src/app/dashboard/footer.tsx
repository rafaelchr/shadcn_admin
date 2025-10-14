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
    <footer className="border-t-3 border-[#c3d243] text-[#e5e3d4] mt-12 w-full flex flex-col items-end">
      <div className="flex flex-col gap-3 mt-5 px-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FILM.IO. All rights reserved.
        </p>
        <div className="flex flex-col gap-3 mb-6">
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
