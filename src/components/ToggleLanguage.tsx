import { useLanguage } from "@/hooks/useLanguage";

const ToggleLanguage = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="lang">
      <button
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
      >
        en
      </button>
      |
      <button
        className={language === "hr" ? "active" : ""}
        onClick={() => setLanguage("hr")}
      >
        hr
      </button>
    </div>
  );
};

export default ToggleLanguage;
