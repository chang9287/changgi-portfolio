import { FormSection, InfoSection } from "../sections/contact";

export default function Contact() {
  return (
    <main className="min-h-[calc(100vh-64px-64px)] flex flex-col items-center justify-center bg-main-bg px-6 py-12">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
        <FormSection />
        <InfoSection />
      </div>
    </main>
  );
}