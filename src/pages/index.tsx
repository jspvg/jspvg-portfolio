import Card from "@/components/elements/Card";
import Picture from "@/components/elements/Picture";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/utils/translations";

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="page">
      <div className="header">
        <Picture />
        <h3 className="intro">{t.about.header}</h3>
      </div>
      <Card />
    </div>
  );
};

export default Home;
