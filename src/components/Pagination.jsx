import { useState } from 'react';

export default function Pagination() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className='flex-center gap-x-2 mt-10'>
      {[1, 2, 3, 4].reverse().map((item) => (
        <button
          key={item}
          className={`relative w-10 h-1 bg-[#D4D4D4] rounded-xl ${pageNumber === item && 'bg-black'}`}
          onClick={() => setPageNumber(item)}
        >
          <span
            className={`absolute -top-4 left-1/2 -translate-x-1/2 text-sm text-[--dark-clr] font-semibold ${
              pageNumber === item ? 'visible' : 'invisible'
            }`}
          >
            0{item}
          </span>
        </button>
      ))}
    </div>
  );
}
