'use client'
import { Fragment, useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";


export default function ParallaxImage({
    image,
    alt,
}: {
    image: string,
    alt: string,
}) {

    const container = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);

    return (
        <Fragment>
            <motion.div ref={container}>

            </motion.div>
        </Fragment>
    );
}