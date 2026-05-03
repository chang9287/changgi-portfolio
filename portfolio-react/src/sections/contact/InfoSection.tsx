import { Link } from "lucide-react";

type ContactList = {
  title: string;
  text: string;
  href: string;
  isExternal?: boolean;
}

export default function InfoSection() {
  const contactList: ContactList[] = [
    {
      title: "Email",
      text: "ckdrl9287@gmail.com",
      href: "mailto:ckdrl9287@gmail.com"
    },
    {
      title: "GitHub",
      text: "github.com/chang9287",
      href: "https://github.com/chang9287",
      isExternal: true
    },
    {
      title: "Phone",
      text: "010-8880-9287",
      href: "tel:010-8880-9287"
    },
  ]

  return (
    <section>
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-3 pb-10">
          <h1 className="text-3xl font-bold">봐주셔서 감사합니다.</h1>
          <p className="text-sub-black">
            정보 구조와 사용자 흐름을 고민하며, 더 직관적인 경험을 만드는 개발자입니다.<br/>
            함께 멋진 서비스를 만들어가고 싶습니다!
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          {contactList.map((list) => (
            <li 
              key={list.title} 
              className="bg-white border border-contact-form-border p-5 rounded-xl flex
              flex-col gap-1.5"
            >
              <span className="text-sm text-sub-gray">{list.title}</span>
              <div className="flex items-center justify-between">
                <a 
                  href={list.href}
                  className="self-start font-bold text-main-black  hover:text-sub-gray hover:translate-x-1 transition duration-200"
                  target={list.isExternal ? "_blank" : undefined}
                  rel={list.isExternal ? "noopener noreferrer" : undefined}
                >
                  {list.text}
                </a>
                <span className="flex justify-center items-center">
                  <Link size={12} className="text-sub-gray"/>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}