import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid"
import { useState } from "react"

const steps = [
    { name: 'Step 1', href: '#', status: 'complete' },
    { name: 'Step 2', href: '#', status: 'current' },
    { name: 'Step 3', href: '#', status: 'upcoming' },
    { name: 'Step 4', href: '#', status: 'upcoming' },
    { name: 'Step 5', href: '#', status: 'upcoming' }
]

const people = [
    { id: 1, name: 'Select sector...' },
    { id: 2, name: 'Advertising' },
    { id: 3, name: 'Construction Renovation' },
    { id: 4, name: 'Digital Marketing' },
    { id: 5, name: 'Ecommerce' },
    { id: 6, name: 'Education' },
    { id: 7, name: 'Energy' },
    { id: 8, name: 'Entertainment' },
    { id: 9, name: 'Financial Services' },
    { id: 10, name: 'Food &amp; Beverage' },
    { id: 11, name: 'Game Dev &amp; Support' },
    { id: 12, name: 'Government' },
    { id: 13, name: 'Hardware Tech/IT' },
    { id: 14, name: 'Healthcare' },
    { id: 15, name: 'Hospitality' },
    { id: 16, name: 'Legal' },
    { id: 17, name: 'Manufacturing' },
    { id: 18, name: 'Media Publishing' },
    { id: 19, name: 'Non Profit' },
    { id: 20, name: 'Pharmaceutical' },
    { id: 21, name: 'Public Utilities' },
    { id: 22, name: 'Real Estate' },
    { id: 23, name: 'Recruiting Staffing' },
    { id: 24, name: 'Retail' },
    { id: 25, name: 'Software Tech/IT' },
    { id: 26, name: 'Telecoms' },
    { id: 27, name: 'Transportation' },
    { id: 28, name: 'Travel' },
    { id: 29, name: 'Other sector' }
]
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}
export function Stage1({ stateChanger, ...rest }: any) {

    const [selected, setSelected] = useState(people[3])
    return (


        <><h1 className='font-TorokaBold mb-4 text-[40px] leading-9 text-white'>
            COMPARE OUTSOURCING
        </h1><p className='font-ProximaNova mb-4 text-lg leading-6 text-white'>
                We&lsquo;ve been saving Aussies time, effort and money
                comparing a range of Australia&lsquo;s Outsourcing Companies{' '}
                <span className='font-bold'>for over 20 years</span>
            </p><div className='space-y-4'>
                <Listbox value={selected} onChange={setSelected}>
                    <div className='relative mb-5 mt-2'>
                        <ListboxButton className='font-ProximaNova text-paragraphColor flex h-12 w-full cursor-pointer appearance-none items-center justify-between whitespace-normal break-words rounded border bg-white p-2 focus:outline-none'>
                            <span className='font-ProximaNova block truncate'>
                                {selected.name}
                            </span>
                            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                                <ChevronUpDownIcon
                                    aria-hidden='true'
                                    className='h-5 w-5 text-gray-400' />
                            </span>
                        </ListboxButton>

                        <ListboxOptions
                            transition
                            className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm'
                        >
                            {people.map(person => (
                                <ListboxOption
                                    key={person.id}
                                    value={person}
                                    className='group relative cursor-default select-none py-2 pl-3 pr-9 text-left text-gray-900 data-[focus]:bg-gray-600 data-[focus]:text-white'
                                >
                                    <span className='font-ProximaNova block truncate font-normal group-data-[selected]:font-semibold'>
                                        {person.name}
                                    </span>

                                    <span className='absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
                                        <CheckIcon
                                            aria-hidden='true'
                                            className='h-5 w-5' />
                                    </span>
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </div>
                </Listbox>
                <div>
                    <div className='relative mb-5 mt-2 rounded-md shadow-sm'>
                        <input
                            id='account-number'
                            name='account-number'
                            type='text'
                            placeholder='000-00-0000'
                            className='font-ProximaNova text-paragraphColor h-12 w-full rounded-b rounded-t border p-2 focus:outline-none' />
                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                            <QuestionMarkCircleIcon
                                aria-hidden='true'
                                className='h-5 w-5 text-gray-400' />
                        </div>
                    </div>
                </div>
            </div><button onClick={() => stateChanger(1)} className='font-Toroka rounded-custom-tl-br inline-flex w-auto items-center justify-center rounded-[15px_5px_15px_5px] bg-white p-[5px] px-2 py-[14px] text-[20px] font-normal leading-4 leading-normal text-primary transition-colors duration-300 sm:px-8 sm:text-2xl'>
                <p></p>START COMPARING
            </button></>

    )
}
export function Stage2({ stateChanger, ...rest }: any) {

    const [selected, setSelected] = useState(people[3])
    return (

        <><nav aria-label="Progress">
            <ol role="list" className="flex items-center ml-3">
                {steps.map((step, stepIdx) => (
                    <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-2 sm:pr-11' : '', 'relative')}>
                        {step.status === 'complete' ? (
                            <>
                                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                    <div className="h-0.5 w-full bg-indigo-600" />
                                </div>
                                <a
                                    href="#"
                                    className="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900"
                                >
                                    <CheckIcon aria-hidden="true" className="h-5 w-5 text-white" />
                                    <span className="sr-only">{step.name}</span>
                                </a>
                            </>
                        ) : step.status === 'current' ? (
                            <>
                                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <a
                                    href="#"
                                    aria-current="step"
                                    className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
                                >
                                    <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                                    <span className="sr-only">{step.name}</span>
                                </a>
                            </>
                        ) : (
                            <>
                                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <a
                                    href="#"
                                    className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                                    <span className="sr-only">{step.name}</span>
                                </a>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav><button onClick={() => stateChanger(2)} className='mt-10 font-Toroka rounded-custom-tl-br inline-flex w-auto items-center justify-center rounded-[15px_5px_15px_5px] bg-white p-[5px] px-2 py-[14px] text-[20px] font-normal leading-4 leading-normal text-primary transition-colors duration-300 sm:px-8 sm:text-2xl'>
                <p></p>CONTINUE
            </button></>
    )
}