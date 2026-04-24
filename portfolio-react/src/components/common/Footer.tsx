import FooterContact from "../parts/FooterContact";

export default function Footer() {
  return (
    <footer className="w-full h-16 flex justify-center relative">
      <p className="text-xl font-light text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        © 2026 Chang-gi. All rights reserved.
      </p>
      <FooterContact className="ml-auto z-20" />
    </footer>
  );
}