//Images
import ImageCafeInquebrantable from '@/images/cafe.png'

//Components
import Image from 'next/image'
import Section from '@/layouts/Section'
import Button from '@/components/Button'

export default function CafeInquebrantable() {

    const precioCafe = ("$" + process.env.PRECIO_CAFE) || "Consultar"

    return (
        <div className="relative bg-[url('./public/banner_cafe.png')] bg-cover bg-center bg-no-repeat">
            <Section id="CafeInquebrantable" columns={1}>
                <div className='flex justify-center flex-wrap w-full gap-4 items-center'>
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center sm:text-left">
                            <h2 className="text-2xl font-bold text-gray-100 md:text-3xl">
                                Café Inquebrantable
                            </h2>
                            <div className="text-gray-200 text-center sm:text-left">
                                <p className="my-4 align-middle">
                                    Disfruta de un buen café por tan solo <span
                                        className='text-green-400 text-xl font-bold  '>
                                        {precioCafe}
                                    </span>
                                </p>
                                <ul className='list-disc list-inside marker:text-emerald-500 hidden sm:block inline'>
                                    <li>Café con leche.</li>
                                    <li>Café cortado.</li>
                                    <li>Lágrima</li>
                                    <li>Mocachino</li>
                                    <li>Y más!</li>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={ImageCafeInquebrantable}
                            className="rounded w-48 sm:w-60 m-auto mx-16 drop-shadow-[2px_2px_16px_rgb(100,100,100)]"
                            alt="Café Inquebrantable"
                        />
                    </div>
                </div>
            </Section>

        </div>
    )
}