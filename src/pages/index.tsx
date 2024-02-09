import Card from "@/components/elements/Card";
import Picture from "@/components/elements/Picture";

const Home = () => {
  return (
    <div className="page">
      <div className="header">
        <Picture />
        <h3>Hi, I am Gabrijela, nice to meet you!</h3>
      </div>
      <Card />
    </div>
  );
};

export default Home;
