import "../App.css";

const ImageComponent = ({
  name,
  photoName,
  page,
}: {
  name: string | undefined;
  photoName: string | undefined;
  page: string;
}) => {
  if (!name || !photoName) return null;

  const type = name === "Ilias Bilionis" ? "professor" : "student";

  const width = page === "person" ? 250 : type === "professor" ? 200 : 150;
  const height = width;
  return (
    <img
      src={`/src/assets/pics/${photoName}`}
      alt={name}
      width={width}
      height={height}
    />
  );
};

export default ImageComponent;
