import { NextApiResponse } from "next";
import { ProjectData } from "@/types";

const handler = (res: NextApiResponse) => {
  const projectData: ProjectData[] = [
    {
      title: "Camplus",
      intro: "대학생 도움 홈페이지",
      skill: [
        "React",
        "JavaScript",
        "Tailwindcss",
        "Redux Tool Kit",
        "EC2",
        "Airbnb",
      ],
      image: `/images/Camplus.png`,
      codeLink: "https://github.com/devRent-Camplus/camplus-FE",
    },
    {
      title: "Yourssu Landing Page",
      intro: "숭실대학교 유어슈 동아리 홈페이지",
      skill: ["Gatsby", "TypeScript", "Tailwindcss", "GraphQL"],
      image: "/images/YourssuLandingPage.png",
      codeLink:
        "https://github.com/indianaPoly/indianaPoly.github.io/tree/main/src",
    },
  ];
  res.status(200).json(projectData);
};

export default handler;
