"use client"

import { useEffect, useState } from 'react';
import styles from '@/styles/components/navbar.module.scss';
import Image from 'next/image';
import Logo from '@/public/images/logo.png'

export default function Navbar() {
    const [isScroll, setIsScroll] = useState(false);
    const [isBtnShow, setIsBtnShow] = useState(true);

    useEffect(() => {
        function onScroll() {
            if (window.scrollY <= 20) {
                setIsScroll(false);
                setIsBtnShow(true);
            } else {
                setIsScroll(true);
                setIsBtnShow(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const scrollDown = () => {
        const targetHeight = document.getElementById('teamConcept').offsetTop;
        window.scroll({
            top: targetHeight,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <nav className={styles.container}>
            <Image src={Logo} alt='logo' className={isScroll ? styles.small : styles.large} priority />
            {isBtnShow && <span onClick={() => scrollDown()} className={styles.start}>開始探索</span>}
        </nav>
    )
}
