import Markdown from "react-markdown";
import DetailSectionTitle from "@/components/ui/DetailSectionTitle";

type ProjectMarkdownSectionProps = {
  content: string;
}

export default function ProjectMarkdownSection({ content }: ProjectMarkdownSectionProps) {

  const matteredContnet = content.replace(/^---[\s\S]*?---/, "").trim();

  return (
    <section className="mb-12 sm:mb-24">
      <Markdown components={{
        h1: ({ children }) => (
          <DetailSectionTitle title={String(children)} />
        ),
        h2: ({ children }) => {
          const title = String(children);

          return (
            <div className={`
              ${title === "Problem" ? "mt-2" : "mt-8"}
              mb-2
              px-2
            `}>
              <h2 className="text-lg font-bold text-main-brown mb-2">
                {children}
              </h2>
              <div className="h-px bg-projectcard-border" />
            </div>
          );
        },
        p: ({ children }) => (
          <p className="text-sm sm:text-base mb-2 sm:mb-1 px-2 text-main-black/80">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc px-7 sm:space-y-2 marker:text-main-dark-brown">
            {children}
          </ul>
        ),
        li: ({ children }) => (
          <li className="text-sm sm:text-base relative leading-7 text-main-black/80">
            {children}
          </li>
        )
      }}>
        {matteredContnet}
      </Markdown>
    </section>
  );
}