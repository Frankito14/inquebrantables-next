import Image from "next/image"
import ImageFooter from '@/images/footer.png'

const Contacto = () => {
    return (
        <div className="text-xs text-center">
            <div className='flex flex-nowrap justify-start mt-5 p-2 gap-2'>
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                <span className="mt-0.5">Chuquisaca 3616</span>
            </div>
            <div className='flex flex-nowrap justify-start p-2 gap-2'>
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                <span className="mt-0.5">Tutorias gratuitas: 11-23908174</span>
            </div>
            <div className='flex flex-nowrap justify-start p-2 gap-2'>
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                <span className="mt-0.5">Educación gratuita, publica y de calidad</span>
            </div>
        </div>
    )
}

const RedesSociales = () => {
    return (
        <div className='flex flex-wrap justify-center gap-20'>
            <a href="https://www.instagram.com/inquebrantables.unahur/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 w-10 hover:fill-emerald-600 transition" viewBox="0 0 16 16"><path d="M8 5.67C6.71 5.67 5.67 6.72 5.67 8S6.72 10.33 8 10.33S10.33 9.28 10.33 8S9.28 5.67 8 5.67M15 8c0-.97 0-1.92-.05-2.89c-.05-1.12-.31-2.12-1.13-2.93c-.82-.82-1.81-1.08-2.93-1.13C9.92 1 8.97 1 8 1s-1.92 0-2.89.05c-1.12.05-2.12.31-2.93 1.13C1.36 3 1.1 3.99 1.05 5.11C1 6.08 1 7.03 1 8s0 1.92.05 2.89c.05 1.12.31 2.12 1.13 2.93c.82.82 1.81 1.08 2.93 1.13C6.08 15 7.03 15 8 15s1.92 0 2.89-.05c1.12-.05 2.12-.31 2.93-1.13c.82-.82 1.08-1.81 1.13-2.93c.06-.96.05-1.92.05-2.89m-7 3.59c-1.99 0-3.59-1.6-3.59-3.59S6.01 4.41 8 4.41s3.59 1.6 3.59 3.59s-1.6 3.59-3.59 3.59m3.74-6.49c-.46 0-.84-.37-.84-.84s.37-.84.84-.84s.84.37.84.84a.8.8 0 0 1-.24.59a.8.8 0 0 1-.59.24Z" /></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCc8etfYDV-InO9WnTqvfLgw" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 w-10 hover:fill-emerald-600 transition" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z" /></svg>
            </a>
            <a href="https://linktr.ee/inquebrantablesunahur" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 w-10 hover:fill-emerald-600 transition" viewBox="0 0 24 24"><path d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z" /></svg>
            </a>
        </div>
    )
}


export default function Footer() {
    return (
        <footer className="bg-white text-gray-600 text-center">
            <div className="pt-6">
                <RedesSociales />
            </div>
            <hr className="mt-5" />
            <div className="flex flex-wrap gap-5 justify-evenly items-center">
                <Contacto />
                <div className="p-2">
                    <Image className="w-96 h-full mx-auto mt-3" src={ImageFooter} alt="FooterInfo" />
                </div>
            </div>
        </footer>
    )
}