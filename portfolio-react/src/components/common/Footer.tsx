import FooterContact from "../parts/FooterContact";

export default function Footer() {
  return (
    <footer className="py-4 md:py-0 w-full min-h-16 md:h-16 flex flex-col-reverse gap-3 justify-center items-center md:relative">
      <p className="lg:text-xl font-light text-gray-400 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 px-2 md:px-0">
        © 2026 Chang-gi. All rights reserved.
      </p>
      <FooterContact className="self-end md:ml-auto md:z-20" />
    </footer>
  );
}