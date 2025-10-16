import Image from "next/image";

const Header = ({ name, image, bg, width, height }) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={`flex flex-col items-center justify-center py-16 space-y-4`}
    >
      <Image
        src={image}
        alt={`${name} logo image`}
        quality={100}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Header;
