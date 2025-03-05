import EnterAnimation from "@/animations/EnterAnimation"

type PropsSection = {
    id: string,
    children: React.ReactNode,
}

export default function Section({ children, id }: PropsSection) {
    return (
        <section id={id} className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <EnterAnimation>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    {children}
                </div>
            </EnterAnimation>
        </section>
    )
}