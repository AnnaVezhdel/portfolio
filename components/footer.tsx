import React from "react";

export default function Footer() {
  return (
    <footer className="p-6 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        Copyright &copy; 2026. All rights reserved. Developed by Anna Vezhdel
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion, Vercel
        hosting.
      </p>
    </footer>
  );
}
