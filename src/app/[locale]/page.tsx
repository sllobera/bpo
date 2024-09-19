import { useTranslations } from 'next-intl'
import Button from './components/Button'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      {/*} <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {t('An')}{' '}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('Booster')}
          </span>
          <br />
          {t('to_Your_NextJS_Apps')}
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {t(
            'An_approachable_performant_and_versatile_boilerplate_for_building_SSR_applications'
          )}
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href='https://github.com/new?template_name=nextjs-template&template_owner=yahyaparvar'
            target='_blank'
          >
            <Button rounded size='large'>
              {t('Use_Template')}
            </Button>
          </a>
          <a
            href='https://github.com/yahyaparvar/nextjs-template'
            target='_blank'
          >
            <Button rounded size='large' variant='secondary'>
              {t('Learn_More')}
            </Button>
          </a>
        </div>
      </section>*/}
      <section className='bg-background-secondary'>
        <div className='relative isolate overflow-hidden bg-gray-900'>
          <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Boost your productivity.
                <br />
                Start using our app today.
              </h2>
              <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300'>
                Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
                anim id veniam aliqua proident excepteur commodo do ea.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                >
                  Get started
                </a>
                <a
                  href='#'
                  className='text-sm font-semibold leading-6 text-white'
                >
                  Learn more <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
          </div>
          <svg
            viewBox='0 0 1024 1024'
            aria-hidden='true'
            className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]'
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill='url(#8d958450-c69f-4251-94bc-4e091a323369)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient id='8d958450-c69f-4251-94bc-4e091a323369'>
                <stop stopColor='#7775D6' />
                <stop offset={1} stopColor='#E935C1' />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </div>
  )
}
