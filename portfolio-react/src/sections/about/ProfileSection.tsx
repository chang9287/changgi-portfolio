import MyFace from "../../assets/images/my-face.png"

/* 타입 설정 */
type ProfileInfo = {
  title: string;
  text: string;
  href?: string;
};

type Keywords = {
  id: number;
  keyword: string;
};

/* 프로필 정보 */
const profileInfo: ProfileInfo[] = [
  { title: "Name", text: "안창기" },
  { title: "Email", text: "ckdrl9287@gmail.com", href: "mailto:ckdrl9287@gmail.com" },
  { title: "Github", text: "chang9287", href: "https://github.com/chang9287/" },
  { title: "Residence", text: "Daejeon, South Korea" }
]

/* 키워드 목록 */
const keywords: Keywords[] = [
  { id: 1, keyword: "성실함" },
  { id: 2, keyword: "배움에 대한 열정" },
  { id: 3, keyword: "호기심 많음" },
  { id: 4, keyword: "디테일 집착" },
  { id: 5, keyword: "책임감" }
]

export default function ProfileSection() {
  const commonTextStyle = "text-2xl text-main-black";

  return(  
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="w-48 h-64 border-2 rounded-4xl border-main-brown overflow-hidden">
            <img 
              src={MyFace}
              alt="프로필 이미지" 
              className="block w-full h-full object-cover"
            />
          </div>
          <ul className="flex flex-col gap-3">
            {profileInfo.map((info) => (
              <li key={info.title} className="flex gap-4">
                <span className="font-bold text-2xl text-main-black">
                  {info.title}.
                </span>

                {info.href ? (
                  <a 
                    href={info.href} 
                    rel="noopener noreferrer" 
                    target="_blank"
                    className={`transition duration-100 hover:text-profile-text-hover hover:underline ${commonTextStyle}`}
                  >
                    {info.text}
                  </a>
                ) : (
                  <span className={`${commonTextStyle}`}>{info.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex gap-4 justify-center flex-wrap">
          {keywords.map((item) => (
            <li
              key={item.id}
              className="border border-main-brown text-main-brown px-3.5 py-1.5   rounded-2xl"
            >
              #{item.keyword}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}