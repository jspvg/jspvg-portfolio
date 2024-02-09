import Image from "next/image";

const Picture = () => {
  return (
    <Image
      src="/profile.jpg"
      alt="image"
      width={200}
      height={200}
      className="picture"
      priority
    />
  );
};

export default Picture;
