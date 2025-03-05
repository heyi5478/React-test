import React, { useState } from 'react';
import { VideoModal } from './components/video';

const App: React.FC = () => {
  const [startTime, setStartTime] = useState(10);
  const [endTime, setEndTime] = useState(20);
  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);

  return (
    <div>
      <h1>設定播放區間並開啟影片視窗</h1>
      <div>
        <label>
          起始秒數:
          <input
            type="number"
            value={startTime}
            onChange={(e) => setStartTime(Number(e.target.value))}
          />
        </label>
        <label style={{ marginLeft: 10 }}>
          結束秒數:
          <input
            type="number"
            value={endTime}
            onChange={(e) => setEndTime(Number(e.target.value))}
          />
        </label>
      </div>
      {/* <button onClick={openModal} style={{ marginTop: 10 }}>
        播放影片
      </button>
      {modalOpen && (
        <VideoModal
          videoId={1062288466}
          startTime={startTime}
          endTime={endTime}
          onClose={closeModal}
        />
      )} */}

      {/* 直接顯示影片視窗 */}
      <VideoModal videoId={1062288466} startTime={startTime} endTime={endTime} onClose={() => {}} />
    </div>
  );
};

export default App;
