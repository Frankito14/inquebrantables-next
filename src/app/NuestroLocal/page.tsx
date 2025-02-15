import Image1 from '@/images/local/local1.jpg'
import Image2 from '@/images/local/local2.jpg'
import Image3 from '@/images/local/local3.jpg'
import Image4 from '@/images/local/local4.jpg'
import Image5 from '@/images/local/local5.jpg'
import Image6 from '@/images/local/local6.jpg'
import Image7 from '@/images/local/local7.jpg'
import Image8 from '@/images/local/local8.jpg'

import { StaticImageData } from 'next/image'
import Image  from 'next/image'


type GalleryItem = {
    img: StaticImageData,
    description?: string
}

const GalleryItem = ({img, description}: GalleryItem) => {
    return (
        <li>
            <a href="#" className="group block overflow-hidden">
                <Image
                    src={img}
                    alt="Local"
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white px-2 py-3 text-center">
                    <p className="">
                        <span className="text-sm text-gray-500"> { description } </span>
                    </p>
                </div>
            </a>
        </li>
    )
}

const gallery = [
    {
        img: Image1,
    },
    {
        img: Image2,
    },
    {
        img: Image3,
    },
    {
        img: Image4,
    },
    {
        img: Image5,
    },
    {
        img: Image6,
    },
    {
        img: Image7,
    },
    {
        img: Image8,
    },
]

export default function NuestroLocal() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Nuestro local</h2>

                    <p className="mx-auto mt-4 max-w-md text-gray-500">
                        ¡Conocé el lugar donde podes encontrarnos!
                    </p>
                </header>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        gallery.map((item, index) => 
                        <GalleryItem key={index} img={item.img} description={`Nuestro local #${index + 1}`}/>
                    )
                    }
                </ul>
            </div>
        </section>
    )
}