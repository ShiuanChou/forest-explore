import styles from '@/styles/components/teamConcept.module.scss';
import Image from 'next/image';
import Logo from '@/public/images/360Logo.png';
import { scrollMenu } from '@/data/scrollMenu';

export default function TeamConcept() {
    return (
        <section className={styles.container} id={scrollMenu.concept}>
            <section className={`${styles.item} ${styles.vedio}`}>
                <video src={require('../public/videos/team.mp4')} width={'100%'} controls autoPlay muted />
            </section>
            <section className={`${styles.item} ${styles.description}`}>
                <h1>團隊理念</h1>
                <p>護國神殿是一部關於生態環境的沉浸式實境片，我們讓觀賞者透過VR虛擬實境的方式進入森林，
                    在進入影片後，布景可以體驗到360度的影片，和可以聽到來自四面八方的音效，滿足你的視覺與聽覺！
                </p>
                <h6>團隊 Logo：</h6>
                <Image src={Logo} width={150} height={150} priority alt='logo' />
            </section>
        </section >
    )
}
