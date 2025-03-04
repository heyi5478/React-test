import React, { useState } from 'react';
import { VideoModal } from './components/video';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <h1>點擊按鈕開啟影片視窗</h1>
      <button onClick={openModal}>播放影片</button>
      {modalOpen && <VideoModal videoId={1062288466} onClose={closeModal} />}
    </div>
  );
};

export default App;
