import type { Video } from "../types";
const VideoComponent = ({ videos }: { videos: Video[] }) => {
  return (
    <>
      {videos.map((video) => (
        <>
          <p className="text-base text-black-500">{`\t${video.description}`}</p>
          <iframe
            width={640}
            height={360}
            src={video.url.replace("watch?v=", "embed/")}
            title={video.title}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          />
        </>
      ))}
    </>
  );
};

export default VideoComponent;
