import Image from 'next/image'

//Images
import Logo from '@/images/logo.png'
import Link from 'next/link'
import EnterAnimation from '@/animations/EnterAnimation'

export default function Banner() {
    const URL = "https://www.instagram.com/inquebrantables.unahur/"

    return (
        <section className="relative bg-[url('./public/banner.png')] bg-cover bg-local md:bg-fixed bg-center bg-no-repeat">
            <EnterAnimation>
                <div
                    className="absolute inset-0 "
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 md:flex md:justify-around md:h-screen items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                            Inquebrantables

                            <strong className="block font-extrabold text-emerald-500"> UNaHur. </strong>
                        </h1>

                        <div className="mt-4 max-w-lg text-gray-200 sm:text-md/relaxed  sm:text-left p-6 sm:p-0">
                            <ul className='list-disc list-inside marker:text-emerald-500 hidden sm:block'>
                                <li className='whitespace-nowrap'>Centro de estudiantes de la Universidad Nacional de Hurlingham.</li>
                                <li>Reivindicando el Pensamiento Nacional.</li>
                                <li>Educacion Pública, Gratuita y de Calidad</li>
                            </ul>
                            <p className='block sm:hidden'>Centro de estudiantes de la Universidad Nacional de Hurlingham.</p>
                        </div>

                        <div className="mt-8 px-8 sm:px-0 flex flex-wrap justify-center sm:justify-start gap-4 text-center">
                            <Link
                                href={URL}
                                target='_blank'
                                className="w-full rounded-md bg-emerald-600 px-12 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 focus:ring-3 focus:outline-hidden sm:w-auto transition"
                            >
                                Ser parte
                            </Link>

                            <Link
                                href="/#Nosotros"
                                className="w-full rounded-md bg-white px-12 py-3 text-sm font-bold text-emerald-600 shadow-sm hover:text-emerald-700 focus:ring-3 focus:outline-hidden sm:w-auto transition"
                            >
                                Ver más
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image src={Logo} alt="Logo" className='hidden md:block m-auto ' />
                    </div>
                </div>
            </EnterAnimation>
        </section>
    )
}