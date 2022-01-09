import React, {useState} from 'react'
import {Switch as HeadLessSwitch} from '@headlessui/react'

type SwitchProps = {
    onChange: Function,
    label?: string,
    checked?: boolean,
    className?: string,
}

const Switch = ({onChange, label, checked = false, className = ''}: SwitchProps) => {
    const [enabled, setEnabled] = useState(checked)

    return (
        <HeadLessSwitch.Group as="div" className={`flex items-center ${className}`}>
            {label && (
                <HeadLessSwitch.Label as="span" className="mr-3">
                    <span className="text-base font-medium text-white">
                        {label}
                    </span>
                </HeadLessSwitch.Label>
            )}
            <HeadLessSwitch
                checked={enabled}
                onChange={() => {
                    setEnabled(!enabled)
                    onChange(!enabled)
                }}
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${enabled ? 'bg-primary' : 'bg-gray-400'}`}
            >
                <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${enabled ? 'translate-x-5' : 'translate-x-0'}`}
                />
            </HeadLessSwitch>
        </HeadLessSwitch.Group>
    )
}

export default Switch
