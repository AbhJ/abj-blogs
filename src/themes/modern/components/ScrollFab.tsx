import React, { useCallback, useEffect, useState } from 'react';

/**
 * A subtle floating scroll button — appears after a little scroll, flips
 * direction based on how far down the page you are.
 *
 * - In the top half of the page, clicking scrolls to the bottom.
 * - In the bottom half, clicking scrolls back to the top.
 *
 * Matches the modern theme's quiet, parchment-like aesthetic.
 */
const ScrollFab: React.FC = () => {
	const [visible, setVisible] = useState(false);
	const [pastHalfway, setPastHalfway] = useState(false);

	useEffect(() => {
		let raf = 0;
		const update = () => {
			const y = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			setVisible(y > 200);
			setPastHalfway(docHeight > 0 && y / docHeight > 0.5);
			raf = 0;
		};
		const onScroll = () => {
			if (raf) return;
			raf = requestAnimationFrame(update);
		};
		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);

	const handleClick = useCallback(() => {
		const target = pastHalfway ? 0 : document.documentElement.scrollHeight;
		window.scrollTo({ top: target, behavior: 'smooth' });
	}, [pastHalfway]);

	return (
		<button
			type="button"
			className={`scroll-fab ${visible ? 'scroll-fab--visible' : ''}`}
			onClick={handleClick}
			aria-label={pastHalfway ? 'Scroll to top' : 'Scroll to bottom'}
			title={pastHalfway ? 'Scroll to top' : 'Scroll to bottom'}
		>
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				style={{ transform: pastHalfway ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}
				aria-hidden="true"
			>
				<path d="M12 5v14M19 12l-7 7-7-7" />
			</svg>
		</button>
	);
};

export default ScrollFab;
