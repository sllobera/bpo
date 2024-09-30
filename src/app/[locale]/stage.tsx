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
const countries = [{ id: 0, name: 'Preferred Location..' },
{ id: 1, name: 'Vietnam' },
{ id: 2, name: 'India' },
{ id: 3, name: 'Philippines' },
{ id: 4, name: 'Sri Lanka' }, { id: 5, name: 'Bangladesh' }, { id: 6, name: 'No preference' },
]
const people = [
    { id: 1, name: 'Select sector...' },
    { id: 2, name: 'Accounting' },
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

    const [selected, setSelected] = useState(people[0])
    const [option, setOption] = useState(0)
    return (


        <>

            <Listbox value={selected} onChange={setSelected}>
                <div className='relative mb-5 mt-2 '>
                    <ListboxButton className='font-ProximaNovaBold text-paragraphColor flex h-8 w-full cursor-pointer  items-center justify-between whitespace-normal break-words rounded border bg-white p-2 focus:outline-none'>
                        <span className='font-ProximaNovaBold block truncate text-gray-800 text-sm'>
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
                                <span className='font-ProximaNovaBold block truncate font-normal group-data-[selected]:font-semibold'>
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

            {/*<button onClick={() => stateChanger(1)} className='font-Toroka rounded-custom-tl-br inline-flex w-auto items-center justify-center rounded-[15px_5px_15px_5px] bg-primary p-[5px] px-2 py-[14px] text-[20px] font-normal leading-4 leading-normal text-white transition-colors duration-300 sm:px-8 sm:text-2xl'>
                <p></p>START COMPARING
            </button>*/}</>

    )
}
export function Stage2({ stateChanger, ...rest }: any) {


    const [selected, setSelected] = useState(countries[0])
    const [option, setOption] = useState(0)
    return (

        <><nav aria-label="Progress">
            <ol role="list" className="flex items-center ml-3">
                {steps.map((step, stepIdx) => (
                    <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-11 sm:pr-11' : '', 'relative')}>
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
        </nav>
            <div className='space-y-4 mt-8'>
                <Listbox value={selected} onChange={setSelected}>
                    <div className='relative mb-5 mt-2'>
                        <ListboxButton className='font-ProximaNovaBold text-paragraphColor flex h-8 w-full cursor-pointer  items-center justify-between whitespace-normal break-words rounded border bg-white p-2 focus:outline-none'>
                            <span className='font-ProximaNovaBold block truncate text-gray-800 text-sm'>
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
                            {countries.map(person => (
                                <ListboxOption
                                    key={person.id}
                                    value={person}
                                    className='group relative cursor-default select-none py-2 pl-3 pr-9 text-left text-gray-900 data-[focus]:bg-gray-600 data-[focus]:text-white'
                                >
                                    <span className='font-ProximaNovaBold block truncate font-normal group-data-[selected]:font-semibold'>
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
                <div><p className='font-ProximaNova mb-4 text-sm leading-6 text-white text-left'>No. of roles you need..
                </p>

                    <span className="isolate inline-flex rounded-md shadow-sm">
                        <button type="button" onClick={() => { option == 1 ? setOption(0) : setOption(1) }} className={classNames(option == 1 ? "relative rounded-l-md -ml-px inline-flex items-center font-ProximaNovaBold items-center gap-x-1.5 bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :
                            "inline-flex rounded-l-md font-ProximaNovaBold  w-full bg-white text-gray-800 gap-x-1.5  bg-indigo-600 px-2.5 py-2 text-sm font-semibold  shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")} >
                            {option == 1 ? <svg className="-ml-0.5 h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                            </svg> : ""}
                            1
                        </button>
                        <button type="button" onClick={() => { option == 2 ? setOption(0) : setOption(2) }} className={classNames(option == 2 ? "relative -ml-px inline-flex items-center font-ProximaNovaBold items-center gap-x-1.5 bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :
                            "inline-flex font-ProximaNovaBold  w-full bg-white text-gray-800 gap-x-1.5  bg-indigo-600 px-2.5 py-2 text-sm font-semibold  shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")} >
                            {option == 2 ? <svg className="-ml-0.5 h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                            </svg> : ""}
                            2
                        </button>  <button type="button" onClick={() => { option == 3 ? setOption(0) : setOption(3) }} className={classNames(option == 3 ? "relative -ml-px inline-flex items-center font-ProximaNovaBold items-center gap-x-1.5 bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :
                            "inline-flex font-ProximaNovaBold  w-full bg-white text-gray-800 gap-x-1.5  bg-indigo-600 px-2.5 py-2 text-sm font-semibold  shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")} >
                            {option == 3 ? <svg className="-ml-0.5 h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                            </svg> : ""}
                            3
                        </button>
                        <button type="button" onClick={() => { option == 4 ? setOption(0) : setOption(4) }} className={classNames(option == 4 ? "relative -ml-px inline-flex items-center font-ProximaNovaBold items-center gap-x-1.5 bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :
                            "inline-flex font-ProximaNovaBold  w-full bg-white text-gray-800 gap-x-1.5  bg-indigo-600 px-2.5 py-2 text-sm font-semibold  shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")} >
                            {option == 4 ? <svg className="-ml-0.5 h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                            </svg> : ""}
                            4
                        </button><button type="button" onClick={() => { option == 5 ? setOption(0) : setOption(5) }} className={classNames(option == 5 ? "relative -ml-px inline-flex items-center font-ProximaNovaBold items-center gap-x-1.5 bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :
                            "inline-flex font-ProximaNovaBold  w-full bg-white text-gray-800 gap-x-1.5  bg-indigo-600 px-2.5 py-2 text-sm font-semibold  shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")} >
                            {option == 5 ? <svg className="-ml-0.5 h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                            </svg> : ""}
                            5
                        </button><button type="button" onClick={() => { option == 6 ? setOption(0) : setOption(6) }} className={classNames(option == 6 ? "relative rounded-r-md -ml-px inline-flex items-center font-ProximaNovaBold items-center gap-x-1.5 bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :
                            "inline-flex font-ProximaNovaBold  w-full bg-white text-gray-800 gap-x-1.5 rounded-r-md bg-indigo-600 px-2.5 py-2 text-sm font-semibold  shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")} >
                            {option == 6 ? <svg className="-ml-0.5 h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                            </svg> : ""}
                            6+
                        </button>
                    </span>
                </div>
            </div>

            <button onClick={() => stateChanger(2)} className='mt-10 font-Toroka rounded-custom-tl-br inline-flex w-auto items-center justify-center rounded-[15px_5px_15px_5px] bg-white p-[5px] px-2 py-[14px] text-[20px] font-normal leading-4 leading-normal text-primary transition-colors duration-300 sm:px-8 sm:text-2xl'>
                <p></p>CONTINUE
            </button></>
    )
}
export function Stage3({ stateChanger, ...rest }: any) {

    const [selected, setSelected] = useState(people[3])
    return (

        <><nav aria-label="Progress">
            <ol role="list" className="flex items-center ml-3">
                {steps.map((step, stepIdx) => (
                    <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-11 sm:pr-11' : '', 'relative')}>
                        {stepIdx < 2 ? (
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
                        ) : stepIdx == 2 ? (
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
        </nav><button onClick={() => stateChanger(3)} className='mt-10 font-Toroka rounded-custom-tl-br inline-flex w-auto items-center justify-center rounded-[15px_5px_15px_5px] bg-white p-[5px] px-2 py-[14px] text-[20px] font-normal leading-4 leading-normal text-primary transition-colors duration-300 sm:px-8 sm:text-2xl'>
                <p></p>CONTINUE
            </button></>
    )
}
