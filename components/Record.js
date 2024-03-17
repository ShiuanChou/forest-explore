import styles from '@/styles/components/record.module.scss';

export default function Record() {
    return (
        <section className={styles.container}>
            <h1>團隊紀錄片</h1>
            <video src={require('../public/videos/team.mp4')} width={'50%'} controls autoPlay muted />
        </section>
    )
}
