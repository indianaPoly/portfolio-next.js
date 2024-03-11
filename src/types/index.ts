export type NavbarItem = {
  name: string;
  link: string;
};

export interface NavbarItemProp {
  navbarItem: NavbarItem[];
}

export interface ProjectData {
  title: string;
  intro: string;
  skill: string[];
  image: string;
  codeLink: string;
}
