export default function Navbar() {
  return (
    <nav className='flex gap-x-3 mt-4'>
      <button className='nav-btn bg-[--dark-clr]'>
        <img src='/images/menu.svg' alt='menu' />
      </button>

      <button className='nav-btn w-fit px-4 ml-auto bg-[--light-clr] gap-x-3'>
        <img src='/images/wallet.svg' alt='wallet' />
        <span className='text-[#727272] text-sm font-semibold pt-0.5'>21,265,000 تومان</span>
      </button>

      <button className='nav-btn bg-[--red-clr]'>
        <img src='/images/logout.svg' alt='logout' />
      </button>

      <button className='nav-btn relative bg-[--light-clr]'>
        <img src='/images/notification-status.svg' alt='notification-status' />
        <div className='absolute -top-1.5 -right-1.5 w-4 h-4 pt-1 flex-center bg-[#FF5E5E] text-white text-[0.6rem] border border-[--red-clr] rounded-full'>
          2
        </div>
      </button>
    </nav>
  );
}
