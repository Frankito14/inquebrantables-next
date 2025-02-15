//Images
import ImageNosotros from '@/images/nosotros.jpg'

//Components
import Image from 'next/image'
import Section from '@/layouts/Section'
import Button from '@/components/Button'

export default function Nosotros() {

    const BUTTON_URL = "https://drive.google.com/drive/folders/1RHYEJ9E4Ls-m5vsBZirHKFcibCXLC9jw?usp=sharing"

    return (
        <Section id="Nosotros">
            <div>
                <Image
                    src={ImageNosotros}
                    className="rounded"
                    alt="Nosotros"
                />
            </div>
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center sm:text-left">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        Nosotros
                    </h2>

                    <p className="text-gray-500 mt-4 md:block text-left">
                    Somos INQUEBRANTABLES, el centro de estudiantes de la UNaHur, agrupación estudiantil autónoma y autogestiva que reivindica la educación pública, no arancelada, inclusiva y de calidad. Vamos a estar acompañándote en este nuevo camino en la UNaHur.
                    </p>

                    <div className="mt-8">
                        <Button title="Formar parte" href={BUTTON_URL}/>
                    </div>
                </div>
            </div>


        </Section>
    )
}