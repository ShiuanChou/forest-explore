import styles from '@/styles/components/record.module.scss';
import Footer from './Footer';
import { scrollMenu } from '@/data/scrollMenu';

export default function Record() {
    return (
        <section className={styles.container} id={scrollMenu.record}>
            <div className={styles.content}>
                <h1>團隊紀錄片</h1>
                <iframe
                    width="1120"
                    height="630"
                    src="https://www.youtube.com/embed/Zq9ZB7HDLMg?si=hNUyY95kiAXRukNG&amp;autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            </div>
            <Footer />
        </section>
    )
}
