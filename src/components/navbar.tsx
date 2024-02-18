import { LanguageContext } from "@/contexts/languageContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

interface HomeLogo {
  username: string;
}

interface LanguageContextProps {
  language: string;
  toggleLanguage: () => void;
}

const Navbar = ({ scrolls }: { scrolls: boolean }) => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const navMenu = [
    {
      projectKor: "프로젝트",
      projectEng: "PROJECT",
      link: "project",
    },
    {
      projectKor: "활동 내역",
      projectEng: "ACTIVITY",
      link: "activity",
    },
    {
      projectKor: "연락",
      projectEng: "CONTACT",
      link: "contact",
    },
  ];

  return (
    <nav
      className={`w-full p-10 flex justify-between items-center ${
        scrolls ? " hidden" : ""
      }`}
    >
      {/* 로고 및 포트폴리오 이름 */}
      {language === "kor" ? (
        <HomeLogo username="Poly's 이야기" />
      ) : (
        <HomeLogo username="Poly's Story" />
      )}
      {/* 페이지 이동 링크 */}
      <div className="flex flex-row ">
        <ul className=" list-none flex text-white font-semibold">
          {language === "kor"
            ? navMenu.map((menuData) => {
                return (
                  <Menu
                    menuName={menuData.projectKor}
                    linkName={menuData.link}
                    key={menuData.link}
                  />
                );
              })
            : navMenu.map((menuData) => {
                return (
                  <Menu
                    menuName={menuData.projectEng}
                    linkName={menuData.link}
                    key={menuData.link}
                  />
                );
              })}
        </ul>
        {/* 언어 변경 */}
        <LanguageChangeButton
          language={language}
          toggleLanguage={toggleLanguage}
        />
      </div>
    </nav>
  );
};

const LanguageChangeButton = ({
  language,
  toggleLanguage,
}: LanguageContextProps) => {
  return (
    <button
      className=" text-white font-semibold"
      type="button"
      onClick={toggleLanguage}
    >
      {language === "kor" ? (
        <span>Change Engilsh</span>
      ) : (
        <span>한국어로 변경하기</span>
      )}
    </button>
  );
};

const HomeLogo = ({ username }: HomeLogo) => {
  return (
    <Link href="/">
      <figure></figure>
      <figcaption className="text-[25px] text-white font-semibold">
        {username}
      </figcaption>
    </Link>
  );
};

interface MenuProp {
  linkName: string;
  menuName: string;
}

const Menu = ({ linkName, menuName }: MenuProp) => {
  const [path, setPath] = useState<string>();

  useEffect(() => {
    const current = window.location.href;
    const url = new URL(current);
    const path = url.pathname.slice(1);
    setPath(path);
  }, []);
  return (
    <Link href={linkName}>
      <div className="flex flex-col items-center pr-6">
        <li>{menuName}</li>
        {path && path === linkName ? (
          <div className=" top-[65%] absolute w-[6px] h-[6px] rounded-[50%] bg-[#F5DCB1] animate-ping opacity-100" />
        ) : null}
      </div>
    </Link>
  );
};

export default Navbar;
