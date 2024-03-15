"use client"

import { useCallback, useEffect, useState } from 'react';
import styles from '@/styles/components/navbar.module.scss';
import Image from 'next/image';
import Logo from '@/public/images/logo.png'

export default function Navbar() {
    const [isScroll, setIsScroll] = useState(false);
    const [isBtnShow, setIsBtnShow] = useState(false);

    const changeHeight = () => {
        if (window.scrollY <= 100) {
            setIsScroll(false);
            setIsBtnShow(true);
        } else {
            setIsScroll(true);
            setIsBtnShow(false);
        }
    };

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeHeight);
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.scrollY <= 100) {
                setIsScroll(false);
                setIsBtnShow(true);
            } else {
                setIsScroll(true);
                setIsBtnShow(false);
            }
        }
    }, [])


    return (
        <nav className={styles.container}>
            <Image src={Logo} alt='logo' className={isScroll ? styles.small : styles.large} priority />
            {isBtnShow && <span className={styles.start}>開始探索</span>}
        </nav>
    )
}
