type PropsButton = {
    title: string,
    href: string
}

export default function Button({title, href}:PropsButton) {
    return (
        <a
            className="inline-flex items-center gap-2 rounded-md border border-emerald-600 bg-emerald-600 px-8 py-3 text-white hover:bg-transparent hover:text-emerald-600 focus:ring-3 focus:outline-hidden transition"
            href={href}
            target="_blank"
        >
            <span className="text-sm font-medium"> {title}</span>

            <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
            </svg>
        </a>
    )
}