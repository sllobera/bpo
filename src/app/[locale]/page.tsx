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
                We&lsquo;ve been saving Aussies time, effort and money comparing
                a range of Australia&lsquo;s Outsourcing Companies{' '}
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
                  src='/icon_Phone.svg'
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
                  src='/icon_schedule_call.svg'
                />
                <p className='font-ProximaNovaBold'>SCHEDULE A CALL</p>
              </button>
            </div>
          </div>
          <div className='mb-8 mt-4'>
            <div className='px:2 flex w-full max-w-md items-center rounded-2xl bg-white py-2 text-left shadow-lg sm:px-6 sm:py-4'>
              <a
                href='https://www.trustpilot.com/review/iselect.com.au'
                target='_blank'
                rel='noopener noreferrer'
                className='mr-0 mt-2 w-3/4 text-center text-lg sm:mr-4'
              >
                <div className='flex flex-col items-center'>
                  <div>
                    <div className='flex items-center'>
                      <div className='relative mr-1 h-8 w-8'>
                        <svg
                          width='32'
                          height='32'
                          viewBox='0 0 40 40'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='absolute'
                        >
                          <path d='M40 0H0V40H40V0Z' fill='#E0E0E0'></path>
                          <path
                            d='M19.9995 26.9581L26.0828 25.4164L28.6245 33.2497L19.9995 26.9581ZM33.9995 16.8331H23.2911L19.9995 6.74974L16.7078 16.8331H5.99946L14.6661 23.0831L11.3745 33.1664L20.0411 26.9164L25.3745 23.0831L33.9995 16.8331Z'
                            fill='white'
                          ></path>
                        </svg>
                        <div className='absolute left-0 top-0 overflow-hidden'>
                          <svg
                            width='32'
                            height='32'
                            viewBox='0 0 40 40'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M40 0H0V40H40V0Z' fill='#219653'></path>
                            <path
                              d='M19.9995 26.9581L26.0828 25.4164L28.6245 33.2497L19.9995 26.9581ZM33.9995 16.8331H23.2911L19.9995 6.74974L16.7078 16.8331H5.99946L14.6661 23.0831L11.3745 33.1664L20.0411 26.9164L25.3745 23.0831L33.9995 16.8331Z'
                              fill='white'
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className='relative mr-1 h-8 w-8'>
                        <svg
                          width='32'
                          height='32'
                          viewBox='0 0 40 40'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='absolute'
                        >
                          <path d='M40 0H0V40H40V0Z' fill='#E0E0E0'></path>
                          <path
                            d='M19.9995 26.9581L26.0828 25.4164L28.6245 33.2497L19.9995 26.9581ZM33.9995 16.8331H23.2911L19.9995 6.74974L16.7078 16.8331H5.99946L14.6661 23.0831L11.3745 33.1664L20.0411 26.9164L25.3745 23.0831L33.9995 16.8331Z'
                            fill='white'
                          ></path>
                        </svg>
                        <div className='absolute left-0 top-0 overflow-hidden'>
                          <svg
                            width='32'
                            height='32'
                            viewBox='0 0 40 40'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M40 0H0V40H40V0Z' fill='#219653'></path>
                            <path
                              d='M19.9995 26.9581L26.0828 25.4164L28.6245 33.2497L19.9995 26.9581ZM33.9995 16.8331H23.2911L19.9995 6.74974L16.7078 16.8331H5.99946L14.6661 23.0831L11.3745 33.1664L20.0411 26.9164L25.3745 23.0831L33.9995 16.8331Z'
                              fill='white'
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className='relative mr-1 h-8 w-8'>
                        <svg
                          width='32'
                          height='32'
                          viewBox='0 0 40 40'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='absolute'
                        >
                          <path d='M40 0H0V40H40V0Z' fill='#E0E0E0'></path>
                          <path
                            d='M19.9995 26.9581L26.0828 25.4164L28.6245 33.2497L19.9995 26.9581ZM33.9995 16.8331H23.2911L19.9995 6.74974L16.7078 16.8331H5.99946L14.6661 23.0831L11.3745 33.1664L20.0411 26.9164L25.3745 23.0831L33.9995 16.8331Z'
                            fill='white'
                          ></path>
                        </svg>
                        <div className='absolute left-0 top-0 overflow-hidden'>
                          <svg
                            width='32'
                            height='32'
                            viewBox='0 0 40 40'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M40 0H0V40H40V0Z' fill='#219653'></path>
                            <path
                              d='M19.9995 26.9581L26.0828 25.4164L28.6245 33.2497L19.9995 26.9581ZM33.9995 16.8331H23.2911L19.9995 6.74974L16.7078 16.8331H5.99946L14.6661 23.0831L11.3745 33.1664L20.0411 26.9164L25.3745 23.0831L33.9995 16.8331Z'
                              fill='white'
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className='relative mr-1 h-8 w-8'>
                        <svg
                          width='32'
                          height='32'
                          viewBox='0 0 40 40'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='absolute'
                        >
                          <path d='M40 0H0V40H40V0Z' fill='#E0E0E0'></path>
                          <path
                            d='M19.9995 26.9581L26.0828 25.4164L28.6245 33.2497L19.9995 26.9581ZM33.9995 16.8331H23.2911L19.9995 6.74974L16.7078 16.8331H5.99946L14.6661 23.0831L11.3745 33.1664L20.0411 26.9164L25.3745 23.0831L33.9995 16.8331Z'
                            fill='white'
                          ></path>
                        </svg>
                        <div className='absolute left-0 top-0 overflow-hidden'>
                          <svg
                            width='32'
                            height='32'
                            viewBox='0 0 40 40'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M40 0H0V40H40V0Z' fill='#219653'></path>
                            <path
                              d='M19.9995 26.9581L26.0828 25.4164L28.6245 33.2497L19.9995 26.9581ZM33.9995 16.8331H23.2911L19.9995 6.74974L16.7078 16.8331H5.99946L14.6661 23.0831L11.3745 33.1664L20.0411 26.9164L25.3745 23.0831L33.9995 16.8331Z'
                              fill='white'
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className='relative mr-1 h-8 w-8'>
                        <svg
                          width='32'
                          height='32'
                          viewBox='0 0 40 40'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='absolute'
                        >
                          <path d='M40 0H0V40H40V0Z' fill='#E0E0E0'></path>
                          <path
                            d='M19.9995 26.9581L26.0828 25.4164L28.6245 33.2497L19.9995 26.9581ZM33.9995 16.8331H23.2911L19.9995 6.74974L16.7078 16.8331H5.99946L14.6661 23.0831L11.3745 33.1664L20.0411 26.9164L25.3745 23.0831L33.9995 16.8331Z'
                            fill='white'
                          ></path>
                        </svg>
                        <div className='absolute left-0 top-0 overflow-hidden'>
                          <svg
                            width='32'
                            height='32'
                            viewBox='0 0 40 40'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M40 0H0V40H40V0Z' fill='#219653'></path>
                            <path
                              d='M19.9995 26.9581L26.0828 25.4164L28.6245 33.2497L19.9995 26.9581ZM33.9995 16.8331H23.2911L19.9995 6.74974L16.7078 16.8331H5.99946L14.6661 23.0831L11.3745 33.1664L20.0411 26.9164L25.3745 23.0831L33.9995 16.8331Z'
                              fill='white'
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center'>
                  <p className='text-secondary'>
                    <span className='text-lg font-bold sm:text-xl'>4.6</span>
                    <span className='ml-2 text-sm'>
                      Based on <b className='underline'>3902 reviews</b>
                    </span>
                  </p>
                </div>
              </a>
              <div className='h-14 w-[2px] bg-gray-200'></div>
              <img
                alt='Logo'
                loading='lazy'
                width='94'
                height='16'
                decoding='async'
                data-nimg='1'
                className='xl2:ml-8 m-2 w-1/4 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8'
                src='/logo_trustpoilot.svg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
