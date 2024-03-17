"use client"
import { useState } from 'react';
import styles from '@/styles/components/views.module.scss';
import { viewsData } from '@/data/views.js';
import Image from 'next/image';

export default function Views() {
	const [active, setActive] = useState(1);
	const [isOpen, setIsOpen] = useState(false);
	const [activeVRImage, setActiveVRImage] = useState('');

	const changeActive = (id) => {
		setActive(id);
	}
	const PlayButton = (photoId) => {
		return (
			<span className={styles.play} onClick={() => openVideo(photoId)}>
				<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-badge-vr" viewBox="0 0 16 16">
					<path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
					<path d="M4.508 11h1.429l1.99-5.999H6.61L5.277 9.708H5.22L3.875 5.001H2.5zm6.387-5.999H8.5V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9zm-1.222 2.87V5.933h1.05c.63 0 1.05.347 1.05.989 0 .633-.408.95-1.067.95z" />
				</svg>
			</span>
		)
	};

	const openVideo = ({ photoId }) => {
		setIsOpen(true);

		const vrPath = viewsData[active - 1].vrImages[photoId];
		setActiveVRImage(vrPath);
	};

	const closeVideo = () => {
		setIsOpen(false);
		setActiveVRImage('');
	};

	return (
		<>
			<section className={styles.container}>
				<div className={styles.tabGroup}>
					{viewsData && viewsData.map((view) =>
						<span
							key={view.id}
							className={`${styles.tab} ${active === view.id && styles.active}`}
							onClick={() => changeActive(view.id)}>
							{view.location}
						</span>
					)}
				</div>
				<div className={styles.items}>
					{viewsData && viewsData[active - 1].images.map((n, index) =>
						<div key={index} className={styles.item}>
							<Image src={n} alt={'view'} priority />
							<PlayButton photoId={index} />
						</div>
					)}
				</div>
				<span className={styles.locationTitle}>{viewsData[active - 1].location}</span>
			</section>
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
						src={activeVRImage}
						frameBorder="0"
						allowFullScreen
					/>
				</div>
			}
		</>
	)
}
