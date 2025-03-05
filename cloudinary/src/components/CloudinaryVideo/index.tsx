// CloudinaryVideo.tsx
import React from 'react';
import { CloudinaryContext, Video } from 'cloudinary-react';

interface CloudinaryVideoProps {
  cloudName: string;
  publicId: string;
  width?: number;
  controls?: boolean;
  startTime: number; // 影片起始秒數
  endTime: number;   // 影片結束秒數
}

const CloudinaryVideo: React.FC<CloudinaryVideoProps> = ({
  cloudName,
  publicId,
  width = 640,
  controls = true,
  startTime,
  endTime
}) => {
  const duration = endTime - startTime;
  console.log(duration);

  return (
    <CloudinaryContext cloudName={cloudName}>
      <Video
        publicId={publicId}
        width={width}
        controls={controls ? 'true' : undefined}
        // 如需加入其他轉換參數，可在此傳入 transformation prop
        transformation={[{ start_offset: startTime.toString(), duration: duration.toString() }]}
        autoPlay={true}
        loop={true}
        muted={true}
      />
    </CloudinaryContext>
  );
};

export default CloudinaryVideo;
