import { useEffect, useRef, useState } from "react";
import { Triangle } from 'lucide-react';
import type { Project } from "@/types/project";
import DetailSectionTitle from "@/components/ui/DetailSectionTitle";

type ProjectPreviewSectionProps = {
  project: Project;
}

/* max-height Style */
const previewContainerHeight = "max-h-[380px] sm:max-h-[480px] lg:max-h-[600px]";
const previewImageHeight = "max-h-[350px] sm:max-h-[450px] lg:max-h-[570px]";

export default function ProjectPreviewSection({ project }: ProjectPreviewSectionProps) {
  const [openPreview, setOpenPreview] = useState<string | null>(null);
  const previewRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handlePreviewToggle = (previewId: string) => {
    if(openPreview === previewId){
      setOpenPreview(null)
    } else {
      setOpenPreview(previewId)
    }
  }

  useEffect(() => {
    if(!openPreview) return;

    previewRefs.current[openPreview]?.scrollTo({
      top: 0,
    });
  }, [openPreview])

  return (
    <section className="flex flex-col gap-2">
      <DetailSectionTitle title="Full Page Preview" />

      <div className="px-2 flex flex-col gap-2 sm:gap-4">
        {project.previews.map((preview) => {
          const isOpen = openPreview === preview.id;

          return (
            <div key={preview.id} className="border bg-projectdetail-preview-bg border-projectdetail-preview-border rounded-2xl">
              <button 
                className="flex items-center gap-2.5 w-full cursor-pointer p-5 sm:py-4.5 outline-none"
                onClick={() => handlePreviewToggle(preview.id)}
              >
                <span>
                  <Triangle 
                    size={12} 
                    fill="var(--color-projectdetail-preview-icon)" 
                    color="var(--color-projectdetail-preview-icon)"
                    className={`transition-all duration-300 ${isOpen ? "rotate-180" : "rotate-90"}`}
                  />
                </span>
                <h1 className="text-main-black/80 font-semibold text-sm sm:text-base">{preview.title} 미리보기</h1>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isOpen ? previewContainerHeight : "max-h-0" }`}>
                <div className="px-5 pb-5 sm:pb-6">
                  <div 
                    ref={(el) => {
                      previewRefs.current[preview.id] = el;
                    }}
                    className={`overflow-y-auto pr-2 ${previewImageHeight}`}
                  >
                    <img 
                      src={preview.image} 
                      alt={preview.title} 
                      className="block w-full border border-projectdetail-preview-border rounded-2xl" 
                      style={{boxShadow: "0 2px 2px rgba(0,0,0,0.04)"}}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}