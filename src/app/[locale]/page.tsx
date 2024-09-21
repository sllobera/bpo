import Button from './components/Button'

export default function DashboardPage() {
  return (
    <div className='back min-h-96 md:block md:bg-cover md:bg-left-top lg:block xl:block 2xl:block'>
      <div className='max-w-custom90 mx-auto w-full'>
        <div className='relative flex h-full flex-col items-start md:ml-5 md:pt-28 lg:ml-28 lg:pt-20'>
          <div className='rounded-tl-custom5 rounded-t-md bg-secondary'>
            <div className='rounded-tl-custom5 rounded-br-custom5 relative w-full max-w-md rounded-t-md bg-primary p-10 text-center shadow-lg'>
              <h1 className='font-TorokaBold mb-4 text-[40px] leading-9 text-white'>
                COMPARE OUTSOURCING
              </h1>
              <p className='font-ProximaNova mb-4 text-lg leading-6 text-white'>
                We've been saving Aussies time, effort and money comparing a
                range of Australia's health funds{' '}
                <span className='font-bold'>for over 20 years</span>
              </p>
              <button className='font-Toroka rounded-custom-tl-br inline-flex w-auto items-center justify-center rounded-[15px_5px_15px_5px] bg-white p-[5px] px-2 py-[14px] text-[20px] font-normal leading-4 leading-normal text-primary transition-colors duration-300 sm:px-8 sm:text-2xl'>
                <p></p>START COMPARING
              </button>
            </div>

            <div className='flex w-full'>
              <a
                href='tel:1800784772'
                className='flex w-1/2 px-6 py-6 text-white'
              >
                <img
                  alt='Logo'
                  loading='lazy'
                  width='24'
                  height='24'
                  decoding='async'
                  data-nimg='1'
                  className='mr-2'
                  src='/assets/icon_Phone.svg'
                />
                <p className='call-text font-ProximaNovaBold'>
                  CALL 1800 784 772
                </p>
              </a>
              <div className='mb-[12px] mt-[18px] inline-block w-px bg-gray-500'></div>
              <button className='flex w-1/2 px-6 py-6 text-white'>
                <img
                  alt='Logo'
                  loading='lazy'
                  width='24'
                  height='24'
                  decoding='async'
                  data-nimg='1'
                  className='mr-2'
                  src='/assets/icon_schedule_call.svg'
                />
                <p className='font-ProximaNovaBold'>SCHEDULE A CALL</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
