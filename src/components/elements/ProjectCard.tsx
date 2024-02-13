import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="card-large">
      <h5>Project title</h5>
      <div className="card-top">
        <a href="http://www.github.com/jspvg" className="logo">
          <Image
            src="/github-mark.png"
            alt="image"
            width={150}
            height={150}
            priority
          />
        </a>
        <div className="card-list">
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
              voluptatem?
            </li>
          </ul>
        </div>
      </div>
      <div className="card-bottom">
        <div className="card-description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius nemo,
            quasi repellat adipisci maiores, beatae deleniti inventore possimus
            hic distinctio incidunt laborum neque sunt aspernatur laboriosam
            vitae vel veritatis. Numquam eos dolor quisquam quasi culpa
            voluptates ratione tempora beatae nemo, eum, atque quod, ullam ex.
          </p>
        </div>
        <a href="http://www.github.com/jspvg" className="demo">
          View Live demo here
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
