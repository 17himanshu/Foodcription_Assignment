import React from 'react'
import { ChevronDown } from 'lucide-react'
import { TableFour } from '../components/table'
import { Select, Option } from "@material-tailwind/react";
import Dropdown from 'react-bootstrap/Dropdown';


const filters = [

    {
        id: 'roles',
        name: 'Roles',
        options: [
            { value: 'frontend', label: 'Frontend Engineer' },
            { value: 'backend', label: 'Backend Engineer' },
            { value: 'fullstack', label: 'Fullstack Engineer' },
            { value: 'devops', label: 'DevOps Engineer' },
            { value: 'uiux', label: 'UI/UX' },
        ],
    }
]

export function FilterThree() {
    return (
        <section className="w-full">
            <div className="mx-auto max-w-7xl px-2 py-10 lg:px-10">
                {/* Top */}
                <div className="md:flex md:flex-row md:items-start md:justify-between">
                    <div>
                        <h1 className="text-xl font-bold">Search Candidates</h1>
                    </div>
                    <div className="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
                        <button
                            type="button"
                            className="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex"
                        >
                            Sort <ChevronDown className="ml-2 h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
                        >
                            Roles <ChevronDown className="ml-2 h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
                        >
                            Color <ChevronDown className="ml-2 h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
                        >
                            Size <ChevronDown className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>
                <hr className="my-8" />
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
                    <div className="hidden space-y-6 divide-y lg:col-span-3 lg:block">
                        {filters.map((filter) => (
                            <div key={filter.id} className="pt-6">
                                <h3 className="text-lg font-semibold text-gray-900">{filter.name}</h3>
                                <ul className="mt-2">
                                    {filter.options.map((option) => (
                                        <li key={option.value} className="flex items-center justify-between py-2">
                                            <div className="flex items-center">
                                                <input
                                                    id={`${filter.id}-${option.value}`}
                                                    name={`${filter.id}[]`}
                                                    defaultValue={option.value}
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                                                />
                                                <label
                                                    htmlFor={`${filter.id}-${option.value}`}
                                                    className="ml-3 text-sm font-medium text-gray-900"
                                                >
                                                    {option.label}
                                                </label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                    Location
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Delhi</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Bangalore</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Pune</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Hyderabad</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Mumbai</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                    Experience
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Fresher</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">SDE 1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">SDE 2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">SDE 3</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">SDE 4 or higher</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                    Prefered Mode
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Remote</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Onsite</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Hybrid</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="h-[400px] w-full rounded-lg px-2 lg:col-span-9 lg:h-full">
                        <TableFour />
                    </div>
                </div>
            </div>
        </section>
    )
}
