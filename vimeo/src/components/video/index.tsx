import React, { useRef, useEffect } from 'react';
import Player, { Options } from '@vimeo/player';

type VimeoPlayerProps = {
  videoId: number | string;
  width?: number;
  startTime: number;
  endTime: number;
};

export const Video: React.FC<VimeoPlayerProps> = ({ videoId, width = 640,startTime, endTime }) => {
  const playerContainer = useRef<HTMLDivElement>(null);
  // 使用 ref 避免重複重設播放位置
  const isLoopingRef = useRef<boolean>(false);

  useEffect(() => {
    let player: Player | undefined;
    if (playerContainer.current) {
      const options: Options = {
        url: `https://vimeo.com/${videoId}`,
        width: width,
        autoplay: true,
        // muted: true,
      };
      player = new Player(playerContainer.current, options);

      // 設定影片從 10 秒開始播放
      player.setCurrentTime(startTime).catch((error: unknown) => {
        console.error('設定起始時間失敗:', error);
      });

      // 監聽播放進度，達到 20 秒時跳回 10 秒以達成循環效果
      player.on('timeupdate', (data: { seconds: number }) => {
        if (data.seconds >= endTime && !isLoopingRef.current) {
          isLoopingRef.current = true;
          player?.setCurrentTime(startTime)
            .then(() => {
              isLoopingRef.current = false;
            })
            .catch((error: unknown) => {
              console.error('循環播放段落失敗:', error);
              isLoopingRef.current = false;
            });
        }
      });
    }


    return () => {
      if (player) {
        // 此處明確將 error 參數型別設為 unknown
        player.destroy().catch((error: unknown) =>
          console.error('播放器銷毀失敗:', error)
        );
      }
    };
  }, [videoId, width, startTime, endTime]);

  return <div ref={playerContainer} />;
};

type VideoModalProps = {
  videoId: number | string;
  startTime: number;
  endTime: number;
  onClose: () => void;
};

export const VideoModal: React.FC<VideoModalProps> = ({ videoId ,startTime ,endTime ,onClose }) => {
  return (
      <div style={{ position: 'relative', width: '80%', maxWidth: 800 }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 1001,
          }}
        >
          關閉
        </button>
        <Video videoId={videoId} width={800} startTime={startTime} endTime={endTime} />
      </div>
  );
};
