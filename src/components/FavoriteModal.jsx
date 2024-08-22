
export default function FavoriteModal({ modalIsOpen, closeModal }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 ${
          modalIsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => closeModal()}
      />

      <div
        className={`fixed inset-x-0 bg-white text-sm px-5 pt-3 pb-8 rounded-3xl transition-all duration-300 ${
          modalIsOpen ? 'opacity-100 visible bottom-0' : 'opacity-0 invisible -bottom-full'
        }`}
      >
        <div className='w-14 h-1 bg-[#DADADA] mb-4 mx-auto cursor-grab rounded-xl' />

        <img src='/images/ring.svg' alt='favorite' />

        <div className='flex gap-x-4 mt-6'>
          <div className='w-[40%] flex flex-col gap-y-2'>
            <InfoTitle title='نام مقاله' />
            <InfoTitle title='نویسنده مقاله' />
            <InfoTitle title='تاریخ انتشار مقاله' />
          </div>

          <div className='w-[60%] flex flex-col gap-y-2'>
            <InfoDesc desc='کشور اکراین کجا واقع شد ...' />
            <InfoDesc desc='پرهام رحیمی' />
            <InfoDesc desc='1403/02/12' />
          </div>
        </div>

        <div className='h-12 flex gap-x-4 mt-4'>
          <button className='modal-btn bg-[--dark-clr]'>مشاهده</button>
          <button className='modal-btn bg-[--red-clr]'>حذف مقاله مورد علاقه</button>
        </div>
      </div>
    </>
  );
}

function InfoTitle({ title }) {
  return (
    <span className='h-12 flex-center border rounded-lg text-[--dark-clr] font-semibold border-[#D9D9D9] bg-[#E3E3E3]'>
      {title}
    </span>
  );
}

function InfoDesc({ desc }) {
  return <span className='h-12 bg-[--dark-clr] text-white flex-center rounded-lg'>{desc}</span>;
}
