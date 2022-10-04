import React, { useState, useEffect } from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa'
import styles from "@/styles/components/ScrollTop.module.scss"

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // console.log(window.scrollY)
            console.log(window.screenY)
            if(window.scrollY > 1100){
                setShowScrollTopButton(true)
            } else {
                setShowScrollTopButton(false)
            }
        })
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
    <div>
        {showScrollTopButton && <FaAngleDoubleUp className={styles.top_btn_position} onClick={scrollTop}/>}
    </div>
    )
}

export default ScrollToTop;