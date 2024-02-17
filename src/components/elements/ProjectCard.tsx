import Image from "next/image";

interface ProjectCardProps {
  title: string;
  githubUrl: string;
  demoUrl: string;
  list: string[];
  description: string;
  cta: string;
}

const ProjectCard = ({
  title,
  githubUrl,
  demoUrl,
  list,
  description,
  cta,
}: ProjectCardProps) => {
  return (
    <div className="card-large">
      <h5>{title}</h5>
      <div className="card-top">
        <a href={`${githubUrl}`} className="logo" target="blank">
          <Image
            src="/github-mark.png"
            alt="image"
            width={150}
            height={150}
            priority
            className="image-github"
          />
        </a>
        <div className="card-list">
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card-bottom">
        <div className="card-description">
          <p>{description}</p>
        </div>
        <a href={`${demoUrl}`} className="demo" target="blank">
          {cta}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
