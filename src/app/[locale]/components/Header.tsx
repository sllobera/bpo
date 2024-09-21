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
      <div className='text-color-white mx-auto flex max-w-full flex-row items-center justify-between bg-primary p-2'>
        <Link lang={locale} href='/'>
          <div className='flex flex-row items-center'>
            <div className='mb-2 h-8 w-14'></div>
            <strong className='mx-2 select-none'>Template</strong>
          </div>
        </Link>
        <div className='flex flex-row items-center gap-3'>
          <nav className='mr-10 inline-flex gap-5'>
            <Link lang={locale} href={`/about`}>
              {t('About')}
            </Link>
            <a href=''>{t('Support')}</a>
            <a href=''>{t('Other')}</a>
          </nav>
        </div>
      </div>
    </>
  )
}
