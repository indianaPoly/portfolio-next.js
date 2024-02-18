import { createContext } from "react";

interface LanguageContextProps {
  language: string;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: "kor",
  toggleLanguage: () => {
    return null;
  },
});
