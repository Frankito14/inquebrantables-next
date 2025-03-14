'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import 'animate.css';


//Components
import BurgerMenu from '@/components/BurgerMenu'

//Icons
import IconInicio from '@/svg/inicio.svg'
import IconLocal from '@/svg/local.svg'
import IconFaq from '@/svg/faq.svg'
import IconSugerencias from '@/svg/sugerencias.svg'
import iconEnlacesUtiles from '@/svg/enlacesUtiles.svg'

type NavigatorItem = {
    name: string,
    path: string,
    icon: string,
    scroll?: boolean
}

const NavigatorLink = ({ name, path, icon, scroll }: NavigatorItem) => {
    return (
        <Link href={path} scroll={true} className="flex justify-start p-2 rounded gap-1 hover:bg-opacity-50 hover:bg-gray-900 ">
            <Image className="w-4" src={icon} alt={name}/>
            <span className="text-sm">{name}</span>
        </Link>

    )
}

const navigatorItems: NavigatorItem[] = [
    {
        name: "Inicio",
        path: "/#Nosotros",
        icon: IconInicio,
        scroll: true
    },
    {
        name: "Local",
        path: "/NuestroLocal#NuestroLocal",
        icon: IconLocal,
        scroll: true
    },
    {
        name: "FAQ",
        path: "/PreguntasFrecuentes#PreguntasFrecuentes",
        icon: IconFaq,
        scroll: true
    },
    {
        name: "Links",
        path: "/EnlacesUtiles#EnlacesUtiles",
        icon: iconEnlacesUtiles,
        scroll: true
    },
    {
        name: "Sugerencias",
        path: "https://docs.google.com/forms/d/e/1FAIpQLScpPp0X5-nzINu4zKNBy_XR_2nqFP-Vg7Tb8a6Bb135juM1HA/viewform?usp=pp_url",
        icon: IconSugerencias,
        scroll: true
    },
]

export default function Navigator() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className='hidden sm:block w-full text-white absolute z-10'>
                <div className='flex flex-wrap flex-items justify-center sm:justify-end gap-4 p-4'>
                    {navigatorItems.map((navItem, index) => {
                        return (
                            <NavigatorLink
                                key={index}
                                name={navItem.name}
                                path={navItem.path}
                                icon={navItem.icon}
                                scroll={navItem.scroll}
                            />
                        )
                    })}
                </div>
            </nav>
            <nav className='fixed sm:hidden w-full text-white bg-emerald-800 z-10'>
                <div className='p-2 z-30'>
                    <BurgerMenu onOpen={() => setOpen(!open)} isOpen={open} />
                </div>
                {open &&
                    <div className='z-30 flex flex-wrap flex-items justify-center sm:justify-end gap-4 p-2 animate__animated animate__slideInLeft animate__faster'>
                        {navigatorItems.map((navItem, index) => {
                            return (
                                <div className='w-full' key={index}>
                                    <NavigatorLink
                                        name={navItem.name}
                                        path={navItem.path}
                                        icon={navItem.icon}
                                        scroll={navItem.scroll}
                                    />
                                </div>
                            )
                        })}
                    </div>
                }
            </nav>
        </>

    )
}
