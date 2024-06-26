"use client"
import { ReactNode, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, easeIn } from 'framer-motion'



const Reveals = ({ children }:{children:ReactNode}) => {
    const ref = useRef(null)
    const isInView = useInView(ref);
    const mainControl = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControl.start('visible');
            slideControls.start('visible');
        }

    }, [isInView, mainControl, slideControls]);
    return (
        <div ref={ref} className='relative w-fit overflow-hidden '>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial='hidden'
                animate={slideControls}
                transition={{ duration: 1, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: '100%' }
                }}
                initial='hidden'
                animate={slideControls}
                transition={{ duration: 1, ease: easeIn }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "#0059B1",
                    zIndex: '20'
                }}
            >

            </motion.div>
        </div>
    );
};

export default Reveals;