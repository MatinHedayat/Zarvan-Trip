import { useState } from 'react';

export default function FavoriteSection() {
  const [favoriteSection, setFavoriteSection] = useState('weblogs');
  const favSectionClass = 'bg-[#262630] rounded-xl';

  return (
    <div className='bg-[#565662] h-12 text-white text-[0.75rem] font-medium overflow-hidden rounded-xl'>
      <button
        className={`w-1/2 h-full ${favoriteSection === 'hotels' && favSectionClass}`}
        onClick={() => setFavoriteSection('hotels')}
      >
        هتل های مورد علاقه
      </button>

      <button
        className={`w-1/2 h-full ${favoriteSection === 'weblogs' && favSectionClass}`}
        onClick={() => setFavoriteSection('weblogs')}
      >
        وبلاگ های مورد علاقه
      </button>
    </div>
  );
}
