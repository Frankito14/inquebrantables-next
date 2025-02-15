//Images
import ImageBancoApuntes from '@/images/banco_apuntes.png'

//Components
import Image from 'next/image'
import Section from '@/layouts/Section'
import Button from '@/components/Button'

export default function BancoDeApuntes() {

    const BUTTON_URL = "https://drive.google.com/drive/folders/1RHYEJ9E4Ls-m5vsBZirHKFcibCXLC9jw?usp=sharing"

    return (
        <div>
            <Section id="BancoApuntes">
                <div>
                    <Image
                        src={ImageBancoApuntes}
                        className="rounded p-8"
                        alt="Banco apuntes"
                    />
                </div>
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center sm:text-left">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Banco de apuntes
                        </h2>

                        <p className="text-gray-500 mt-4 md:block text-left">
                            Ingresa al banco de apuntes, una recopilacion de material en la que podras encontrar apuntes, notas y ejercicios para la materia que necesites.
                        </p>

                        <p className="text-gray-500 mt-4 md:block text-left">
                        Mandá tus apuntes a: <span className='text-cyan-700 hover:text-cyan-600 hover:cursor-pointer font-semibold transition' >inquebrantables.unahur@gmail.com</span>
                        </p>

                        <div className="mt-8">
                            <Button title="Ingresar" href={BUTTON_URL} />
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}