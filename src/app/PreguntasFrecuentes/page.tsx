import EnterAnimation from "@/animations/EnterAnimation"


type Faq = {
    question: string,
    answer: string
}

const Faq = ({ question, answer }: Faq) => {
    return (
        <div className="space-y-4 shadow-md">
            <details
                className="group border-s-4 border-emerald-600 bg-neutral-50 shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium text-gray-600">
                        {question}
                    </h2>

                    <span className="shrink-0 rounded-full bg-emerald-100 p-1.5 text-emerald-600 sm:p-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-500">
                    {answer}
                </p>
            </details>
        </div>
    )
}

const preguntasFrecuentes: Faq[] = [
    {
        question: '¿Puedo unirme si no soy estudiante de la universidad?',
        answer: 'Si, cualquiera que esté dispuesto a colaborar tiene la posibilidad de unirse.'
    },
    {
        question: '¿En que horarios están disponibles?',
        answer: 'Podés encontrarnos de Lunes a Viernes de 9:00 a 19:00 en Chuquisaca 3616, Villa Tesei.'
    },
    {
        question: '¿Su espacio es exclusivo para estudiantes?',
        answer: 'No, cualquier persona de la comunidad es bienvenida.'
    },
]

export default function Page() {
    return (
        <section id="PreguntasFrecuentes" className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
            <EnterAnimation>
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Preguntas frecuentes</h2>

                    <p className="mx-auto mt-4 max-w-md text-gray-500">
                        Consultas que respondemos con frecuencia.
                    </p>
                </header>
                </EnterAnimation>
                <div className="grid grid-cols-1 gap-4 m-auto w-auto mt-8">
                    {preguntasFrecuentes.map((faq, index) =>
                        <Faq key={index} question={faq.question} answer={faq.answer} />
                    )
                    }
                </div>
            
        </section>
    )
}