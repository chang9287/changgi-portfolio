import MyFace from "../../assets/images/my-face.png"

/* 타입 설정 */
type ProfileInfo = {
  title: string;
  text: string;
  href?: string;
};

type Keywords = {
  id: number;
  text: string;
};

/* 프로필 정보 */
const profileInfo: ProfileInfo[] = [
  { 
    title: "Email", 
    text: "ckdrl9287@gmail.com", 
    href: "mailto:ckdrl9287@gmail.com" 
  },
  { 
    title: "Github", 
    text: "chang9287", 
    href: "https://github.com/chang9287/" 
  },
  { 
    title: "Residence", 
    text: "Daejeon, South Korea" 
  }
]

/* 키워드 목록 */
const keywords: Keywords[] = [
  { id: 1, text: "성실함" },
  { id: 2, text: "배움에 대한 열정" },
  { id: 3, text: "호기심 많음" },
  { id: 4, text: "디테일 집착" },
  { id: 5, text: "책임감" }
]

/* Common Style */
const commonTextStyle = "block text-sm font-bold break-all";

export default function ProfileSection() {

  return(  
    <section>
      <div className="mx-4 flex flex-col gap-3">
        <p 
          className="flex items-center gap-3 before:content-[''] before:block before:w-9 before:h-px before:bg-main-brown text-main-brown"
        >
          FRONT-END DEVELOPER
        </p>
        <div className="py-2.5 px-7 flex flex-col gap-6">
          <div className="grid grid-cols-[180px_1fr] gap-10 items-center">
            <div className="flex justify-center items-center">
              <img 
                src={MyFace} 
                alt="프로필 이미지" 
                className="block w-40 h-52 object-cover rounded-3xl" 
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <h1 className="font-bold text-4xl">안창기</h1>
              <p className="text-profile-description">
                정보 구조와 UI 흐름을 고민하며, 사용자가 자연스럽게 이해할 수 있는 화면을 구현합니다.
              </p>
              <div className="grid grid-cols-3 gap-3 mt-4">
                {profileInfo.map((info) => (
                  <div className="flex flex-col gap-1.5 px-4 py-3.5 border border-profile-info-border bg-profile-info-bg rounded-2xl">
                    <span className="text-xs font-semibold text-profile-info-title">
                      {info.title}.
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${commonTextStyle}`}
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className={`${commonTextStyle}`}>
                        {info.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ul className="flex gap-3">
            {keywords.map((keyword) => (
              <li
                key={keyword.id}
                className="bg-profile-keywords-bg px-3 py-1.5 text-main-brown rounded-2xl text-xs"
              >
                #{keyword.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}