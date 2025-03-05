import * as motion from "motion/react-client"

type EnterAnimationProps = {
    children: React.ReactNode,
}

export default function EnterAnimation({children} : EnterAnimationProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y:25 }}
            whileInView={{ opacity: 1, scale: 1, y:0 }}
            viewport={{once: true}}
            transition={{duration: 0.4, delay: 0.1}}
        >
            {children}
        </motion.div>
    )
}