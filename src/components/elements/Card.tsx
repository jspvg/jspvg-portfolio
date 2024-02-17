import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/utils/translations";

const Card = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="card-about">
      {t.about.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Card;
