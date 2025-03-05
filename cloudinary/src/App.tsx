import { useState } from 'react';
import CloudinaryVideo from './components/CloudinaryVideo';

function App() {
  // 輸入框的初始預設值
  const [inputStartTime, setInputStartTime] = useState<number>(10);
  const [inputEndTime, setInputEndTime] = useState<number>(20);

  // 真正傳給 CloudinaryVideo 的播放時間
  const [startTime, setStartTime] = useState<number>(10);
  const [endTime, setEndTime] = useState<number>(20);

  // 當使用者按下「修改時間」按鈕時，更新播放時間
  const handleApply = () => {
    setStartTime(inputStartTime);
    setEndTime(inputEndTime);
  };

  return (
    <div>
      <h1>展示 Cloudinary 上的影片</h1>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          開始時間 (秒):
          <input
            type="number"
            value={inputStartTime}
            onChange={(e) => setInputStartTime(Number(e.target.value))}
          />
        </label>
        <label style={{ marginLeft: '1rem' }}>
          結束時間 (秒):
          <input
            type="number"
            value={inputEndTime}
            onChange={(e) => setInputEndTime(Number(e.target.value))}
          />
        </label>
        <button onClick={handleApply} style={{ marginLeft: '1rem' }}>
          修改時間
        </button>
      </div>
      <CloudinaryVideo
        cloudName="dgcouwyp4"        // 替換成你的 Cloudinary cloud name
        publicId="samples/elephants"      // 替換成影片的 public id
        width={800}
        controls={true}
        startTime={startTime}
        endTime={endTime}
      />
    </div>
  );
}

export default App;
