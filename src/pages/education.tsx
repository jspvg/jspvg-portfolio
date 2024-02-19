import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/utils/translations";

const Education = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="page">
      <h5>university</h5>
      <div className="uni">
        <div className="uni-header">
          <p>
            {t.education.uniTitleLong}
            <br />
            {t.education.uniTitleShort}
          </p>
        </div>
        <div className="uni-body">
          {t.education.uniDescription.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>
      <div className="certs">
        {t.education.certs.map((cert, index: number) => (
          <div key={index} className="card-cert">
            <h6>{cert.title}</h6>
            <small>
              {cert.issued}, {cert.organization}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
