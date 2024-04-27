import styles from '@/styles/components/forest.module.scss'
import { useState } from 'react';
import { viewsData } from '@/data/views.js';
import { scrollMenu } from '@/data/scrollMenu';

export default function Forest() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeVideo, setActiveVideo] = useState("");

	const Intro = ({ spot, location }) => {
		return (
			<div className={styles.intro}>
				<h6>{spot}</h6>
				<p>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
						<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
					</svg>
					<span>台灣{' | '}{location}</span>
				</p>
			</div>
		)
	};

	const PlayButton = ({ spot }) => {
		return (
			<div className={styles.play} onClick={() => openVideo(spot)}>
				<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
					<path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
				</svg>
			</div>
		)
	};

	const openVideo = (spot) => {
		setIsOpen(true);
		const activeSpot = viewsData.find(i => i.location === spot).video;

		setActiveVideo(activeSpot);
	};

	const closeVideo = () => {
		setIsOpen(false);
		setActiveVideo("");
	};

	return (
		<>
			<section className={styles.container} id={scrollMenu.forest}>
				<div className={styles.row}>
					<div className={`${styles.item} ${styles.large}`}>
						<Intro spot="阿里山" location="嘉義" />
						<PlayButton spot="阿里山" />
					</div>
					<div className={`${styles.item} ${styles.small}`}>
						<Intro spot="東眼山" location="桃園" />
						<PlayButton spot="東眼山" />
					</div>
					<div className={`${styles.item} ${styles.small}`}>
						<Intro spot="鵝公髻山" location="新竹" />
						<PlayButton spot="鵝公髻山" />
					</div>
					<div className={`${styles.item} ${styles.large}`}>
						<Intro spot="望古瀑布" location="新北" />
						<PlayButton spot="望古瀑布" />
					</div>
				</div>
			</section >
			{isOpen &&
				<div className={styles.video} onClick={() => closeVideo()}>
					<span className={styles.close} onClick={() => closeVideo()}>
						<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
							<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
						</svg>
					</span>
					<iframe
						width="1120"
						height="630"
						src={activeVideo}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen>
					</iframe>
				</div>
			}
		</>
	)
}
