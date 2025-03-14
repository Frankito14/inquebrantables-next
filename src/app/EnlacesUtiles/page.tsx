import EnterAnimation from '@/animations/EnterAnimation'

//Icons
import iconWhatsapp from '@/svg/whatsapp.svg'
import iconCafesito from '@/svg/cafesito.svg'
import iconPc from '@/svg/pc.svg'
import iconCalendar from '@/svg/calendar.svg'
import iconQuestion from '@/svg/question.svg'

//Next
import Image from 'next/image'
import Link from 'next/link'


type UsefulLink = {
    id: number
    name: string,
    path: string,
    icon: string,
    description?: string
    bgColor?: string
}

const UsefulLinkButton = ({ id, name, path, icon, description, bgColor }: UsefulLink) => {

    const bgStyle = (id%2 !== 0) ? "bg-emerald-600 hover:bg-emerald-800" : "bg-cyan-600 hover:bg-cyan-800"

    return (
        <div className={bgStyle + ' transition flex align-center rounded '}>
            <Link href={path} target='_blank' className="w-full h-full text-center p-6 pb-2">
                <Image className="w-16 m-auto" src={icon} alt={name} />
                <div className='flex items-center justify-center h-16 w-full'>
                    <span className="text-white font-bold text-sm">{name}</span>
                </div>
            </Link>
        </div>

    )
}

const usefulLinks: UsefulLink[] = [
    {
        id: 1,
        name: "Whatsapp de la comunidad",
        path: "https://chat.whatsapp.com/JiLJF7M9As97QV27ufRoMv",
        icon: iconWhatsapp,
        description: "Unite a nuestra comunidad de whatsapp",
    },
    {
        id: 2,
        name: "SIU Guarani",
        path: "https://servicios.unahur.edu.ar/unahur3w/inicio_alumno",
        icon: iconPc,
        description: "Lorem ipsum",
    },
    {
        id: 3,
        name: "¿Dónde Curso?",
        path: "https://unahur.edu.ar/inicia-el-primer-cuatrimestre-2024/",
        icon: iconQuestion,
        description: "Lorem ipsum",
    },
    {
        id: 4,
        name: "Campus Unahur",
        path: "https://campus2025.unahur.edu.ar/",
        icon: iconPc,
        description: "Lorem ipsum",
    },
    {
        id: 5,
        name: "Calendario Académico",
        path: "https://unahur.edu.ar/calendario-academico/",
        icon: iconCalendar,
        description: "Lorem ipsum",
    },
    {
        id: 6,
        name: "Cafesito",
        path: "https://cafecito.app/ceunahur2024",
        icon: iconCafesito,
        description: "Lorem ipsum",
    }
]

export default function EnlacesUtiles() {
    return (
        <section id="EnlacesUtiles">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <EnterAnimation>
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Enlaces Útiles</h2>

                        <p className="mx-auto mt-4 max-w-md text-gray-500">
                            ¡Enlaces que te serán de utilidad a lo largo de tu cursada!
                        </p>
                    </header>
                </EnterAnimation>

                <div className="mt-8 p-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                    {
                        usefulLinks.map((link) =>
                                <UsefulLinkButton
                                    id={link.id}
                                    key={link.id}
                                    name={link.name}
                                    icon={link.icon}
                                    path={link.path}
                                />
                        )
                    }
                </div>
            </div>
        </section>
    )
}