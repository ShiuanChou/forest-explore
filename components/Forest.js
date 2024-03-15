import styles from '@/styles/components/forest.module.scss'

export default function Forest() {
	return (
		<section className='section'>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={`${styles.item} ${styles.large}`}></div>
					<div className={`${styles.item} ${styles.small}`}></div>
					<div className={`${styles.item} ${styles.small}`}></div>
					<div className={`${styles.item} ${styles.large}`}></div>
				</div>
			</div >
		</section >
	)
}
