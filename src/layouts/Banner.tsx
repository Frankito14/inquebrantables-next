import Image from 'next/image'

//Images
import Logo from '@/images/logo.png'
import Link from 'next/link'

export default function Banner() {
    const URL = "https://www.instagram.com/inquebrantables.unahur/"

    return (
        <section className="relative bg-[url('./public/banner.png')] bg-cover bg-center bg-no-repeat">
            <div
                className="absolute inset-0 "
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 md:flex md:justify-around h-screen items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                        Inquebrantables

                        <strong className="block font-extrabold text-emerald-500"> UNaHur. </strong>
                    </h1>

                    <p className="mt-4 max-w-lg text-gray-300 sm:text-lg/relaxed text-justify sm:text-left p-6 sm:p-0">
                        Somos el Centro de estudiantes de la Universidad Nacional de Hurlingham. Reivindicando el Pensamiento Nacional. Educacion Pública, Gratuita y de Calidad
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 text-center">
                        <Link
                            href={URL}
                            target='_blank'
                            className="block rounded-md bg-emerald-600 px-12 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 focus:ring-3 focus:outline-hidden sm:w-auto transition"
                        >
                            Ser parte
                        </Link>

                        <Link
                            href="/#Nosotros"
                            className="block rounded-md bg-white px-12 py-3 text-sm font-bold text-emerald-600 shadow-sm hover:text-emerald-700 focus:ring-3 focus:outline-hidden sm:w-auto transition"
                        >
                            Ver más
                        </Link>
                    </div>
                </div>
                <div>
                    <Image src={Logo} alt="Logo" className='hidden md:block m-auto' />
                </div>
            </div>
        </section>
    )
}