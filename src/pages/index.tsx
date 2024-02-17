import Card from "@/components/elements/Card";
import Picture from "@/components/elements/Picture";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/utils/translations";
import { useEffect } from "react";

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const header = t.about.header;

  useEffect(() => {
    const element = document.getElementById("intro");
    element!.textContent = "";
    let i = 0;
    const intervalId = setInterval(() => {
      element!.textContent += header.charAt(i);
      i++;
      if (i === header.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [header]);

  return (
    <div className="page">
      <div className="header">
        <Picture />
        <h4 id="intro"></h4>
      </div>
      <Card />
      <div className="footer">
        <a href={t.about.cvUrl} className="button">
          <button>{t.about.download}</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
