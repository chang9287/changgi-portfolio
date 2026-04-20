import { useState } from "react";
import KakaoModal from "../ui/KakaoModal";

type FooterContactProps = {
  className?: string;
}
type iconStylesType = {
  icon: string;
  href?: string;
  liClass: string;
  aClass: string;
  iClass: string;
  isExternal?: boolean;
  onClick?: () => void;
}

export default function FooterContact({ className }: FooterContactProps ) {
  /* Common Style */
  const commonIconStyle = "border w-12 h-12 rounded-full flex justify-center items-center cursor-pointer transition duration-200";
  
  const [isOpen, setIsOpen] = useState(false);

  const iconStyles: iconStylesType[] = [
    {
      icon: "xi-mail",
      href: "mailto:ckdrl9287@gmail.com",
      liClass: "group hover:bg-icon-mail-hover-bg hover:border-icon-mail-hover-bg",
      aClass: "w-full h-full flex items-center justify-center",
      iClass: "text-2xl group-hover:text-white transition duration-200",
    },
    {
      icon: "xi-call",
      href: "tel:01088809287",
      liClass: "group hover:bg-icon-call-hover-bg hover:border-icon-call-hover-bg",
      aClass: "w-full h-full flex items-center justify-center",
      iClass: "text-2xl group-hover:text-white transition duration-200",
    },
    {
      icon: "xi-github",
      href: "https://github.com/chang9287",
      liClass: "group hover:bg-icon-github-hover-bg hover:border-icon-github-hover-bg",
      aClass: "w-full h-full flex items-center justify-center",
      iClass: "text-2xl group-hover:text-icon-github-hover transition duration-200",
      isExternal: true
    },
    {
      icon: "xi-kakaotalk",
      onClick: () => setIsOpen(true),
      liClass: "group hover:bg-icon-kakao-hover-bg hover:border-icon-kakao-hover-bg",
      aClass: "w-full h-full flex items-center justify-center",
      iClass: "text-2xl group-hover:text-icon-kakao-hover transition duration-200",
    }
  ]

  return (
    <>
      {/* FooterContact */}
      <ul className={`flex gap-3 justify-center items-center mr-5 ${className}`}>
        {iconStyles.map((icon, index) => (
          <li
            key={index}
            className={`${icon.liClass} ${commonIconStyle}`}
            onClick={icon.onClick}
          >
            {icon.href ? (
              <a
                href={`${icon.href}`}
                target={icon.isExternal ? "_blank" : undefined}
                rel={icon.isExternal ? "noopener noreferrer" : undefined}
                className={`${icon.aClass}`}
              >
                <i className={`${icon.icon} ${icon.iClass}`}></i>
              </a>
            ) : (
              <i className={`${icon.icon} ${icon.iClass}`}></i>
            )}
          </li>
        ))}
      </ul>

      {/* Kakao-Modal */}
      {isOpen && (
        <KakaoModal onClose={() => setIsOpen(false)} />
      )}

    </>
    
  );
}