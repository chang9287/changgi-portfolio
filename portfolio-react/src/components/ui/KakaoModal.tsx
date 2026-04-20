import { useEffect } from "react";
import kakaoOpenTalk from "../../assets/images/Open-kakaoTalk.jpg";
import { X } from "lucide-react" ;

type KakaoModalProps = {
  onClose: () => void;
}

export default function KakaoModal({ onClose }: KakaoModalProps) {
  /* 모달창 스크롤 제어 */
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  /* 모달창 */
  return (
    <div className="z-[9000] fixed top-0 left-0 w-full h-full bg-gray-300/80 flex justify-center items-center">
      <div className="flex justify-center items-center max-w-[280px] w-full bg-white border-8 border-icon-kakao-hover-bg aspect-square relative rounded-2xl">
        <img
          className="max-w-[250px] w-full aspect-square rounded-2xl"
          src={kakaoOpenTalk} 
          alt="kakao-Opentalk"
        />
        <div className="absolute top-0.5 right-0.5 flex justify-center items-center">
          <X
            size={32}
            strokeWidth={3}
            className="xi-close cursor-pointer text-gray-500/70 hover:text-main-black transition duration-300 hover:scale-105" 
            onClick={onClose} 
          />
        </div>
      </div>
    </div>
  );
}