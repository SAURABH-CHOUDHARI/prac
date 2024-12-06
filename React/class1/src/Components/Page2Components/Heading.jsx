
const Heading = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center flex-col mt-20'>
        <p className='font-normal mb-10'>Cases</p>
        <h1 className="relative text-[10rem] font-bold text-center leading-[0.9] uppercase after:content-['Gotta_see_m_all']  after:absolute after:top-[94%] after:right-60 after:rotate-[-15deg]  after:normal-case  after:text-lg   after:px-7 after:py-5 after:bg-[#F4C727]  after:rounded-3xl after:font-semibold  ">
          Head Turning <br /> Projects
        </h1>
      </div>
      <div className='w-full flex justify-end px-20 mb-14'>
        <button className='py-4 px-4 underline-offset-4  content-end rounded-2xl mt-5  hover:rounded-[3rem] transition-all ease-linear duration-200 hover:underline text-zinc-800 text-base font-semibold border border-1 border-gray-950 '>Alle projecten <i className="ri-arrow-right-line ml-5"></i></button>
      </div>
    </>

  )
}

export default Heading