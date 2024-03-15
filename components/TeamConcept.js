import styles from '@/styles/components/teamConcept.module.scss';

export default function TeamConcept() {
    return (
        <section className='section'>
            <div className={styles.container}>
                <section className={`${styles.item} ${styles.description}`}>
                    <h1>團隊理念</h1>
                    <p>護國神殿是一部關於生態環境的沉浸式實境片，我們讓觀賞者透過VR虛擬實境的方式進入森林，
                        在進入影片後，布景可以體驗到360度的影片，和可以聽到來自四面八方的音效，滿足你的視覺與聽覺！</p>
                </section>
                <section className={`${styles.item} ${styles.vedio}`}>
                    {/* <iframe
                        src="https://www.youtube.com/embed/SnUBb-FAlCY?si=EeKzLmJcZqx-WTZX"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe> */}
                </section>
            </div >
        </section >
    )
}
