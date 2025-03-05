//Images
import ImageTarjetaDescuento from '@/images/tarjeta.png'

//Components
import Image from 'next/image'
import Section from '@/layouts/Section'
import Button from '@/components/Button'

export default function TarjetaDescuentos() {

    const BUTTON_URL = "https://www.google.com/maps/d/u/0/viewer?mid=1SdedlFxPc1TPNYVePlY3wiefgb-Lkjs&ll=-34.59960733631183%2C-58.64726716093161&z=12"

    return (
        <div className="relative bg-[url('./public/banner.png')] bg-cover bg-center bg-no-repeat">
            <Section id="TarjetaDescuentos">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center sm:text-left">
                        <h2 className="text-2xl font-bold text-gray-100 md:text-3xl">
                            Tarjetas de descuento
                        </h2>
                        <div className="text-gray-200 text-left">
                            <p className="mt-4">
                                Pedí tu tarjeta de descuento para poder acceder a increíbles beneficios en los locales adheridos.
                            </p>

                            <p className="mt-4 ">
                                Para ser beneficiario tenes que acercarse al centro para hacerla en el momento.
                            </p>
                        </div>

                        <div className="mt-8">
                            <Button title="Ver locales adheridos" href={BUTTON_URL} />
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src={ImageTarjetaDescuento}
                        className="rounded"
                        alt="Tarjeta de descuentos"
                    />
                </div>
            </Section>
        </div>
    )
}