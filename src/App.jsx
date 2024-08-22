import { useState } from 'react';

import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import FavoriteModal from './components/FavoriteModal';
import FavoriteSection from './components/FavoriteSection';

function App() {
  const [modalIsOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <main className='px-4 py-8'>
      <Navbar />

      <div className='bg-white w-full px-3 py-5 mt-8 rounded-2xl'>
        <FavoriteSection />

        <div className='space-y-2 mt-6'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className='h-12 flex gap-x-4'>
              <div className='bg-[#ECECEC] text-[--dark-clr] text-[0.8rem] font-semibold px-4 flex-1 flex items-center border border-[#E3E3E3] rounded-lg'>
                اطلاعات کامل علاقه مندی های من - شماره {item}
              </div>

              <button className='bg-[--dark-clr] w-12 h-12 flex-center rounded-lg' onClick={() => setModalOpen(true)}>
                <img src='/images/document-text.svg' alt='document' className='w-5' />
              </button>
            </div>
          ))}
        </div>

        <Pagination />
      </div>

      <FavoriteModal modalIsOpen={modalIsOpen} closeModal={handleCloseModal} />
    </main>
  );
}

export default App;
