import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-10">
      <div className="flex flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between max-w-6xl mx-auto pb-6 border-b border-gray-800">
        <p className="text-md text-center sm:text-left">
          &copy; {new Date().getFullYear()} TPL ISSATSO. All Rights Reserved.
        </p>
        <div className="flex space-x-5">
          <a
            href="https://www.facebook.com/profile.php?id=61566916355044&locale=fr_FR"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <Facebook size={27} />
          </a>
          <a
            href="https://www.instagram.com/tpl_issatso/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <Instagram size={27} />
          </a>
          <a
            href="https://www.linkedin.com/company/tpl-issatso-club"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            <Linkedin size={27} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-center py-6 text-sm">
        <span>
          Developed by Wassim Gueddari{' '}
          <a
            href="https://www.linkedin.com/in/wassim-gueddari/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ml-1 hover:text-sky-400"
          >
            <Linkedin size={18} className="inline align-middle" />
          </a>
        </span>
      </div>
    </footer>
  );
}
