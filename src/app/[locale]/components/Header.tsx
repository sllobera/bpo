'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <>
      <div className='mx-auto flex max-w-full flex-row items-center justify-between bg-white p-2 text-primary'>
        <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-6 items-center justify-between'>
            <div className='flex w-full justify-center gap-5 overflow-x-hidden overflow-y-hidden'>
              <div className='mr-8 flex hidden flex-shrink-0 items-center justify-center space-x-2 lg:flex'>
                <img
                  alt='No additional cost to you'
                  loading='lazy'
                  width='32'
                  height='32'
                  decoding='async'
                  data-nimg='1'
                  src='/icon_circle_dollar.svg'
                />
                <span className='font-Toroka lg:max-w-custom15 xl2:max-w-fit text-md leading-4 text-primary xl:max-w-fit '>
                  No additional cost to you
                </span>
              </div>
              <div className='ml-10 mr-8 flex  flex-shrink-0 items-center justify-center space-x-2 lg:flex '>
                <img
                  alt='We save you hours of research'
                  loading='lazy'
                  width='32'
                  height='32'
                  decoding='async'
                  data-nimg='1'
                  src='/icon_clock.svg'
                />
                <span className='font-Toroka lg:max-w-custom15 xl2:max-w-fit text-md leading-4 text-primary xl:max-w-fit '>
                  We save you hours of research
                </span>
              </div>
              <div className='mr-8 flex hidden flex-shrink-0 items-center justify-center space-x-2 lg:flex'>
                <img
                  alt='Health insurance price promise'
                  loading='lazy'
                  width='32'
                  height='32'
                  decoding='async'
                  data-nimg='1'
                  src='/icon_badge_price_promise.svg'
                />
                <span className='font-Toroka lg:max-w-custom15 xl2:max-w-fit text-md leading-4 text-primary xl:max-w-fit '>
                  BPO price promise
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
