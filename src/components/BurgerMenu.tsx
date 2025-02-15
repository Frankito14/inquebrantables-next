import { MouseEventHandler } from "react"

type PropsBurgerMenu = {
    onOpen: MouseEventHandler,
    isOpen: boolean
}

export default function BurgerMenu({ onOpen, isOpen }: PropsBurgerMenu) {
    return (
        <button className='rounded p-2' onClick={onOpen}>
            {!isOpen
                ? <svg xmlns="http://www.w3.org/2000/svg" className="w-6 m-auto" viewBox="0 0 15 15"><path fill="#ffffff" fillRule="evenodd" d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5" clipRule="evenodd" /></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" className="w-6 m-auto" viewBox="0 0 24 24"><path fill="#ffffff" d="m7.05 5.636l4.95 4.95l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.949 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95z" /></svg>
            }
        </button>
    )
}